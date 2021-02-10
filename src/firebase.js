import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseApp = firebase.initializeApp({
  apiKey: "YOUR API KEY",
  authDomain: "XXXXXXXXXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXXXXXX",
  messagingSenderId: "2571XXXXXXX",
  appId: "YOUR APP ID",
  measurementId: "G-XXXXXXXX",
});

//for authentication connect witth google, (login, sign up)
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
