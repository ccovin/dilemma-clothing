import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCaTQMPgQjDntz6dj14AutKMsL9uOHI6Cs",
  authDomain: "dilemma-db.firebaseapp.com",
  databaseURL: "https://dilemma-db.firebaseio.com",
  projectId: "dilemma-db",
  storageBucket: "dilemma-db.appspot.com",
  messagingSenderId: "405181716901",
  appId: "1:405181716901:web:f6afa8002211de6b25704c",
  measurementId: "G-L3G3HST604"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
