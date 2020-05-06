import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCNWavhIevdYlE6LoW7cGjvdSc2H0nFlAA",
  authDomain: "kt-webshop.firebaseapp.com",
  databaseURL: "https://kt-webshop.firebaseio.com",
  projectId: "kt-webshop",
  storageBucket: "kt-webshop.appspot.com",
  messagingSenderId: "933243574166",
  appId: "1:933243574166:web:877add5e66937aa946efb7",
  measurementId: "G-F7QMC591V9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
