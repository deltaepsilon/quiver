import { Observable } from 'rxjs/Observable';

exports.StorageService = function StorageService() {
  const firebase = window.firebase;
  const storage = firebase.storage();

  function upload(folder = '', [...files]) {
    return Observable.create(observer => {
      function processFiles(filesToProcess) {
        if (filesToProcess.length) {
          const file = filesToProcess.shift();
          const ref = storage.ref(`${folder}/${file.name}`);
          const task = ref.put(file);

          observer.next({ file, task });

          task.then(snapshot => observer.next({ snapshot }));

          task.on(
            'state_changed',
            snapshot => observer.next({ snapshot }),
            error => observer.error(error),
            () => processFiles(filesToProcess)
          );
        } else {
          observer.complete();
        }
      }
      processFiles(files);
    });
  }

  return {
    upload,
  };
};
