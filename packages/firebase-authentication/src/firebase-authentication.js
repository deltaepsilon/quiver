import './style.scss';
import { h, Component } from 'preact';
import linkState from 'linkstate';

// Material
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';
import 'preact-material-components/TextField/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Menu/style.css';
import 'preact-material-components/Select/style.css';

// Constants
import countryCodes from 'simple-country-dial-codes/country-calling-codes.json';

const sortedCountryCodes = countryCodes.sort((a, b) => {
  return parseInt(a.callingCode) > parseInt(b.callingCode) ? 1 : -1;
});

const recaptchaId = 'recaptcha-verifier';

// Services
import { AuthService } from './services';

// Templates
import * as templates from './templates';

export default class FirebaseAuthentication extends Component {
  // Getters
  get templatesMap() {
    return {
      'logged-in': (props, state) => this.loggedInTemplate(state),
      'login-options': (props, state) => this.loginOptionsTemplate(props),
      'input-email': (props, state) => this.inputEmailTemplate(state),
      'input-password': (props, state) => this.inputPasswordTemplate(state),
      'prompt-register': (props, state) => this.promptRegisterTemplate(state),
      'register-email': (props, state) => this.registerEmailTemplate(state),
      'bad-password': (props, state) => this.badPasswordTemplate(state),
      'duplicate-account': (props, state) => this.duplicateAccountTemplate(state),
      'input-phone': (props, state) => {
        return this.inputPhoneTemplate({
          ...state,
          recaptchaVerifier: this.recaptchaVerifier,
          recaptchaId,
          sortedCountryCodes,
        });
      },
      'confirm-phone': (props, state) => {
        const confirm = this.confirm.bind(this);
        return this.confirmPhoneTemplate({ ...state, confirm });
      },
    };
  }

  // Lifecycle
  componentWillMount() {
    this.initAuthService();
    this.initTemplates();
    this.setCallingCodeIndex();
  }

  initAuthService() {
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
  }

  initTemplates() {
    const authService = this.authService;
    const firebaseAuthentication = this;
    const changeView = this.changeView.bind(this);
    const setConfirm = this.setConfirm.bind(this);
    const setCallingCodeIndex = this.setCallingCodeIndex.bind(this);

    for (let funcName in templates) {
      if (funcName != '__esModule') {
        const func = templates[funcName];
        const instanceName = funcName[0].toLowerCase() + funcName.slice(1);
        this[instanceName] = func({
          firebaseAuthentication,
          authService,
          changeView,
          setConfirm,
          setCallingCodeIndex,
        });
      }
    }
  }

  componentDidUpdate() {
    this.applyAutoFocus(this.state);
    this.setRecaptchaVerifier(this.state);
  }

  applyAutoFocus({ view, autofocusView }) {
    if (view != autofocusView) {
      this.setState({ autofocusView: view });
      setTimeout(() => {
        const autofocus = this.base && this.base.querySelector('[autofocus]');
        if (autofocus) {
          autofocus.focus();
          if (typeof autofocus.select == 'function') {
            autofocus.select();
          }
        }
      });
    }
  }

  setRecaptchaVerifier({ view }) {
    if (view == 'input-phone') {
      const recaptchaVerifier = this.base.querySelector(`#${recaptchaId}`);
      if (!recaptchaVerifier.getAttribute('recaptcha-initialized')) {
        recaptchaVerifier.setAttribute('recaptcha-initialized', true);
        this.recaptchaVerifier = this.authService.getRecaptchaVerifier(recaptchaId);
      }
    }
  }

  // Render
  render(props, state) {
    const templateFunc = this.templatesMap[this.state.view];

    return (
      <div class="firebase-authentication" view={this.state.view}>
        {templateFunc && templateFunc(props, state)}
      </div>
    );
  }

  // Functions
  changeView(view) {
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
    this.setState({ email: null, password: null, confirmation: null, phone: null, code: null });
  }

  setConfirm(confirm) {
    this.confirm = confirm;
  }

  setCallingCodeIndex(callingCodeIndex) {
    if (typeof callingCodeIndex == 'undefined') {
      callingCodeIndex = sortedCountryCodes.findIndex(x => x.code == 'US');
    }

    const { callingCode } = sortedCountryCodes[callingCodeIndex];
    this.setState({ callingCode, callingCodeIndex });
  }
}
