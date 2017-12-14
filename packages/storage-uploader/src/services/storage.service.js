exports.StorageService = function StorageService({ fire, handleError, changeView, clearInputs }) {
  const firebase = window.firebase;
  const auth = firebase.auth();

  const providersMap = {
    facebook: new firebase.auth.FacebookAuthProvider(),
    github: new firebase.auth.GithubAuthProvider(),
    google: new firebase.auth.GoogleAuthProvider(),
    twitter: new firebase.auth.TwitterAuthProvider(),
  };

  function onAuthStateChanged(cb) {
    return auth.onAuthStateChanged(cb);
  }

  function signOut() {
    return auth.signOut().catch(error => handleError(error));
  }

  // window.firebase.auth().currentUser
  function currentUserDelete({ currentUser }) {
    return currentUser
      .delete()
      .then(() => fire('currentUserDeleted', { currentUser }))
      .catch(error => handleError(error));
  }

  function signInWithEmailAndPassword({ email, password }) {
    return auth.signInWithEmailAndPassword(email, password).catch(error => {
      if (error.code == 'auth/user-not-found') {
        changeView('prompt-register');
      } else if (error.code == 'auth/wrong-password') {
        changeView('bad-password');
      }
      handleError(error);
    });
  }

  function createUserWithEmailAndPassword({ email, password }) {
    return auth.createUserWithEmailAndPassword(email, password).catch(error => {
      if (error.code == 'auth/email-already-in-use') {
        changeView('duplicate-account');
      }
      handleError(error);
    });
  }

  function sendPasswordResetEmail({ email }) {
    return auth
      .sendPasswordResetEmail(email)
      .then(() => {
        fire('passwordResetSent', { email });
        clearInputs();
        changeView('input-email');
      })
      .catch(error => handleError(error));
  }

  function signInWithPhoneNumber({ callingCode, phone, recaptchaVerifier, setConfirm }) {
    return auth
      .signInWithPhoneNumber(`+${callingCode} ${phone}`, recaptchaVerifier)
      .then(confirmationResult => {
        fire('phoneConfirmationSent', { callingCode, phone });
        changeView('confirm-phone');
        setConfirm(code => {
          confirmationResult.confirm(code).catch(error => {
            if (error.code == 'auth/invalid-verification-code') {
              handleError(`Invalid verification code: ${code}`);
            } else {
              handleError(error);
            }
          });
        });
      })
      .catch(error => handleError(error));
  }

  function signInWithPopup(providerName) {
    const provider = providersMap[providerName];
    return auth.signInWithPopup(provider);
  }

  function signInWithRedirect(providerName) {
    const provider = providersMap[providerName];
    return auth.signInWithRedirect(provider);
  }

  function getRecaptchaVerifier(recaptchaId) {
    return new firebase.auth.RecaptchaVerifier(recaptchaId, {
      size: 'invisible',
      callback: response => {
        // console.log('response', response);
      },
    });
  }

  return {
    onAuthStateChanged,
    signOut,
    currentUserDelete,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPhoneNumber,
    signInWithPopup,
    signInWithRedirect,
    getRecaptchaVerifier,
  };
};
