// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shopper-de87d.firebaseapp.com",
  projectId: "shopper-de87d",
  storageBucket: "shopper-de87d.appspot.com",
  messagingSenderId: "56982078102",
  appId: "1:56982078102:web:70ba0fedd3a7a72d6ff8b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);