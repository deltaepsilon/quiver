import './style.scss';
import { Component } from 'preact';
import linkState from 'linkstate';
import { validate } from 'email-validator';

// Material
import Button from 'preact-material-components/Button';
import Icon from 'preact-material-components/Icon';
import Textfield from 'preact-material-components/Textfield';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';
import 'preact-material-components/Textfield/style.css';

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
      .onAuthStateChanged(currentUser => {
        const view = !!currentUser ? 'loggedIn' : 'loginOptions';
        this.setState(Object.assign({}, this.state, { view, currentUser }));
        this.fire('currentUserChanged', { currentUser });
      });
  }

  // Render
  render(props, state) {
    let template;
    switch (state.view) {
      case 'loggedIn':
        template = this.getLoggedInTemplate();
        break;
      case 'loginOptions':
        template = this.getLoginOptionsTemplate(props);
        break;
      case 'inputEmail':
        template = this.getInputEmailTemplate(state);
        break;
      case 'inputPassword':
        template = this.getInputPasswordTemplate(state);
        break;
    }

    return (
      <div class="firebase-authentication" view={this.state.view}>
        {template}
      </div>
    );
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
        <Button
          ripple
          raised
          onClick={() => this.changeView('confirmDelete')}
          className="mdc-theme--secondary-bg"
        >
          Delete Account
        </Button>
      </div>
    );
  }

  getInputEmailTemplate({ email }) {
    const disabled = !this.validateEmail(email);
    return (
      <div>
        <Textfield label="Email" onInput={linkState(this, 'email')} />
        <div class="buttons">
          <Button type="previous" ripple onClick={() => this.changeView('loginOptions')}>
            Previous
          </Button>
          <Button
            type="next"
            ripple
            raised
            onClick={() => this.changeView('inputPassword')}
            disabled={disabled}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  getInputPasswordTemplate({ password }) {
    const disabled = !this.validatePassword(password);
    return (
      <div>
        <Textfield label="Password" type="password" onInput={linkState(this, 'password')} />
        <div class="buttons">
          <Button type="previous" ripple onClick={() => this.changeView('inputEmail')}>
            Previous
          </Button>
          <Button
            type="next"
            ripple
            raised
            onClick={() => this.signInWithEmailAndPassword()}
            disabled={disabled}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  // Handlers
  handleButtonClick(type) {
    const firebase = this.getFirebase();
    const loginMethod = this.getLoginMethodsMap()[type];

    if (loginMethod.provider) {
      firebase.auth().signInWithPopup(loginMethod.provider);
    } else if (loginMethod.view) {
      this.changeView(loginMethod.view);
    }
  }

  // Functions
  signOut() {
    this.getFirebase()
      .auth()
      .signOut()
      .catch(error => this.fire('error', { error }));
  }

  deleteAccount() {
    this.state.currentUser
      .delete()
      .then(() => this.fire('currentUserDeleted'))
      .catch(error => this.fire('error', { error }));
  }

  changeView(view) {
    this.setState(Object.assign({}, this.state, { view }));
  }

  fire(type, detail) {
    dispatchEvent(new CustomEvent(type, { bubbles: true, detail }));
  }

  validateEmail(email) {
    return validate(email);
  }

  validatePassword(password) {
    return password && password.length > 4;
  }

  signInWithEmailAndPassword() {
    const { email, password } = this.state;
    this.getFirebase().auth().signInWithEmailAndPassword(email, password).catch(error => {
      console.log('error', error);
    })
  }

  // Getters
  getFirebase() {
    return window.firebase;
  }

  getLoginMethodsMap() {
    const firebase = this.getFirebase();
    return {
      email: { text: 'Log In with Email', svg: emailSvg, view: 'inputEmail' },
      phone: { text: 'Log in by Phone', svg: phoneSvg, view: 'inputPhone' },
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
}
