export function MDCClassesMixin(superclass = class Superclass {}) {
  return class MDCClasses extends superclass {
    get classesMap(): Map<String, Boolean> {
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
