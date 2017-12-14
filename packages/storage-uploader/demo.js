import Card from 'preact-material-components/Card';
import Snackbar from 'preact-material-components/Snackbar';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Snackbar/style.css';
import StorageUploader from './src';

import { h, Component } from 'preact';
import './demo.css';

export default class App extends Component {
  componentWillMount() {
    this.setState({ alerts: new Set() });
  }
  componentDidMount() {
    addEventListener('storageUploaderError', e => {
      this.alert(`error: ${e.detail.error.message}`);
    });
  }

  render() {
    return (
      <div class="demo">
        <Card z="1" padding>
          <Card.Primary>
            <Card.Title>
              <h2>Firebase Storage Demo</h2>
            </Card.Title>
            <StorageUploader
              mime-types="image/gif,image/jpeg,image/png"
              folder="storage-uploader"
            />
          </Card.Primary>
        </Card>

        <Snackbar ref={snackbar => (this.snackbar = snackbar)} />
      </div>
    );
  }

  // Functions
  alert(message) {
    const alerts = this.state.alerts;
    alerts.add(message);
    this.setState({ alerts });
    this.showAlert();
  }
  __;

  showAlert(callCount = 0) {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }

    const timer = setTimeout(
      () =>
        this.state.alerts.forEach(message => {
          if (!this.snackbar) {
            if (callCount < 10) {
              this.showAlert(callCount + 1);
            } else {
              console.log('callCount max reached', callCount);
            }
          } else {
            this.snackbar.MDComponent.show({ message });
          }
        }),
      100
    );

    this.setState({ timer });
  }
}
