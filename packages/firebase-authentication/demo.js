import Card from 'preact-material-components/Card';
import Snackbar from 'preact-material-components/Snackbar';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Snackbar/style.css';
import FirebaseAuthentication from './src';

import { h, Component } from 'preact';
import './demo.css';

export default class App extends Component {
  componentWillMount() {
    this.setState({ alerts: new Set() });
  }
  componentDidMount() {
    addEventListener('currentUserChanged', e => {
      const detail = e.detail || {}; // ie11 workaround; e.detail is undefined instead of an empty object
      const currentUser = detail.currentUser;
      if (currentUser) {
        this.alert(`Account found: ${currentUser.email}`);
      } else {
        this.alert('No account found');
      }
    });

    addEventListener('currentUserDeleted', e => {
      this.alert(`Account deleted: ${e.detail.currentUser.email}`);
    });

    addEventListener('passwordResetSent', e => {
      this.alert(`Reset email sent: ${e.detail.email}`);
    });

    addEventListener('firebaseAuthenticationError', e => {
      this.alert(`Error: ${e.detail.error}`);
    });
  }

  render() {
    const loginMethods = ['email', 'phone', 'google', 'facebook', 'twitter', 'github'];
    const cards = loginMethods.map(method => {
      const props = [method];
      return (
        <Card z="1" padding>
          <Card.Primary>
            <Card.Title>
              <h2 style="text-transform: capitalize;">{method}</h2>
            </Card.Title>
            <FirebaseAuthentication {...props} />
          </Card.Primary>
        </Card>
      );
    });
    return (
      <div class="demo">
        {cards}

        <Card z="1" padding>
          <Card.Primary>
            <Card.Title>
              <h2>Kitchen Sink</h2>
            </Card.Title>
            <FirebaseAuthentication {...loginMethods} />
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
