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
    global.dispatchEvent = jest.fn();
  });

  it('should render login-options', done => {
    render(<Component email />, container);
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

  it('should call signInWithPopup', () => {
    render(<Component google facebook twitter github />, container);

    container.querySelector('[type="google"]').click();
    container.querySelector('[type="facebook"]').click();
    container.querySelector('[type="twitter"]').click();
    container.querySelector('[type="github"]').click();
    expect(firebase.auth().signInWithPopup.mock.calls.length).toEqual(4);
  });

  describe('Logged-in view', () => {
    beforeEach(() => {
      firebase.currentUser = { delete: jest.fn(() => Promise.resolve()) };
      render(<Component />, container);
    });

    it('should render a logged-in view', () => {
      testView('logged-in');
    });

    it('should sign out', () => {
      const { signOut } = getButtons();
      signOut.click();
      expect(firebase.auth().signOut.mock.calls.length).toEqual(1);
    });

    it('should delete account', done => {
      const { deleteAccount } = getButtons();
      deleteAccount.click();
      verifyEventType('currentUserDeleted').then(done, done.fail);
    });

    function getButtons() {
      const [signOut, deleteAccount] = container.querySelectorAll('[name="Button"]');
      return { signOut, deleteAccount };
    }
  });

  describe('Email flow', () => {
    const email = 'my fake email';
    const password = 'some fake password';
    beforeEach(done => {
      render(<Component email />, container);
      enterEmail(done);
    });

    it('should allow email input and next should redirect to input-password view', () => {
      testView('input-password');
    });

    it('should reject a bad password', done => {
      testBadPassword({ error: 'auth/wrong-password', view: 'bad-password' }).then(done, done.fail);
    });

    it('should send a password reset email', done => {
      testBadPassword({
        error: 'auth/wrong-password',
        view: 'bad-password',
        done: () => {},
      })
        .then(clickNext)
        .then(() => {
          expect(firebase.auth().sendPasswordResetEmail).toHaveBeenCalledWith(email);
          return verifyEventType('passwordResetSent');
        })
        .then(done, done.fail);
    });

    it('should prompt to register', done => {
      testBadPassword({ error: 'auth/user-not-found', view: 'prompt-register' }).then(
        done,
        done.fail
      );
    });

    it('should attempt and fail at registration', done => {
      firebase.setAuthError('createUserWithEmailAndPassword', 'auth/email-already-in-use');

      testBadPassword({
        error: 'auth/user-not-found',
        view: 'prompt-register',
      })
        .then(clickNext)
        .then(() => {
          testView('register-email');
          const input = getInputs()[1];
          return setInputValue(input, password);
        })
        .then(clickNext)
        .then(() => {
          testView('duplicate-account');
          done();
        })
        .catch(done.fail);
    });

    function testBadPassword({ error, view }) {
      return new Promise(resolve => {
        firebase.setAuthError('signInWithEmailAndPassword', error);
        const [input] = getInputs();
        setInputValue(input, password)
          .then(clickNext)
          .then(() => {
            testView(view);
            resolve();
          });
      });
    }

    function enterEmail(done) {
      container.querySelector('[type="email"]').click();

      setTimeout(() => {
        const [input] = getInputs();
        return setInputValue(input, email)
          .then(clickNext)
          .then(done);
      });
    }
  });

  describe('Phone Auth', () => {
    beforeEach(() => {
      render(<Component phone />, container);
      container.querySelector('[type="phone"]').click();
    });

    it('should input calling code and phone number', done => {
      testPhoneNumberInputs(done);
    });

    it('should sign in', done => {
      firebase.setConfirmError('auth/invalid-verification-code');
      testPhoneNumberInputs(() => {
        const input = container.querySelector('input');
        setInputValue(input, '123')
          .then(() => {
            return clickNext()
          })
          .then(() => {
            setTimeout(() => {
              const errors = dispatchEvent.mock.calls.map(x => x[0]);
              const confirmError = errors.find(x => x.type == 'firebaseAuthenticationError');
              expect(firebase.confirm).toHaveBeenCalledWith('123');
              expect(confirmError.detail.error).toEqual('Invalid verification code: 123');
              done();
            }, 1000);
          });
      });
    });

    function testPhoneNumberInputs(done) {
      const select = container.querySelector('select');
      const input = container.querySelector('input');
      Promise.all([setSelectedIndex(select, 4), setInputValue(input, '12345678')])
        .then(clickNext)
        .then(() => verifyEventType('phoneConfirmationSent'))
        .then(() => {
          expect(firebase.auth().signInWithPhoneNumber.mock.calls[0][0]).toEqual('+27 12345678');
          done();
        });
    }
  });

  function clickNext() {
    return new Promise(resolve => {
      container.querySelector('[type="next"]').click();
      setTimeout(() => resolve());
    });
  }

  function testView(expected) {
    expect(container.querySelector('.firebase-authentication').getAttribute('view')).toEqual(
      expected
    );
  }

  function verifyEventType(type, count = 1) {
    return new Promise(resolve => {
      setTimeout(() => {
        const matches = dispatchEvent.mock.calls.filter(x => x[0].type == type);
        expect(matches.length).toEqual(count);
        resolve();
      });
    });
  }

  function setSelectedIndex(el, selectedIndex) {
    return new Promise(resolve => {
      el.selectedIndex = selectedIndex;
      el.dispatchEvent(new Event('change'));
      setTimeout(() => resolve());
    });
  }

  function setInputValue(el, value) {
    return new Promise(resolve => {
      el.value = value;
      el.dispatchEvent(new Event('input'));
      setTimeout(() => resolve());
    });
  }

  function getInputs() {
    return container.querySelectorAll('input');
  }
});
