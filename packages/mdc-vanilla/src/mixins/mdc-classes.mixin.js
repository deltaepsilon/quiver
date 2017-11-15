export function MDCClassesMixin(superclass = class {}) {
  return class MDCClasses extends superclass {
    get classesMap() {
      return new Map();
    }

    get classes() {
      const classes = [];
      this.classesMap.forEach((value, className) => {
        if (value) {
          classes.push(className);
        }
      });
      return classes.join(' ');
    }

  };
}
