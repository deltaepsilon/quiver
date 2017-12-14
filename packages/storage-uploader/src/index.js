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
      'select-files': (props, state) => this.selectFilesTemplate(state),
      'upload-files': (props, state) => this.uploadFilesTemplate(state),
    };
  }

  // Lifecycle
  componentWillMount() {
    this.initTemplates();
    this.changeView('select-files');
  }

  initTemplates() {
    const storageUploader = this;
    const changeView = this.changeView.bind(this);
    const setFiles = this.setFiles.bind(this);

    for (let funcName in templates) {
      if (funcName != '__esModule') {
        const func = templates[funcName];
        const instanceName = funcName[0].toLowerCase() + funcName.slice(1);
        this[instanceName] = func({
          storageUploader,
          changeView,
          setFiles,
        });
      }
    }
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
    // if (view == 'select-files') {
    //   this.clearInput();
    // }

    this.setState({ view });
    this.fire('storageUploaderViewChanged', { view });
  }

  setFiles(files) {
    return Promise.all(
      Array.from(files).map(file => {
        return new Promise(resolve => {
          const reader = new FileReader();
          const { name, size, type } = file;
          reader.onload = ({ target }) => {
            const { result } = target;
            resolve({ name, size, type, result, source: file });
          };
          reader.readAsDataURL(file);
        });
      })
    ).then(files => {
      this.setState({ files });
      this.fire('storageUploaderFilesChanged', { files });
    });
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
    this.fire('storageUploadersError', { error });
  }

  clearInput() {
    this.setState({ files: null });
  }
}
