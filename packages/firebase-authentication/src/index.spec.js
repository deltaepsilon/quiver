import { h, render } from 'preact';
import firebase from '../__mocks__/firebase';
import Component from './index';

// configure(new Adapter());

describe('FirebaseAuthentication', () => {
  let container;
  beforeEach(() => {
    window.firebase = firebase;
    container = document.createElement('div');
    (document.body || document.documentElement).appendChild(container);
    container.innerHTML = '';
  });

  it('Should render', () => {
    render(<Component email />, container);
    expect(container.innerHTML).toEqual('<div class="firebase-authentication"></div>');
  });
});
