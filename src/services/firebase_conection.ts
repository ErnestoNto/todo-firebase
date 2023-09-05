// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCXIOFq3jUI9wmjr23CxE6T9SJvnAyzkbk",
  authDomain: "todo-firebase-2eca7.firebaseapp.com",
  projectId: "todo-firebase-2eca7",
  storageBucket: "todo-firebase-2eca7.appspot.com",
  messagingSenderId: "721013197627",
  appId: "1:721013197627:web:1127f470e93d1a8446c51e",
  measurementId: "G-CB0VE5633S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {
    auth, db
}