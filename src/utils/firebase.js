// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ2wLYytw-OJq_C2PHVlebK8VjjYQJIUE",
  authDomain: "netflix-gpt-d4d44.firebaseapp.com",
  projectId: "netflix-gpt-d4d44",
  storageBucket: "netflix-gpt-d4d44.appspot.com",
  messagingSenderId: "1045770600290",
  appId: "1:1045770600290:web:43a4d3c1e90d15f127363b",
  measurementId: "G-Q3K7PPXYTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();