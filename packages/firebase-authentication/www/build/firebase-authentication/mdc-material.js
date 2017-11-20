/*! Built with http://stenciljs.com */

window['firebase-authentication'].loadStyles("mdc-material","/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n.mdc-elevation--z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation-transition {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow;\n}\n\nmdc-material {\n  display: block;\n}\n\nmdc-material .padding {\n  padding: 1rem;\n}\nmdc-material.hydrated{visibility:inherit}");
window['firebase-authentication'].loadComponents(

/**** module id (dev mode) ****/
"mdc-material",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

function getClassesFromMap(map) {
  const classes = [];
  map.forEach((value, className) => {
    if (value) {
      classes.push(className);
    }
  });
  return classes.join(' ');
}

class MDCMaterial {
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

exports['mdc-material'] = MDCMaterial;
},


/***************** mdc-material *****************/
[
/** mdc-material: tag **/
"mdc-material",

/** mdc-material: members **/
[
  [ "elevation", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "padding", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "transition", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
]

]
);