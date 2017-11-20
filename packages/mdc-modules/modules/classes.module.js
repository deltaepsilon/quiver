export function getClassesFromMap(map) {
  const classes = [];
  map.forEach((value, className) => {
    if (value) {
      classes.push(className);
    }
  });
  return classes.join(' ');
}

export function MDCClassesMixin(superclass = class Superclass {}) {
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
