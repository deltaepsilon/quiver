import { Component, Prop } from '@stencil/core';
import { getClassesFromMap } from '@quiver/mdc-modules';
// import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'mdc-button',
  styleUrl: 'mdc-button.scss',
  shadow: false,
})
export class MDCButton {
  // Classes
  @Prop() raised: boolean;
  @Prop() unelevated: boolean;
  @Prop() stroked: boolean;
  @Prop() dense: boolean;
  @Prop() compact: boolean;

  // Functionality
  @Prop() disabled: boolean;
  @Prop() ripple: boolean;
  @Prop() icon: string;
  @Prop() src: string;

  get button() {
    return this['__el'].querySelector('button');
  }

  get classes() {
    return getClassesFromMap(this.classesMap);
  }

  get classesMap(): Map<String, Boolean> {
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
    if (this.ripple) {
      // MDCRipple.attachTo(this.button);
    }
  }

  render() {
    return (
      <button
        class={this.classes}
        disabled={this.disabled}
        data-mdc-auto-init={this.ripple ? 'MDCRipple' : null}
      >
        <div class="mdc-button-inner-wrapper">
          {!!this.icon ? (
            <i class="mdc-button-icon material-icons mdc-button__icon">{this.icon}</i>
          ) : (
            <i class="mdc-button-icon" />
          )}
          {!!this.src ? (
            <img class="mdc-button-img" src={this.src} />
          ) : (
            <img class="mdc-button-img" />
          )}
          <span class="mdc-button-slot">
            <slot />
          </span>
        </div>
      </button>
    );
  }
}
