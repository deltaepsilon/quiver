import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'mdl-material',
  styleUrl: 'mdl-material.scss'
})
export class MDLMaterial {
  @Prop() elevation: number;
  
  @Prop() transition: boolean;
  
  @Prop() padding: boolean;

  render() {
    let classText = `mdc-elevation--z${this.elevation}`;

    if (this.transition) {
      classText += ' mdc-elevation-transition'
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
