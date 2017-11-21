import './style.scss';
import { Component } from 'preact';
import linkState from 'linkstate';

// Material
import Button from 'preact-material-components/Button';
import Icon from 'preact-material-components/Icon';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';

// SVGs
import emailSvg from '../assets/icons/email.svg';
import phoneSvg from '../assets/icons/call.svg';
import facebookSvg from '../assets/logos/facebook-logo.svg';
import githubSvg from '../assets/logos/github-logo.svg';
import googleSvg from '../assets/logos/google-logo.svg';
import twitterSvg from '../assets/logos/twitter-logo.svg';

export default class FirebaseAuthentication extends Component {
  componentWillMount() {
    this.getFirebase()
      .auth()
      .onAuthStateChanged(currentUser => this.setState({ currentUser }));
  }

  // Getters
  getFirebase() {
    return window.firebase;
  }

  // Login Methods
  getLoginMethodsMap() {
    const firebase = this.getFirebase();
    return {
      email: { text: 'Log In with Email', svg: emailSvg },
      phone: { text: 'Log in by Phone', svg: phoneSvg },
      facebook: {
        text: 'Log in with Facebook',
        svg: facebookSvg,
        provider: new firebase.auth.FacebookAuthProvider(),
      },
      github: {
        text: 'Log in with GitHub',
        svg: githubSvg,
        provider: new firebase.auth.GithubAuthProvider(),
      },
      google: {
        text: 'Log in with Google',
        svg: googleSvg,
        provider: new firebase.auth.GoogleAuthProvider(),
      },
      twitter: {
        text: 'Log in with Twitter',
        svg: twitterSvg,
        provider: new firebase.auth.TwitterAuthProvider(),
      },
    };
  }

  getLoginMethods(props) {
    return Object.keys(props)
      .map(x => props[x])
      .filter(x => typeof x == 'string')
      .map(type => Object.assign({ type }, this.getLoginMethodsMap()[type]));
  }

  // Templates
  getLoginOptionsTemplate(props) {
    const loginMethods = this.getLoginMethods(props);
    return loginMethods.map(method => {
      return (
        <Button
          type={method.type}
          ripple
          raised
          onClick={() => this.handleButtonClick(method.type)}
        >
          <img src={method.svg} />
          <span>{method.text}</span>
        </Button>
      );
    });
  }

  getLoggedInTemplate() {
    return (
      <div>
        <Button ripple raised onClick={() => this.signOut()}>
          Sign Out
        </Button>
        <Button ripple raised onClick={() => this.deleteAccount()}>
          Delete Account
        </Button>
      </div>
    );
  }

  // Handlers
  handleButtonClick(type) {
    const firebase = this.getFirebase();
    const loginMethod = this.getLoginMethodsMap()[type];

    if (loginMethod.provider) {
      firebase.auth().signInWithPopup(loginMethod.provider);
    } else {
      console.log('click type', loginMethod, type);
    }
  }

  signOut() {
    console.log('signOut');
  }

  deleteAccount() {
    console.log('deleteAccount');
  }

  render(props, state) {
    let template;
    console.log('state.currentUser', state.currentUser);
    if (state.currentUser) {
      template = this.getLoggedInTemplate();
    } else {
      template = this.getLoginOptionsTemplate(props);
    }
    return <div class="firebase-authentication">{template}</div>;
  }
}
