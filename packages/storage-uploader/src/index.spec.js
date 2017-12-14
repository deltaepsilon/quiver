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
    beforeEach(() => {
      render(<Component />, container);
    });

    it('should respond to files', done => {
      inputFiles(files).then(done, done.fail);
    });
  });

  describe('Upload a file', () => {
    
  });

  function inputFiles(files) {
    return new Promise(resolve => {
      const input = container.querySelector('input');
      Object.defineProperty(input, 'files', {
        value: files,
      });

      global.dispatchEvent = e => {
        if (e.type == 'storageUploaderFilesChanged') {
          expect(e.detail.files.length).toEqual(2);
          resolve();
        }
      };

      input.dispatchEvent(new CustomEvent('change'));
    });
  }
});
