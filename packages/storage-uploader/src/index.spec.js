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

  it('should render', done => {
    render(<Component />, container);
    htmlLooksLike(
      container.innerHTML,
      `
      <div class="firebase-authentication" view="login-options">
        <div name="Button" type="email" ripple="true" raised="true">{{...}}</div>
      </div>
    `
    );
    verifyEventType('currentUserChanged').then(done, done.fail);
  });

});
