import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEYt36BnY9sw6TzoeBWTFTO_TWzFj6ZLg",
  authDomain: "kenlovestocode-facebook-clone.firebaseapp.com",
  databaseURL: "https://kenlovestocode-facebook-clone.firebaseio.com",
  projectId: "kenlovestocode-facebook-clone",
  storageBucket: "kenlovestocode-facebook-clone.appspot.com",
  messagingSenderId: "595383051354",
  appId: "1:595383051354:web:e572f26f06032c3904a463",
  measurementId: "G-2BSXDL6PY0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
