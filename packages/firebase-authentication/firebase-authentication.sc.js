/*! Built with http://stenciljs.com */

window['firebase-authentication'].loadStyles("firebase-authentication",".material-icons[data-firebase-authentication] {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n\n#firebase-authentication[data-firebase-authentication] {\n  display: flex;\n  flex-direction: column;\n}\n\n#firebase-authentication[data-firebase-authentication]   mdc-button[data-firebase-authentication] {\n  min-width: 4rem;\n  max-width: 15rem;\n  margin: 0.5rem 0;\n}\n\n#firebase-authentication[data-firebase-authentication]   mdc-button[data-firebase-authentication]   button[data-firebase-authentication] {\n  font-size: calc(1rem - 0.2vmax);\n}\n\n#firebase-authentication[data-firebase-authentication]   mdc-button[data-firebase-authentication]   .mdc-button-icon[data-firebase-authentication] {\n  margin-right: 0px;\n  display: block;\n  min-width: 1rem;\n}\n\n#firebase-authentication[data-firebase-authentication]   mdc-button[data-firebase-authentication]   .mdc-button-inner-wrapper[data-firebase-authentication] {\n  justify-content: start !important;\n}\n\n#firebase-authentication[data-firebase-authentication]   mdc-button[data-firebase-authentication]   .mdc-button-slot[data-firebase-authentication] {\n  display: block;\n  margin-left: 1rem;\n}\nfirebase-authentication.hydrated{visibility:inherit}");
window['firebase-authentication'].loadComponents(

/**** module id (dev mode) ****/
"firebase-authentication",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class MDCButton {
    render() {
        return (h("div", { id: "firebase-authentication" },
            !!this.email && (h("mdc-button", { icon: "send", raised: true }, "Email/Password")),
            !!this.phone && (h("mdc-button", { icon: "phone", raised: true }, "Phone")),
            !!this.google && (h("mdc-button", { class: "google", raised: true }, "Google")),
            !!this.facebook && (h("mdc-button", { class: "facebook", raised: true }, "Facebook")),
            !!this.twitter && (h("mdc-button", { class: "twitter", raised: true }, "Twitter")),
            !!this.github && (h("mdc-button", { class: "github", raised: true }, "Github"))));
    }
}

exports['firebase-authentication'] = MDCButton;
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
  [ "twitter", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** firebase-authentication: host **/
{}

]
);