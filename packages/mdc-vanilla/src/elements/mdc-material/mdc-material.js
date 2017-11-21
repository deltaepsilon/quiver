import { LitElement } from '../../lib/lit-element';
import { html } from 'lit-html';
// import { MDCClassesMixin } from '../../mixins/mdc-classes.mixin';
import style from './mdc-material.scss';

class MDCMaterial extends MDCClassesMixin(LitElement) {
  constructor() {
    super();
    const styleEl = document.createElement('style');
    styleEl.innerHTML = 'div {background: blue;}';
    // this.append(styleEl)
  }
  // Getters
  static get properties() {
    return {
      elevation: {
        type: Number,
        value: 0,
      },
      padding: {
        type: Boolean,
        value: false,
      },
      transition: {
        type: Boolean,
        value: false,
      },
    };
  }

  get classesMap() {
    const { padding, transition } = this.props;
    console.log('props', this.props);
    return new Map([['padding', padding], ['mdc-elevation-transition', transition]]);
  }

  get styles() {

    return style.toString();
  }

  // Templating
  render({ elevation }) {
    return html`
    <div class="${this.classes} mdc-elevation--z${elevation}">
      <slot></slot>
    </div>
  `;
  }
}

window.customElements.define('mdc-material', MDCMaterial);
