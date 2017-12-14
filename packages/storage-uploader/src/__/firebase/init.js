if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyCzNxnQ6WCJKejq6SBd7NqhVskxEOmDq_Y",
  "databaseURL": "https://quiver-four.firebaseio.com",
  "storageBucket": "quiver-four.appspot.com",
  "authDomain": "quiver-four.firebaseapp.com",
  "messagingSenderId": "1082528354495",
  "projectId": "quiver-four"
});
