import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'mdl-material',
  styleUrl: 'mdl-material.scss',
})
export class MDLMaterial {
  @Prop() elevation: number;

  // Classes
  @Prop() transition: boolean;
  @Prop() padding: boolean;

  get classesMap() {
    return new Map([
      ['mdc-elevation-transition', this.transition],
      ['padding', this.padding],
    ]);
  }

  render() {
    let classNames = `mdc-elevation--z${this.elevation} ` + this.classes;

    if (this.transition) {
      classText += ' mdc-elevation-transition';
    }

    if (this.padding) {
      classText += ' padding';
    }

    return (
      <div class={classText}>
        <slot />
      </div>
    );
  }
}
