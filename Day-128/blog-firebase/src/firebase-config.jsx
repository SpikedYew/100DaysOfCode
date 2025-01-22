// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKM4NN9BnsHyVKne6M8-1eXrAX48t12UQ",
  authDomain: "blogfirstfirebase.firebaseapp.com",
  projectId: "blogfirstfirebase",
  storageBucket: "blogfirstfirebase.firebasestorage.app",
  messagingSenderId: "558532961554",
  appId: "1:558532961554:web:873c5205354db1a8137fcb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
