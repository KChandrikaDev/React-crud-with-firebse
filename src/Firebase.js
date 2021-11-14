import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB4gIz2xJmCOLFtL76kObCXn-59Bk3Grbw",
  authDomain: "react-firebase-7fb4d.firebaseapp.com",
  projectId: "react-firebase-7fb4d",
  storageBucket: "react-firebase-7fb4d.appspot.com",
  messagingSenderId: "379482369922",
  appId: "1:379482369922:web:387f8c34ba64fd3337e99b",
  measurementId: "G-DH5HN80DKJ",
};

firebase.initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
