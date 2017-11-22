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
        const view = !!currentUser ? 'logged-in' : 'login-options';
        this.setState({ view, currentUser });
        this.clearInputs();
        this.fire('currentUserChanged', { currentUser });
      });
  }

  componentDidUpdate() {
    const { view, autofocusView } = this.state;
    if (view != autofocusView) {
      this.setState({ autofocusView: view });
      setTimeout(() => {
        const autofocus = this.base.querySelector('[autofocus]');
        if (autofocus) autofocus.focus();
      });
    }
  }

  // Render
  render(props, state) {
    let template;
    switch (state.view) {
      case 'logged-in':
        template = this.getLoggedInTemplate();
        break;
      case 'login-options':
        template = this.getLoginOptionsTemplate(props);
        break;
      case 'input-email':
        template = this.getInputEmailTemplate(state);
        break;
      case 'input-password':
        template = this.getInputPasswordTemplate(state);
        break;
      case 'prompt-register':
        template = this.getPromptRegisterTemplate(state);
        break;
      case 'register-email':
        template = this.getRegisterEmailTemplate(state);
        break;
      case 'email-in-use':
        template = this.getEmailInUseTemplate(state);
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
    return [
      <Button className="center" ripple raised onClick={() => this.signOut()}>
        Sign Out
      </Button>,
      <Button
        ripple
        raised
        onClick={() => this.currentUserDelete()}
        className="center mdc-theme--secondary-bg"
      >
        Delete Account
      </Button>,
    ];
  }

  getInputEmailTemplate({ email }) {
    const disabled = !this.validateEmail(email);

    return (
      <div>
        <Textfield label="Email" type="email" autofocus onInput={linkState(this, 'email')} />
        <div class="buttons">
          <Button
            type="previous"
            ripple
            value={email}
            onClick={() => this.changeView('login-options')}
          >
            Back
          </Button>
          <Button
            type="next"
            ripple
            raised
            onClick={() => this.changeView('input-password')}
            disabled={disabled}
            value={email}
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
        <Textfield
          label="Password"
          type="password"
          autofocus
          value={password}
          onInput={linkState(this, 'password')}
        />
        <div class="buttons">
          <Button type="previous" ripple onClick={() => this.changeView('input-email')}>
            Back
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

  getPromptRegisterTemplate({ email }) {
    return (
      <div>
        <p>Account not found for {email}.</p>
        <p>Would you like to register a new account?</p>
        <div class="buttons">
          <Button type="previous" ripple onClick={() => this.changeView('input-email')}>
            Retry Password
          </Button>
          <Button type="next" raised ripple onClick={() => this.changeView('register-email')}>
            Register
          </Button>
        </div>
      </div>
    );
  }

  getRegisterEmailTemplate({ password, confirmation }) {
    const disabled = !this.validateConfirmation(password, confirmation);

    return (
      <div>
        <Textfield
          label="Password"
          type="password"
          autofocus
          value={password}
          onInput={linkState(this, 'password')}
        />
        <Textfield
          label="Confirm Password"
          type="password"
          autofocus
          value={confirmation}
          onInput={linkState(this, 'confirmation')}
        />
        <div class="buttons">
          <Button type="previous" ripple onClick={() => this.changeView('input-password')}>
            Back
          </Button>
          <Button
            type="next"
            ripple
            raised
            onClick={() => this.createUserWithEmailAndPassword()}
            disabled={disabled}
          >
            Register
          </Button>
        </div>
      </div>
    );
  }

  getEmailInUseTemplate({ email }) {
    return (
      <div>
        <p>The password for {email} does not match our records.</p>
        <div class="buttons">
          <Button type="previous" ripple onClick={() => this.changeView('input-email')}>
            Back
          </Button>
          <Button type="next" raised ripple autofocus onClick={() => this.sendPasswordResetEmail()}>
            Reset Password
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
  changeView(view) {
    const viewThatNeedClearing = ['input-email', 'login-options'];
    const updates = { view };
    if (!!~viewThatNeedClearing.indexOf(view)) {
      updates.password = null;
      updates.confirmation = null;
    }
    this.setState({ view });
  }

  fire(type, detail) {
    let e;
    try {
      e = new CustomEvent(type, { bubbles: true, detail });
      dispatchEvent(e);
    } catch (e) {
      e = document.createEvent('CustomEvent');
      e.initEvent(type, true, true, detail);
      document.dispatchEvent(e);
    }
  }

  handleError(error) {
    this.fire('firebaseAuthenticationError', { error });
  }

  clearInputs() {
    this.setState({ email: null, password: null, confirmation: null });
  }

  signOut() {
    this.getFirebase()
      .auth()
      .signOut()
      .catch(error => this.handleError(error));
  }

  currentUserDelete() {
    const { currentUser } = this.state;
    currentUser
      .delete()
      .then(() => this.fire('currentUserDeleted', { currentUser }))
      .catch(error => this.handleError(error));
  }

  validateEmail(email) {
    return validate(email);
  }

  validatePassword(password) {
    return password && password.length > 4;
  }

  validateConfirmation(password, confirmation) {
    return password == confirmation;
  }

  signInWithEmailAndPassword() {
    const { email, password } = this.state;
    this.getFirebase()
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        if (error.code == 'auth/user-not-found') {
          this.changeView('prompt-register');
        } else if (error.code == 'auth/wrong-password') {
          this.changeView('email-in-use');
        }
        this.handleError(error);
      });
  }

  is;

  createUserWithEmailAndPassword() {
    const { email, password } = this.state;
    this.getFirebase()
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        if (error.code == 'auth/email-already-in-use') {
          this.changeView('email-in-use');
        }
        this.handleError(error);
      });
  }

  sendPasswordResetEmail() {
    const { email } = this.state;
    this.getFirebase()
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        this.fire('passwordResetSent', { email });
        this.clearInputs();
        this.changeView('input-email');
      })
      .catch(error => this.handleError(error));
  }

  // Getters
  getFirebase() {
    return window.firebase;
  }

  getLoginMethodsMap() {
    const firebase = this.getFirebase();
    return {
      email: { text: 'Log In with Email', svg: emailSvg, view: 'input-email' },
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
