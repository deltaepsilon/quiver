import './style.scss';
import { h, Component } from 'preact';
import linkState from 'linkstate';

// Material
import 'preact-material-components/Button/style.css';
import 'preact-material-components/GridList/style.css';

// Services
import { StorageService } from './services';

// Templates
import * as templates from './templates';

export default class FirebaseAuthentication extends Component {
  // Getters
  get templatesMap() {
    return {
      'select-files': (props, state) => this.selectFilesTemplate(props),
      'upload-files': (props, state) => this.uploadFilesTemplate(props, state),
    };
  }

  // Lifecycle
  componentWillMount() {
    this.initTemplates();
    this.initListeners();
    this.changeView('select-files');
  }

  initTemplates() {
    const storageService = StorageService();
    const fire = this.fire.bind(this);
    const changeView = this.changeView.bind(this);
    const setFiles = this.setFiles.bind(this);

    for (let funcName in templates) {
      if (funcName != '__esModule') {
        const func = templates[funcName];
        const instanceName = funcName[0].toLowerCase() + funcName.slice(1);
        this[instanceName] = func({
          storageService,
          fire,
          changeView,
          setFiles,
        });
      }
    }
  }

  initListeners() {
    addEventListener('storageUploaderSnapshot', e => this.handleSnapshot(e.detail.snapshot));
    addEventListener('storageUploaderError', e => console.log('error', e.detail.error));
    addEventListener('storageUploaderComplete', e => console.log('complete'));
  }

  // Render
  render(props, state) {
    const templateFunc = this.templatesMap[this.state.view];

    return (
      <div class="storage-uploader" view={this.state.view}>
        {templateFunc && templateFunc(props, state)}
      </div>
    );
  }

  // Functions
  changeView(view) {
    if (view == 'select-files') {
      this.clearInput();
    }

    this.setState({ view });
    this.fire('storageUploaderViewChanged', { view });
  }

  setFiles(files) {
    return Promise.all(
      files.map(file => {
        return new Promise(resolve => {
          const reader = new FileReader();
          const { name, size, type } = file;
          reader.onload = ({ target }) => {
            const { result } = target;
            const isImage = type.split('/')[0] == 'image';
            resolve({ name, size, type, isImage, result, source: file });
          };
          reader.readAsDataURL(file);
        });
      })
    ).then(files => {
      this.setState({ files });
      this.fire('storageUploaderFilesChanged', { files });
    });
  }

  updateFiles(files) {
    this.setState({ files });
  }

  fire(type, detail) {
    try {
      dispatchEvent(new CustomEvent(type, { bubbles: true, detail }));
    } catch (e) {
      // Handle ie11
      const event = document.createEvent('CustomEvent');
      event.initEvent(type, true, true, detail);
      document.dispatchEvent(event);
    }
  }

  handleError(error) {
    this.fire('storageUploaderError', { error });
  }

  handleSnapshot({ ref, bytesTransferred }) {
    const files = this.state.files.map(file => {
      if (file.name == ref.name) {
        file.bytesTransferred = bytesTransferred;
      }
      return file;
    });
    this.setState({ files });
  }

  clearInput() {
    this.setState({ files: null });
  }
}
