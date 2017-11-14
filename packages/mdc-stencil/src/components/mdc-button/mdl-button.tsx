import { Component, Prop } from '@stencil/core';
import { MDCClassesMixin } from '../../mixins/index';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'mdc-button',
  styleUrl: 'mdc-button.scss',
})
export class MDCButton extends MDCClassesMixin() {
  // Classes
  @Prop() icon: boolean;
  @Prop() raised: boolean;
  @Prop() unelevated: boolean;
  @Prop() stroked: boolean;
  @Prop() dense: boolean;
  @Prop() compact: boolean;

  // Functionality
  @Prop() disabled: boolean;
  @Prop() ripple: boolean;

  get button() {
    return this['__el'].querySelector('button');
  }

  get classesMap(): Map<String, Boolean> {
    return new Map([
      ['mdc-button', true],
      ['icon', this.icon],
      ['mdc-button--raised', this.raised],
      ['mdc-button--unelevated', this.unelevated],
      ['mdc-button--stroked', this.stroked],
      ['mdc-button--dense', this.dense],
      ['mdc-button--compact', this.compact],
    ]);
  }

  componentDidLoad() {
    if (this.ripple) {
      MDCRipple.attachTo(this.button);
    }
  }

  render() {
    return (
      <button
        class={this.classes}
        disabled={this.disabled}
        data-mdc-auto-init={this.ripple ? 'MDCRipple' : null}
      >
        <slot />
      </button>
    );
  }
}
