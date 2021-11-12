// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
initializeApp({
  apiKey: "AIzaSyCyJn9rwoqcdB6i_eKIqgqTyI0t6asK8JY",
  authDomain: "power-me-up-bd493.firebaseapp.com",
  projectId: "power-me-up-bd493",
  storageBucket: "power-me-up-bd493.appspot.com",
  messagingSenderId: "371528792370",
  appId: "1:371528792370:web:c7b45f92293760f9e4bf2b"
})

const db = getFirestore();

export default db;