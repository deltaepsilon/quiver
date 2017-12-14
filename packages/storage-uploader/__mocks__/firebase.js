export default function Firebase() {
  let functions;
  const task = {
    on: (eventName, snapshotFn, errorFn, completeFn) =>
      (functions = { ...functions, snapshotFn, errorFn, completeFn }),
    then: taskFn => ({ ...functions, taskFn }),
  };

  let file;
  let path;

  const ref = {
    put: x => {
      file = x;
      return task;
    },
  };

  class Storage {
    get attributes() {
      return { task, file, path };
    }

    get functions() {
      return functions;
    }

    ref(x) {
      path = x;
      return ref;
    }
  }

  class Firebase {
    constructor() {
      this.__storage = new Storage();
    }

    storage() {
      return this.__storage;
    }

    setConfirmError(code) {
      confirm = jest.fn(() => Promise.reject({ code }));
    }
  }

  return new Firebase();
}
