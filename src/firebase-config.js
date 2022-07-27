// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTyYB-LB0sNeJG7acL9u-e42ttpUJhxe0",
  authDomain: "blogproject-73575.firebaseapp.com",
  projectId: "blogproject-73575",
  storageBucket: "blogproject-73575.appspot.com",
  messagingSenderId: "475266125585",
  appId: "1:475266125585:web:2ee3a56c9521399fed86b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
