import { Component, Prop, State } from '@stencil/core';
import { getClassesFromMap } from '@quiver/mdc-modules';
import { MDCTextField as MDCTextFieldJS } from '@material/textfield';

@Component({
  tag: 'mdc-text-field',
  styleUrl: 'mdc-text-field.scss',
  shadow: true,
})
export class MDCTextField {
  // Props
  @Prop() label: string;
  @Prop() initialValue: string;
  @Prop() persistent: boolean;

  // Pass-through classes
  @Prop() disabled: boolean;

  // State
  @State() value: string;

  // Getters
  get el() {
    return this['__el'];
  }

  get classes() {
    return getClassesFromMap(this.classesMap);
  }

  get classesMap() {
    return new Map([['mdc-text-field', true], ['mdc-text-field--disabled', this.disabled]]);
  }

  // Lifecycle
  componentDidLoad() {
    const mdcTextField = this.el.shadowRoot.querySelector('.mdc-text-field');
    MDCTextFieldJS.attachTo(mdcTextField);
    if (this.initialValue) {
      const input = this.el.shadowRoot.querySelector('input');
      const label = this.el.shadowRoot.querySelector('label');
      input.value = this.initialValue;
      label.className += ' mdc-text-field__label--float-above';
    }
  }

  // Handlers
  handleOnKeyUp(e) {
    const value = e.target.value;
    this.value = value;
    this.el.dispatchEvent(new CustomEvent('value-changed', { bubbles: true, detail: { value } }));
  }

  // Render
  render() {
    const helperTextClasses = ['mdc-text-field-helper-text'];

    if (this.persistent) {
      helperTextClasses.push('mdc-text-field-helper-text--persistent');
    }

    return (
      <div id="mdcTextField" class={this.classes}>
        <input
          type="text"
          class="mdc-text-field__input"
          onKeyUp={(e: UIEvent) => this.handleOnKeyUp(e)}
        />
        <label htmlFor="input" class="mdc-text-field__label">
          {this.label}
        </label>
        <div class="mdc-text-field__bottom-line" />

        <div class={helperTextClasses.join(' ')} aria-hidden="true">
          <slot />
        </div>
      </div>
    );
  }
}
