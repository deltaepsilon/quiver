import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'mdl-button',
  styleUrl: 'mdl-button.scss'
})
export class MDLButton {
  @Prop() raised: boolean;
  
  @Prop() ripple: boolean;

  get classMap() {
    return new Map([
      ['raised', 'mdl-button--raised'],
      ['raised', 'mdl-button--upgraded'],
    ]);
  }

  render() {
    let classes = ['mdl-button'];

    this.classMap.forEach((key, value) => {
      console.log(key, value);
    });

    return (
      <button class={classes.join(' ')}>
        <slot />
      </button>
    );
  }
}