import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDq8-_u1jVvz9aWV5ytEfGbVNfqdmX6haQ",
  authDomain: "ketorecipes-a840d.firebaseapp.com",
  projectId: "ketorecipes-a840d",
  storageBucket: "ketorecipes-a840d.appspot.com",
  messagingSenderId: "1035605548656",
  appId: "1:1035605548656:web:e32cbbc8d54126df111eb5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, firebaseApp };
