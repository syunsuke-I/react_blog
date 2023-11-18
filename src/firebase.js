// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvASczZSjmvofe6yZC3Fm7BDqDAYP_tA4",
  authDomain: "blog-72ade.firebaseapp.com",
  projectId: "blog-72ade",
  storageBucket: "blog-72ade.appspot.com",
  messagingSenderId: "97188664736",
  appId: "1:97188664736:web:445cebb310c3673daec0c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export{ auth,provider,db };
