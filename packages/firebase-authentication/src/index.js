import './style.scss';
import { h, Component } from 'preact';
import linkState from 'linkstate';
import { validate } from 'email-validator';

// Material
import Button from 'preact-material-components/Button';
import Icon from 'preact-material-components/Icon';
import Textfield from 'preact-material-components/Textfield';
import Select from 'preact-material-components/Select';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';
import 'preact-material-components/Textfield/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Menu/style.css';
import 'preact-material-components/Select/style.css';

// SVGs
import emailSvg from '../assets/icons/email.svg';
import phoneSvg from '../assets/icons/call.svg';
import facebookSvg from '../assets/logos/facebook-logo.svg';
import githubSvg from '../assets/logos/github-logo.svg';
import googleSvg from '../assets/logos/google-logo.svg';
import twitterSvg from '../assets/logos/twitter-logo.svg';

// Constants
import countryCodes from 'simple-country-dial-codes/country-calling-codes.json';

const recaptchaId = 'recaptcha-verifier';
const NUMBER_BLOCK = /\d+/g;
const ANY_DIGIT = /\d/;

// Services
import AuthService from './auth.service';

export default class FirebaseAuthentication extends Component {
  // Getters
  get loginMethodsMap() {
    return {
      email: { text: 'Log In with Email', svg: emailSvg, view: 'input-email' },
      phone: { text: 'Log in by Phone', svg: phoneSvg, view: 'input-phone' },
      facebook: {
        text: 'Log in with Facebook',
        svg: facebookSvg
      },
      github: {
        text: 'Log in with GitHub',
        svg: githubSvg
      },
      google: {
        text: 'Log in with Google',
        svg: googleSvg,
      },
      twitter: {
        text: 'Log in with Twitter',
        svg: twitterSvg,
      },
    };
  }

  get templatesMap() {
    return {
      'logged-in': (props, state) => this.getLoggedInTemplate(state),
      'login-options': (props, state) => this.getLoginOptionsTemplate(props),
      'input-email': (props, state) => this.getInputEmailTemplate(state),
      'input-password': (props, state) => this.getInputPasswordTemplate(state),
      'prompt-register': (props, state) => this.getPromptRegisterTemplate(state),
      'register-email': (props, state) => this.getRegisterEmailTemplate(state),
      'bad-password': (props, state) => this.getBadPasswordTemplate(state),
      'duplicate-account': (props, state) => this.getDuplicateAccountTemplate(state),
      'input-phone': (props, state) => this.getInputPhoneTemplate(state),
      'confirm-phone': (props, state) => this.getConfirmPhoneTemplate(state),
    };
  }

  // Lifecycle
  componentWillMount() {
    this.authService = new AuthService({
      fire: this.fire.bind(this),
      handleError: this.handleError.bind(this),
      changeView: this.changeView.bind(this),
      clearInputs: this.clearInputs.bind(this),
    });

    this.authService.onAuthStateChanged(currentUser => {
      const view = !!currentUser ? 'logged-in' : 'login-options';
      this.setState({ view, currentUser });
      this.clearInputs();
      this.fire('currentUserChanged', { currentUser });
    });

    const callingCodeIndex = countryCodes.findIndex(x => x.code == 'US');
    const { callingCode } = countryCodes[callingCodeIndex];
    this.setState({ callingCode, callingCodeIndex });
  }

  componentDidUpdate() {
    const { view, autofocusView } = this.state;
    if (view != autofocusView) {
      this.setState({ autofocusView: view });
      setTimeout(() => {
        const autofocus = this.base.querySelector('[autofocus]');
        if (autofocus) {
          autofocus.focus();
          if (typeof autofocus.select == 'function') {
            autofocus.select();
          }
        }
      });
    }

    const recaptchaVerifier = this.base.querySelector(`#${recaptchaId}`);
    if (recaptchaVerifier) {
      if (!recaptchaVerifier.getAttribute('recaptcha-initialized')) {
        recaptchaVerifier.setAttribute('recaptcha-initialized', true);
        this.recaptchaVerifier = this.authService.getRecaptchaVerifier(recaptchaId);
      }
    }
  }

  // Render
  render(props, state) {
    let template;
    if (this.state.view) {
      template = this.templatesMap[this.state.view](props, state);
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
          onClick={() => this.selectLoginOption(method.type)}
        >
          <img src={method.svg} />
          <span>{method.text}</span>
        </Button>
      );
    });
  }

  getLoginMethods(props) {
    return this.getPropsKeys(props).map(type =>
      Object.assign({ type }, this.loginMethodsMap[type])
    );
  }

  getPropsKeys(props) {
    // Jest returns props like { google: true, facebook: true, twitter: true, github: true, children: [] }
    // Chrome returns props like {0: "email", 1: "phone", 2: "google", 3: "facebook", 4: "twitter", 5: "github", children: []}
    // The .map makes sure to return a string, not a bool or a number-like string, which standardizes the Jest and Chrome props styles
    // This works because isNaN(true) -> false; isNaN("0") -> false; isNaN("blerg") -> true
    // The .filter would use Array.prototype.includes, but ie11 prefers the ~ hack with .indexOf
    return Object.keys(props)
      .map(x => (isNaN(x) ? x : props[x]))
      .filter(x => ~Object.keys(this.loginMethodsMap).indexOf(x));
  }

  getLoggedInTemplate({ currentUser }) {
    return [
      <img class="profile-img" src={currentUser.photoURL} />,
      <p>{currentUser.email}</p>,
      <Button className="center" ripple raised onClick={() => this.authService.signOut()}>
        Sign Out
      </Button>,
      <Button
        ripple
        raised
        onClick={() => this.authService.currentUserDelete(this.state)}
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
        <Textfield
          label="Email"
          type="email"
          autofocus
          onInput={linkState(this, 'email')}
          value={email}
        />
        <div class="buttons">
          <Button type="previous" ripple onClick={() => this.changeView('login-options')}>
            Back
          </Button>
          <Button
            type="next"
            ripple
            raised
            onClick={() => this.changeView('input-password')}
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
            onClick={() => this.authService.signInWithEmailAndPassword(this.state)}
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
            Back
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
            onClick={() => this.authService.createUserWithEmailAndPassword(this.state)}
            disabled={disabled}
          >
            Register
          </Button>
        </div>
      </div>
    );
  }

  getBadPasswordTemplate({ email }) {
    return (
      <div>
        <p>The password for {email} does not match our records.</p>
        <p>
          If an account exists under a different authentication provider, you may be able to
          register a new email/password account.
        </p>
        <div class="buttons">
          <Button type="previous" ripple onClick={() => this.changeView('input-email')}>
            Back
          </Button>
          <Button ripple onClick={() => this.changeView('register-email')}>
            Register
          </Button>
          <Button
            type="next"
            raised
            ripple
            autofocus
            onClick={() => this.authService.sendPasswordResetEmail(this.state)}
          >
            Reset
          </Button>
        </div>
      </div>
    );
  }

  getDuplicateAccountTemplate({ email }) {
    return (
      <div>
        <p>An account already exists for {email}.</p>
        <p>
          Multiple accounts for a single email have been disabled. Try logging in with a different
          authentication provider.
        </p>
        <div class="buttons">
          <Button
            type="previous"
            raised
            ripple
            autofocus
            onClick={() => this.changeView('login-options')}
          >
            Back
          </Button>
        </div>
      </div>
    );
  }

  getInputPhoneTemplate({ callingCode, callingCodeIndex, phone }) {
    const payload = {
      callingCode,
      phone,
      recaptchaVerifier: this.recaptchaVerifier,
      setConfirm: this.setConfirm.bind(this),
    };
    const disabled = !this.validatePhone(phone);
    const selectItems = countryCodes.map(({ name, callingCode }) => {
      return (
        <option value={callingCode}>
          {callingCode} {name}
        </option>
      );
    });

    return (
      <div>
        <div class="phone-number">
          <div>
            <span>+</span>
            <Select
              hintText="Country Code"
              basic
              onChange={e => this.handleCountryCodeChange(e.target.selectedIndex)}
              selectedIndex={callingCodeIndex}
            >
              {selectItems}
            </Select>
          </div>
          <Textfield
            label="Phone"
            type="number"
            autofocus
            onInput={linkState(this, 'phone')}
            value={phone}
          />
        </div>
        <div class="buttons">
          <Button type="previous" ripple onClick={() => this.changeView('login-options')}>
            Back
          </Button>
          <Button
            id={recaptchaId}
            type="next"
            ripple
            raised
            onClick={() => this.authService.signInWithPhoneNumber(payload)}
            disabled={disabled}
          >
            Send SMS
          </Button>
        </div>
      </div>
    );
  }

  getConfirmPhoneTemplate({ code }) {
    const disabled = !this.validatePhone(code);

    return (
      <div>
        <Textfield
          label="SMS Code"
          type="number"
          autofocus
          onInput={linkState(this, 'code')}
          value={code}
        />
        <div class="buttons">
          <Button type="previous" ripple onClick={() => this.changeView('input-phone')}>
            Back
          </Button>
          <Button type="next" ripple raised onClick={() => this.confirm(code)} disabled={disabled}>
            Confirm
          </Button>
        </div>
      </div>
    );
  }

  // Functions
  selectLoginOption(type) {
    const { view } = this.loginMethodsMap[type];

    if (view) {
      this.changeView(view);
    } else {
      this.authService.signInWithPopup(type);
    }
  }

  changeView(view) {
    const updates = { view };
    if (!!~['input-email', 'login-options'].indexOf(view)) {
      updates.password = null;
      updates.confirmation = null;
    }
    this.setState({ view });
    this.fire('firebaseAuthenticationViewChanged', { view });
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
    this.fire('firebaseAuthenticationError', { error });
  }

  clearInputs() {
    this.setState({ email: null, password: null, confirmation: null });
  }

  setConfirm(confirm) {
    this.confirm = confirm;
  }

  handleCountryCodeChange(callingCodeIndex) {
    const { callingCode } = countryCodes[callingCodeIndex];
    this.setState({ callingCode, callingCodeIndex });
  }

  // Validation
  validateEmail(email) {
    return validate(email);
  }

  validatePhone(number) {
    return !!number && number.length >= 5;
  }

  validatePassword(password) {
    return password && password.length > 4;
  }

  validateConfirmation(password, confirmation) {
    return password == confirmation;
  }
}
