/*! Built with http://stenciljs.com */

window['firebase-authentication'].loadStyles("firebase-authentication",".material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n\n#firebase-authentication {\n  display: flex;\n  flex-direction: column;\n}\n\n#firebase-authentication mdc-button {\n  min-width: 4rem;\n  max-width: 15rem;\n  margin: 0.5rem 0;\n}\n\n#firebase-authentication mdc-button button {\n  font-size: calc(.7rem + 0.2vmax);\n}\n\n#firebase-authentication mdc-button .mdc-button-icon {\n  margin-right: 0px;\n  display: block;\n  min-width: 1rem;\n}\n\n#firebase-authentication mdc-button .mdc-button-img[src] {\n  max-height: 20px;\n  margin-left: -14px;\n  margin-right: -5px;\n}\n\n#firebase-authentication mdc-button .mdc-button-inner-wrapper {\n  justify-content: start !important;\n}\n\n#firebase-authentication mdc-button .mdc-button-slot {\n  display: block;\n  margin-left: 1rem;\n  white-space: nowrap;\n}\n\n#firebase-authentication mdc-button.email button {\n  background: #cd0e22;\n  color: white;\n}\n\n#firebase-authentication mdc-button.phone button {\n  background: #4f8fde;\n  color: white;\n}\n\n#firebase-authentication mdc-button.google button {\n  background: white;\n  color: black;\n}\n\n#firebase-authentication mdc-button.facebook button {\n  background: #3B5998;\n  color: white;\n}\n\n#firebase-authentication mdc-button.twitter button {\n  background: #00aced;\n  color: white;\n}\n\n#firebase-authentication mdc-button.github button {\n  background: black;\n}\n:host(.hydrated){visibility:inherit !important}");
window['firebase-authentication'].loadComponents(

/**** module id (dev mode) ****/
"firebase-authentication",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

function findParent(func, el) {
  function find(el) {
    return func(el) ? el : el.parentElement && find(el.parentElement);
  }

  return !el ? find : find(el);
}

class FirebaseAuthentication {
    constructor() {
        if (!this.view) {
            this.view = 'loginOptions';
        }
    }
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
        }
        catch (e) {
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
        return (h("div", { id: "firebase-authentication", onClick: (e) => this.handleClick(e) },
            !!this.email && (h("mdc-button", { class: "email", icon: "email", raised: true }, "Sign in with email")),
            !!this.phone && (h("mdc-button", { class: "phone", icon: "phone", raised: true }, "Sign in with phone")),
            !!this.google && (h("mdc-button", { class: "google", src: "/assets/google-logo.svg", raised: true }, "Sign in with Google")),
            !!this.facebook && (h("mdc-button", { class: "facebook", src: "/assets/facebook-logo.svg", raised: true }, "Facebook")),
            !!this.twitter && (h("mdc-button", { class: "twitter", src: "/assets/twitter-logo.svg", raised: true }, "Twitter")),
            !!this.github && (h("mdc-button", { class: "github", src: "/assets/github-logo.svg", raised: true }, "Github"))));
    }
    get inputEmailTemplate() {
        return (h("div", { id: "firebase-authentication", onClick: (e) => this.handleClick(e) },
            h("mdc-text-field", { label: "Email" }),
            h("mdc-button", { class: "emailNext", icon: "forward", raised: true }, "Next")));
    }
    // Lifecycle
    componentDidLoad() {
        // Necessary for phone auth: https://firebase.google.com/docs/auth/web/phone-auth
        
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
    handleClick(e) {
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

exports['firebase-authentication'] = FirebaseAuthentication;
},


/***************** firebase-authentication *****************/
[
/** firebase-authentication: tag **/
"firebase-authentication",

/** firebase-authentication: members **/
[
  [ "email", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "facebook", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "github", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "google", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "phone", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "redirect", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "twitter", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "view", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** firebase-authentication: host **/
{}

]
);