const auth = {
  onAuthStateChanged: jest.fn(),
  signOut: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
  signInWithPopup: jest.fn(),
  signInWithRedirect: jest.fn(),
};

const firebase = {
  mocks: {
    auth,
  },

  auth: () => {
    return auth;
  },
};

firebase.auth.FacebookAuthProvider = jest.fn();
firebase.auth.GithubAuthProvider = jest.fn();
firebase.auth.GoogleAuthProvider = jest.fn();
firebase.auth.TwitterAuthProvider = jest.fn();

export default firebase;
