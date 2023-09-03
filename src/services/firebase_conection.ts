// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAw-9YyD3BNoIJi3raZ2__1vDOxjRzMurQ",
  authDomain: "todo-firebase-63862.firebaseapp.com",
  projectId: "todo-firebase-63862",
  storageBucket: "todo-firebase-63862.appspot.com",
  messagingSenderId: "767202449030",
  appId: "1:767202449030:web:d79c26bd8342499e21e307",
  measurementId: "G-X4NN0PXFP1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {
    auth, db
}