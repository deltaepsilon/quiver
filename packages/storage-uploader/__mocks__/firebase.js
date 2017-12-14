export default function Firebase() {
  let currentUser = null;
  class Auth {
    set currentUser(x) {
      currentUser = x;
    }

    get currentUser() {
      return currentUser;
    }
  }
  let confirm = jest.fn(() => Promise.resolve());

  Auth.prototype.onAuthStateChanged = jest.fn(cb => cb(currentUser));
  Auth.prototype.signOut = jest.fn();
  Auth.prototype.signInWithEmailAndPassword = jest.fn(() => Promise.resolve());
  Auth.prototype.createUserWithEmailAndPassword = jest.fn(() => Promise.resolve());
  Auth.prototype.sendPasswordResetEmail = jest.fn(() => Promise.resolve());
  Auth.prototype.signInWithPopup = jest.fn(() => Promise.resolve());
  Auth.prototype.signInWithRedirect = jest.fn(() => Promise.resolve());

  Auth.prototype.signInWithPhoneNumber = jest.fn(() => Promise.resolve({ confirm }));

  class Firebase {
    constructor() {
      this.__auth = new Auth();
    }

    get confirm() {
      return confirm;
    }

    set currentUser(x) {
      this.__auth.currentUser = x;
    }

    setAuthError(method, code) {
      this.__auth[method] = jest.fn(() => Promise.reject({ code }));
    }

    auth() {
      return this.__auth;
    }

    setConfirmError(code) {
      confirm = jest.fn(() => Promise.reject({ code }));
    }
  }

  Firebase.prototype.auth.FacebookAuthProvider = jest.fn();
  Firebase.prototype.auth.GithubAuthProvider = jest.fn();
  Firebase.prototype.auth.GoogleAuthProvider = jest.fn();
  Firebase.prototype.auth.TwitterAuthProvider = jest.fn();
  Firebase.prototype.auth.RecaptchaVerifier = jest.fn();

  return new Firebase();
}
