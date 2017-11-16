/*! Built with http://stenciljs.com */

window['firebase-authentication'].loadStyles("firebase-authentication","#firebase-authentication[data-firebase-authentication] {\n  display: flex;\n  flex-direction: column;\n}\n\nmdc-button[data-firebase-authentication] {\n  min-width: 10rem;\n  margin: .5rem 0;\n}\nfirebase-authentication.hydrated{visibility:inherit}");
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
            !!this.email && (h("mdc-button", { class: "email", raised: true }, "Email/Password")),
            !!this.phone && (h("mdc-button", { class: "phone", raised: true }, "Phone")),
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