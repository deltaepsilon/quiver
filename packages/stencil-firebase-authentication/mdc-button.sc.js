/*! Built with http://stenciljs.com */

window['firebase-authentication'].loadStyles("mdc-button","\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface--test-edge-var-bug[data-mdc-button] {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n\n.mdc-ripple-surface--test-edge-var-bug[data-mdc-button]::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n\n\n\n\n\n\n\n\n.mdc-button[data-mdc-button] {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 2.25rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  min-width: 64px;\n  height: 36px;\n  padding: 0 16px;\n  border: none;\n  outline: none;\n  text-align: center;\n  user-select: none;\n  -webkit-appearance: none;\n  overflow: hidden;\n  vertical-align: middle;\n  border-radius: 2px;\n}\n\n.mdc-button[data-mdc-button]::before, .mdc-button[data-mdc-button]::after {\n  position: absolute;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button[data-mdc-button]::before, .mdc-button[data-mdc-button]::after {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-button.mdc-ripple-upgraded[data-mdc-button]::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button.mdc-ripple-upgraded--unbounded[data-mdc-button]::before {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button.mdc-ripple-upgraded[data-mdc-button]::after {\n  top: 0;\n  left: 0;\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-button.mdc-ripple-upgraded--unbounded[data-mdc-button]::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-button[data-mdc-button]:active {\n  outline: none;\n}\n\n.mdc-button[data-mdc-button]:hover {\n  cursor: pointer;\n}\n\n.mdc-button[data-mdc-button]::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\n.mdc-button[data-mdc-button]:disabled {\n  background-color: transparent;\n  \n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-button--theme-dark[data-mdc-button]   .mdc-button[data-mdc-button]:disabled, .mdc-theme--dark[data-mdc-button]   .mdc-button[data-mdc-button]:disabled {\n  \n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-button[data-mdc-button]:not(:disabled) {\n  background-color: transparent;\n}\n\n.mdc-button[data-mdc-button]:not(:disabled) {\n  \n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-button[data-mdc-button]::before, .mdc-button[data-mdc-button]::after {\n  background-color: rgba(63, 81, 181, 0.16);\n  opacity: 0;\n}\n\n\@supports (background-color: color(green a(10%))) {\n  .mdc-button[data-mdc-button]::before, .mdc-button[data-mdc-button]::after {\n    background-color: color(var(--mdc-theme-primary, #3f51b5) a(16%));\n  }\n}\n\n.mdc-button[data-mdc-button]:not(.mdc-ripple-upgraded):hover::before, .mdc-button[data-mdc-button]:not(.mdc-ripple-upgraded):focus::before, .mdc-button[data-mdc-button]:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-button.mdc-ripple-upgraded--background-focused[data-mdc-button]::before {\n  opacity: .99999;\n}\n\n.mdc-button.mdc-ripple-upgraded--background-active-fill[data-mdc-button]::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-button.mdc-ripple-upgraded[data-mdc-button]::after {\n  opacity: 0;\n}\n\n.mdc-button.mdc-ripple-upgraded--foreground-activation[data-mdc-button]::after {\n  animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-button.mdc-ripple-upgraded--foreground-deactivation[data-mdc-button]::after {\n  animation: 83ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-button--raised[data-mdc-button]:disabled, .mdc-button--unelevated[data-mdc-button]:disabled {\n  background-color: rgba(0, 0, 0, 0.12);\n  \n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-button--theme-dark[data-mdc-button]   .mdc-button--raised[data-mdc-button]:disabled, .mdc-theme--dark[data-mdc-button]   .mdc-button--raised[data-mdc-button]:disabled, .mdc-button--theme-dark\n.mdc-button--unelevated[data-mdc-button]:disabled, .mdc-theme--dark\n.mdc-button--unelevated[data-mdc-button]:disabled {\n  background-color: rgba(255, 255, 255, 0.12);\n  \n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-button--raised[data-mdc-button]:not(:disabled), .mdc-button--unelevated[data-mdc-button]:not(:disabled) {\n  \n  background-color: #3f51b5;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-button--raised[data-mdc-button]:not(:disabled), .mdc-button--unelevated[data-mdc-button]:not(:disabled) {\n    background-color: var(--mdc-theme-primary, #3f51b5);\n  }\n}\n\n.mdc-button--raised[data-mdc-button]:not(:disabled), .mdc-button--unelevated[data-mdc-button]:not(:disabled) {\n  \n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white);\n}\n\n.mdc-button--raised[data-mdc-button]::before, .mdc-button--raised[data-mdc-button]::after, .mdc-button--unelevated[data-mdc-button]::before, .mdc-button--unelevated[data-mdc-button]::after {\n  background-color: rgba(255, 255, 255, 0.32);\n  opacity: 0;\n}\n\n\@supports (background-color: color(green a(10%))) {\n  .mdc-button--raised[data-mdc-button]::before, .mdc-button--raised[data-mdc-button]::after, .mdc-button--unelevated[data-mdc-button]::before, .mdc-button--unelevated[data-mdc-button]::after {\n    background-color: color(var(--mdc-theme-text-primary-on-primary, white) a(32%));\n  }\n}\n\n.mdc-button--raised[data-mdc-button]:not(.mdc-ripple-upgraded):hover::before, .mdc-button--raised[data-mdc-button]:not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised[data-mdc-button]:not(.mdc-ripple-upgraded):active::after, .mdc-button--unelevated[data-mdc-button]:not(.mdc-ripple-upgraded):hover::before, .mdc-button--unelevated[data-mdc-button]:not(.mdc-ripple-upgraded):focus::before, .mdc-button--unelevated[data-mdc-button]:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-button--raised.mdc-ripple-upgraded--background-focused[data-mdc-button]::before, .mdc-button--unelevated.mdc-ripple-upgraded--background-focused[data-mdc-button]::before {\n  opacity: .99999;\n}\n\n.mdc-button--raised.mdc-ripple-upgraded--background-active-fill[data-mdc-button]::before, .mdc-button--unelevated.mdc-ripple-upgraded--background-active-fill[data-mdc-button]::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-button--raised.mdc-ripple-upgraded[data-mdc-button]::after, .mdc-button--unelevated.mdc-ripple-upgraded[data-mdc-button]::after {\n  opacity: 0;\n}\n\n.mdc-button--raised.mdc-ripple-upgraded--foreground-activation[data-mdc-button]::after, .mdc-button--unelevated.mdc-ripple-upgraded--foreground-activation[data-mdc-button]::after {\n  animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-button--raised.mdc-ripple-upgraded--foreground-deactivation[data-mdc-button]::after, .mdc-button--unelevated.mdc-ripple-upgraded--foreground-deactivation[data-mdc-button]::after {\n  animation: 83ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-button--raised[data-mdc-button] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow;\n}\n\n.mdc-button--raised[data-mdc-button]:hover, .mdc-button--raised[data-mdc-button]:focus {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-button--raised[data-mdc-button]:active {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-button--raised[data-mdc-button]:disabled {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-button--stroked[data-mdc-button] {\n  border-style: solid;\n  padding-right: 14px;\n  padding-left: 14px;\n  border-width: 2px;\n  line-height: 32px;\n}\n\n.mdc-button--stroked[data-mdc-button]:disabled {\n  \n  border-color: rgba(0, 0, 0, 0.38);\n  border-color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-button--theme-dark[data-mdc-button]   .mdc-button--stroked[data-mdc-button]:disabled, .mdc-theme--dark[data-mdc-button]   .mdc-button--stroked[data-mdc-button]:disabled {\n  \n  border-color: rgba(255, 255, 255, 0.5);\n  border-color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-button--stroked.mdc-button--dense[data-mdc-button] {\n  line-height: 27px;\n}\n\n.mdc-button--stroked.mdc-button--compact[data-mdc-button] {\n  padding-right: 6px;\n  padding-left: 6px;\n}\n\n.mdc-button--stroked[data-mdc-button]:not(:disabled) {\n  \n  border-color: #3f51b5;\n  border-color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-button--compact[data-mdc-button] {\n  padding: 0 8px;\n}\n\n.mdc-button--dense[data-mdc-button] {\n  height: 32px;\n  font-size: .8125rem;\n  line-height: 32px;\n}\n\n.mdc-button__icon[data-mdc-button] {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin-right: 8px;\n  font-size: 18px;\n  line-height: inherit;\n  vertical-align: top;\n}\n\nmdc-button[data-mdc-button]   .icon[data-mdc-button]    > i[data-mdc-button] {\n  margin-top: 6px;\n}\n\nmdc-button[data-mdc-button]   button[data-mdc-button] {\n  width: 100%;\n}\n\nmdc-button[data-mdc-button]   button[data-mdc-button]   .mdc-button-inner-wrapper[data-mdc-button] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmdc-button[data-mdc-button]   button[data-mdc-button]   .mdc-button__icon[data-mdc-button] {\n  margin-top: -7px;\n}\nmdc-button.hydrated{visibility:inherit}");
window['firebase-authentication'].loadComponents(

/**** module id (dev mode) ****/
"mdc-button",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

function getClassesFromMap(map) {
  const classes = [];
  map.forEach((value, className) => {
    if (value) {
      classes.push(className);
    }
  });
  return classes.join(' ');
}

class MDCButton {
    get button() {
        return this['__el'].querySelector('button');
    }
    get classes() {
        return getClassesFromMap(this.classesMap);
    }
    get classesMap() {
        return new Map([
            ['mdc-button', true],
            ['mdc-button--raised', this.raised],
            ['mdc-button--unelevated', this.unelevated],
            ['mdc-button--stroked', this.stroked],
            ['mdc-button--dense', this.dense],
            ['mdc-button--compact', this.compact],
        ]);
    }
    componentDidLoad() {
        
    }
    render() {
        return (h("button", { class: this.classes, disabled: this.disabled, "data-mdc-auto-init": this.ripple ? 'MDCRipple' : null },
            h("div", { class: "mdc-button-inner-wrapper" },
                !!this.icon ? (h("i", { class: "mdc-button-icon material-icons mdc-button__icon" }, this.icon)) : (h("i", { class: "mdc-button-icon" })),
                !!this.src ? (h("img", { class: "mdc-button-img", src: this.src })) : (h("img", { class: "mdc-button-img" })),
                h("span", { class: "mdc-button-slot" },
                    h("slot", null)))));
    }
}

exports['mdc-button'] = MDCButton;
},


/***************** mdc-button *****************/
[
/** mdc-button: tag **/
"mdc-button",

/** mdc-button: members **/
[
  [ "compact", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "dense", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "icon", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "raised", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "ripple", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "src", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "stroked", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "unelevated", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
]

]
);