import { h, render } from 'preact';
import Firebase from '../__mocks__/firebase';
import Component from './index';
import htmlLooksLike from 'html-looks-like';

describe('FileUploader', () => {
  let container, firebase;
  beforeEach(() => {
    firebase = new Firebase();
    window.firebase = firebase;
    container = document.createElement('div');
    (document.body || document.documentElement).appendChild(container);
    container.innerHTML = '';
    global.dispatchEvent = jest.fn();
  });

  let files;
  beforeEach(() => {
    files = [
      new File(['one'], 'one.jpg', {
        type: 'image/jpeg',
      }),
      new File(['two'], 'two.txt', {
        type: 'application/text',
      }),
    ];
  });

  it('should render', () => {
    render(<Component />, container);
    htmlLooksLike(
      container.innerHTML,
      `
        <div class="storage-uploader" view="select-files">
          <div>
            <input style="display: none;" type="file" id="file-input" multiple="">
            <div name="Button" ripple="true" raised="true">{{...}}</div>
          </div>
        </div>
      `
    );
  });

  describe('Select File', () => {
    it('should respond to files', done => {
      render(<Component />, container);

      inputFiles(files).then(e => {
        expect(e.detail.files.length).toEqual(2);
        done();
      }, done.fail);
    });

    it('should limit by mime-types', done => {
      render(<Component mime-types="image/jpeg" />, container);

      inputFiles(files).then(e => {
        expect(e.detail.files.length).toEqual(1);
        done();
      }, done.fail);
    });
  });

  describe('Upload a file', () => {
    beforeEach(() => {
      render(<Component />, container);
    });

    it.only('should upload', done => {
      waitForView('upload-files').then(() => {
        const nextButton = container.querySelector('[next]');
        nextButton.click();
        
        const { snapshotFn, errorFn, completeFn } = firebase.storage().functions;
        snapshotFn(1);
        errorFn(2);
        completeFn();

        const details = dispatchEvent.mock.calls.map(([e]) => e.detail);
        expect(details.length).toEqual(4);
        expect(details[2].snapshot).toEqual(1);
        expect(details[3].error).toEqual(2);

        done();
      });

      inputFiles(files);
    });
  });

  function inputFiles(files) {
    return new Promise(resolve => {
      const input = container.querySelector('input');
      Object.defineProperty(input, 'files', {
        value: files,
      });

      const restore = proxyDispatchEvent(e => {
        if (e.type == 'storageUploaderFilesChanged') {
          restore();
          resolve(e);
        }
      });

      input.dispatchEvent(new CustomEvent('change'));
    });
  }

  function waitForView(view) {
    return new Promise(resolve => {
      const restore = proxyDispatchEvent(e => {
        global.dispatchEvent = dispatchEvent;
        if (e.detail.view == view) {
          restore();
          resolve(e);
        }
      });
    });
  }

  function proxyDispatchEvent(fn) {
    const dispatchEvent = global.dispatchEvent;
    global.dispatchEvent = fn;
    return () => (global.dispatchEvent = dispatchEvent);
  }
});
