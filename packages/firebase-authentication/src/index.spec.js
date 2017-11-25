import { h, render } from 'preact';
import Firebase from '../__mocks__/firebase';
import Component from './index';
import htmlLooksLike from 'html-looks-like';

describe('FirebaseAuthentication', () => {
  let container, firebase;
  beforeEach(() => {
    firebase = new Firebase();
    window.firebase = firebase;
    container = document.createElement('div');
    (document.body || document.documentElement).appendChild(container);
    container.innerHTML = '';
  });

  it('should render login-options', () => {
    render(<Component email />, container);
    htmlLooksLike(
      container.innerHTML,
      `
      <div class="firebase-authentication" view="login-options">
        <div name="Button" type="email" ripple="true" raised="true">{{...}}</div>
      </div>
    `
    );
  });

  it('should call signInWithPopup', () => {
    render(<Component google facebook twitter github />, container);

    container.querySelector('[type="google"]').click();
    container.querySelector('[type="facebook"]').click();
    container.querySelector('[type="twitter"]').click();
    container.querySelector('[type="github"]').click();
    expect(firebase.mocks.auth.signInWithPopup.mock.calls.length).toEqual(4);
  });

  describe('Logged-in view', () => {
    beforeEach(() => {
      firebase.currentUser = { delete: jest.fn(Promise.resolve()) };
      render(<Component />, container);
    });

    it('should render a logged-in view', () => {
      testView('logged-in');
    });

    it('should sign out', () => {
      const { signOut } = getButtons();
      signOut.click();
      expect(firebase.mocks.auth.signOut.mock.calls.length).toEqual(1);
    });

    it('should delete account', () => {
      const { deleteAccount } = getButtons();
      deleteAccount.click();
      expect(firebase.mocks.auth.currentUser.delete.mock.calls.length).toEqual(1);
    });

    function getButtons() {
      const [signOut, deleteAccount] = container.querySelectorAll('[name="Button"]');
      return { signOut, deleteAccount };
    }
  });

  describe('Email flow', () => {
    const password = 'some fake password';
    beforeEach(done => {
      render(<Component email />, container);
      enterEmail(done);
    });

    it('should allow email input and next should redirect to input-password view', () => {
      testView('input-password');
    });

    it('should reject a bad password', done => {
      testBadPassword({ error: 'auth/wrong-password', view: 'bad-password', done });
    });

    it('should prompt to register', done => {
      testBadPassword({ error: 'auth/user-not-found', view: 'prompt-register', done });
    });

    it('should attempt and fail at registration', done => {
      firebase.setAuthError('createUserWithEmailAndPassword', 'auth/email-already-in-use');

      testBadPassword({
        error: 'auth/user-not-found',
        view: 'prompt-register',
        done: () => {
          clickNext(() => {
            testView('register-email');
            container.querySelectorAll('input')[1].value = password;
            clickNext(() => {
              testView('duplicate-account');
              done();
            });
          });
        },
      });
    });

    function testBadPassword({ error, view, done }) {
      firebase.setAuthError('signInWithEmailAndPassword', error);
      container.querySelector('input').value = password;
      clickNext(() => {
        testView(view);
        done();
      });
    }

    function enterEmail(done) {
      container.querySelector('[type="email"]').click();

      setTimeout(() => {
        container.querySelector('input').value = 'chris@chrisesplin.com';
        clickNext(() => {
          done();
        });
      });
    }
  });

  describe('Phone Auth', () => {
    beforeEach(() => {
      render(<Component phone />, container);
      container.querySelector('[type="phone"]').click();
    });

    // it.only('should #formatPhone', done => {
    //   const input = container.querySelector('input');
    //   input.value = '123';
    //   setTimeout(() => {

    //     console.log('container.innerHTML', container.innerHTML);
    //     done();
    //   });
    // });
  });

  describe('formatPhone', () => {
    let firebaseAuthentication;
    beforeEach(() => {
      firebaseAuthentication = new Component();
    });



    it.only('should format a string', () => {
      const tests = [
        ['+123', '+123'],
        ['123 ', '+123 '],
        ['  123 ', '+123 '],
        ['  123 (', '+123 '],
        ['123-', '+123 '],
        ['1 801', '+1 801'],
        ['1 123-456-789', '+1 123456789'],
        ['1 123 456 789', '+1 123456789'],
        ['1 123456789', '+1 123456789'],
      ];

      tests.forEach(([input, expected]) => {
        expect(firebaseAuthentication.formatPhone(input)).toEqual(expected);
      });
    });

  });

  function clickNext(done) {
    container.querySelector('[type="next"]').click();
    setTimeout(() => done());
  }

  function testView(expected) {
    expect(container.querySelector('.firebase-authentication').getAttribute('view')).toEqual(
      expected
    );
  }
});
