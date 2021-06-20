import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA73Xan60gHluxKYRr0npUpP5XRA_eKTJI",
  authDomain: "goodfood-47ca6.firebaseapp.com",
  projectId: "goodfood-47ca6",
  storageBucket: "goodfood-47ca6.appspot.com",
  messagingSenderId: "823846797368",
  appId: "1:823846797368:web:e891190d3473d8a5fd66cd",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const fireStore = firebase.fireStore();

export { projectStorage, fireStore };
