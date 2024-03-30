// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-60c32.firebaseapp.com",
  projectId: "mern-estate-60c32",
  storageBucket: "mern-estate-60c32.appspot.com",
  messagingSenderId: "1047810870049",
  appId: "1:1047810870049:web:0620f70197133e616a0c60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);