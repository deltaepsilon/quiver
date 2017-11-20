import { Component, Prop, State } from '@stencil/core';
import { findParent } from '@quiver/mdc-modules';

@Component({
  tag: 'firebase-authentication',
  styleUrl: 'firebase-authentication.scss',
  shadow: true,
})
export class MDCButton {
  constructor() {
    if (!this.view) {
      this.view = 'loginOptions';
    }
  }
  // Auth Methods
  @Prop() email: boolean;
  @Prop() phone: boolean;
  @Prop() google: boolean;
  @Prop() facebook: boolean;
  @Prop() twitter: boolean;
  @Prop() github: boolean;

  // Options
  @Prop() redirect: boolean;
  @State() view: string;

  // Getters
  get el() {
    return this['__el'];
  }

  get firebase() {
    return window['firebase'];
  }

  get auth() {
    try {
      return this.firebase.auth();
    } catch (e) {
      console.log(`
        Must load firebase auth to use firebase-authentication. 
        https://firebase.google.com/docs/web/setup
      `);
    }
  }

  get clickMap() {
    return new Map([
      ['google', this.oAuthByType],
      ['facebook', this.oAuthByType],
      ['twitter', this.oAuthByType],
      ['github', this.oAuthByType],
      ['phone', this.signInWithPhone],
      ['email', this.signInWithEmail],
      ['emailNext', this.anyClick],
    ]);
  }

  get providersMap() {
    return new Map([
      ['google', () => new this.firebase.auth.GoogleAuthProvider()],
      ['facebook', () => new this.firebase.auth.FacebookAuthProvider()],
      ['twitter', () => new this.firebase.auth.TwitterAuthProvider()],
      ['github', () => new this.firebase.auth.GithubAuthProvider()],
    ]);
  }

  get loginOptionsTemplate() {
    return (
      <div id="firebase-authentication" onClick={(e: UIEvent) => this.handleClick(e)}>
        {!!this.email && (
          <mdc-button class="email" icon="email" raised>
            Sign in with email
          </mdc-button>
        )}
        {!!this.phone && (
          <mdc-button class="phone" icon="phone" raised>
            Sign in with phone
          </mdc-button>
        )}
        {!!this.google && (
          <mdc-button class="google" src="/assets/google-logo.svg" raised>
            Sign in with Google
          </mdc-button>
        )}
        {!!this.facebook && (
          <mdc-button class="facebook" src="/assets/facebook-logo.svg" raised>
            Facebook
          </mdc-button>
        )}
        {!!this.twitter && (
          <mdc-button class="twitter" src="/assets/twitter-logo.svg" raised>
            Twitter
          </mdc-button>
        )}
        {!!this.github && (
          <mdc-button class="github" src="/assets/github-logo.svg" raised>
            Github
          </mdc-button>
        )}
      </div>
    );
  }

  get inputEmailTemplate() {
    return (
      <div id="firebase-authentication" onClick={(e: UIEvent) => this.handleClick(e)}>
        <input type="text" placeholder="Email" />
        <mdc-button class="emailNext" raised>
          Next
        </mdc-button>
      </div>
    );
  }

  // Lifecycle
  componentDidLoad() {
    // Necessary for phone auth: https://firebase.google.com/docs/auth/web/phone-auth
    if (this.phone) {
      // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      //   'size': 'invisible',
      //   'callback': function (response) {
      //     // reCAPTCHA solved, allow signInWithPhoneNumber.
      //     onSignInSubmit();
      //   }
      // });
    }
  }

  // Functions
  anyClick(type) {
    this.logClick(type);
  }

  signInWithPhone() {
    this.view = 'inputPhone';
  }

  signInWithEmail() {
    this.view = 'inputEmail';
  }

  oAuthByType(type) {
    const provider = this.providersMap.get(type)();
    const signInMethod = this.redirect ? this.auth.signInWithRedirect : this.auth.signInWithPopup;

    return signInMethod(provider)
      .then(result => this.success(result))
      .catch(error => this.error(error));
  }

  // Events
  success(payload) {
    this.fire('firebase-authentication-signin', payload);
  }

  error(error) {
    this.fire('firebase-authentication-error', error);
  }

  fire(type, detail) {
    this.el['dispatchEvent'](new CustomEvent(type, { bubbles: true, detail }));
  }

  logClick(type) {
    console.log('click type', type);
  }

  handleClick(e: UIEvent) {
    const getButtonEl = findParent(el => el.tagName == 'MDC-BUTTON');
    const button = getButtonEl(e.target);
    if (button) {
      const type = [...button.classList].find(x => x != 'hydrated');
      const func = this.clickMap.get(type);
      func.call(this, type);
    }
  }

  // Render
  render() {
    let template;
    switch (this.view) {
      case 'loginOptions':
        template = this.loginOptionsTemplate;
        break;

      case 'inputEmail':
        template = this.inputEmailTemplate;
        break;
    }
    return template;
  }
}
