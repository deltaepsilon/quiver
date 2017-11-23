export default function() {
  let currentUser = null;
  class Auth {
    set currentUser(x) {
      currentUser = x;
    }

    get currentUser() {
      return currentUser;
    }
  }

  Auth.prototype.onAuthStateChanged = jest.fn(cb => cb(currentUser));
  Auth.prototype.signOut = jest.fn();
  Auth.prototype.signInWithEmailAndPassword = jest.fn(() => Promise.resolve());
  Auth.prototype.createUserWithEmailAndPassword = jest.fn(() => Promise.resolve());
  Auth.prototype.sendPasswordResetEmail = jest.fn(() => Promise.resolve());
  Auth.prototype.signInWithPopup = jest.fn(() => Promise.resolve());
  Auth.prototype.signInWithRedirect = jest.fn(() => Promise.resolve());

  class Firebase {
    constructor() {
      this.mocks = {
        auth: new Auth(),
      };
    }

    set currentUser(x) {
      this.mocks.auth.currentUser = x;
    }

    setAuthError(method, code) {
      this.mocks.auth[method] = jest.fn(() => Promise.reject({ code }));
    }

    auth() {
      return this.mocks.auth;
    }
  }

  Firebase.prototype.auth.FacebookAuthProvider = jest.fn();
  Firebase.prototype.auth.GithubAuthProvider = jest.fn();
  Firebase.prototype.auth.GoogleAuthProvider = jest.fn();
  Firebase.prototype.auth.TwitterAuthProvider = jest.fn();

  return Firebase;
}
