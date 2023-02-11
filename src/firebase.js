// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABJ_IIzCM1KE4CCs9P0K_rWKnOxOXwA2A",
  authDomain: "marymarthaschool.firebaseapp.com",
  projectId: "marymarthaschool",
  storageBucket: "marymarthaschool.appspot.com",
  messagingSenderId: "840494535593",
  appId: "1:840494535593:web:1eeb4a38b7c2c808a8eab8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage}
