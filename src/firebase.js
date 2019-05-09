import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA3bZbx4j1F1Q0ZATsoKiAXdHesMCY9vX8",
    authDomain: "auth-c1ca0.firebaseapp.com",
    databaseURL: "https://auth-c1ca0.firebaseio.com",
    projectId: "auth-c1ca0",
    storageBucket: "auth-c1ca0.appspot.com",
    messagingSenderId: "715958176514",
    appId: "1:715958176514:web:ee2e5c57773c9bbc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;