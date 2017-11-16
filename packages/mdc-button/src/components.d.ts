/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  MDCButton as MdcButton
} from './components/mdc-button/mdc-button';

declare global {
  interface HTMLMdcButtonElement extends MdcButton, HTMLElement {
  }
  var HTMLMdcButtonElement: {
    prototype: HTMLMdcButtonElement;
    new (): HTMLMdcButtonElement;
  };
  interface HTMLElementTagNameMap {
    "mdc-button": HTMLMdcButtonElement;
  }
  interface ElementTagNameMap {
    "mdc-button": HTMLMdcButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "mdc-button": JSXElements.MdcButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface MdcButtonAttributes extends HTMLAttributes {
      
        icon?: boolean,
        raised?: boolean,
        unelevated?: boolean,
        stroked?: boolean,
        dense?: boolean,
        compact?: boolean,
        disabled?: boolean,
        ripple?: boolean
    }
  }
}
