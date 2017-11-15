import { html, render } from 'lit-html';

export class LitElement extends HTMLElement {
  constructor() {
    super();

    if (this.attachShadow) {
      this.attachShadow({ mode: 'open' });
    }

    this.__attributesMap = new Map();
    this.__valuesMap = new Map();
    for (const prop in this.constructor.properties) {
      const { value } = this.constructor.properties[prop];
      const attr = this.constructor.snakeCase(prop);

      this.__attributesMap.set(attr, prop);
      this.setProp(prop, value);
    }

    this.__styleEl = document.createElement('style');
    this.__styleEl.innerHTML = this.styles;
  }

  static snakeCase(str) {
    return str.replace(/([A-Z])/g, function($1) {
      return '-' + $1.toLowerCase();
    });
  }

  static get properties() {
    return {};
  }

  get props() {
    const props = {};
    this.__valuesMap.forEach((value, key) => (props[key] = value));
    return props;
  }

  get styles() {
    return '';
  }

  get rootEl() {
    return this.shadowRoot || this;
  }

  // Lifecycle
  connectedCallback() {
    this.__attributesMap.forEach((prop, attr) => {
      this.setProp(prop, this.getAttribute(attr));
    });

    this.invalidate();
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    const prop = this.__attributesMap.get(attr);

    this.setProp(prop, newValue);
    this.invalidate();
  }

  setProp(prop, value) {
    const { type } = this.constructor.properties[prop];
    
    if (type.name == 'Boolean') {
      this.__valuesMap.set(prop, value == '');
    } else {
      this.__valuesMap.set(prop, type(value));
    }
  }

  invalidate() {
    if (!this.__needsRender) {
      this.__needsRender = true;
      Promise.resolve().then(() => {
        this.__needsRender = false;
        this.renderCallback();
      });
    }
  }

  renderCallback() {
    render(this.render(this.props), this.rootEl);
    console.log('rootEl', this.rootEl);
    
    this.rootEl.appendChild(this.__styleEl);
  }

  render() {
    return html``;
  }
}
