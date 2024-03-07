// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: "todo-app-reactjs-firebas-b83ca",
  storageBucket: "todo-app-reactjs-firebas-b83ca.appspot.com",
  messagingSenderId: "1067391312382",
  appId: "1:1067391312382:web:54fd3eced9df008a4de0af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);