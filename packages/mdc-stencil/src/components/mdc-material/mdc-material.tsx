import { Component, Prop } from '@stencil/core';
import { MDCClassesMixin } from '../../mixins';

@Component({
  tag: 'mdc-material',
  styleUrl: 'mdc-material.scss',
})
export class MDCMaterial extends MDCClassesMixin() {
  @Prop() elevation: number;
  
  // Pass-through classes
  @Prop() transition: boolean;
  @Prop() padding: boolean;

  get classesMap() {
    return new Map([
      ['mdc-elevation-transition', this.transition],
      ['padding', this.padding],
    ]);
  }

  render() {
    return (
      <div class={`mdc-elevation--z${this.elevation} ` + this.classes}>
        <slot />
      </div>
    );
  }
}
