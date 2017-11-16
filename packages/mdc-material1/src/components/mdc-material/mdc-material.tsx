import { Component, Prop } from '@stencil/core';
import { getClassesFromMap } from '@quiver/mdc-modules';

@Component({
  tag: 'mdc-material',
  styleUrl: 'mdc-material.scss',
})
export class MDCMaterial {
  @Prop() elevation: number;
  
  // Pass-through classes
  @Prop() transition: boolean;
  @Prop() padding: boolean;

  get classes() {
    return getClassesFromMap(this.classesMap);
  }

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
