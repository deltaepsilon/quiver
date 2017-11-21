import { } from '@stencil/core';
import { getClassesFromMap } from '@quiver/mdc-modules';
export class MDCMaterial {
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
        return (h("div", { class: `mdc-elevation--z${this.elevation} ` + this.classes },
            h("slot", null)));
    }
}
