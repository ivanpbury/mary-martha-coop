// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKEhz8hv_JFxAmklxka-gs7pwlyLhE_mc",
  authDomain: "mary-martha-coop.firebaseapp.com",
  projectId: "mary-martha-coop",
  storageBucket: "mary-martha-coop.appspot.com",
  messagingSenderId: "2453343365",
  appId: "1:2453343365:web:90b7b299a2a9d3b8d46dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage}
