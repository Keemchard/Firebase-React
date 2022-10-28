// Import the functions you need from the SDKs you need

// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJ9mwEpYIzciSXitwbpZUS3RgfdCduzqo",
  authDomain: "firstfirebase-6840b.firebaseapp.com",
  projectId: "firstfirebase-6840b",
  storageBucket: "firstfirebase-6840b.appspot.com",
  messagingSenderId: "32463058338",
  appId: "1:32463058338:web:97b3ee66bdf0fb6237eefb",
  measurementId: "G-T20SF8LH1X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
export const db = getFirestore();
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = firebase.auth();
// export default firebase;
