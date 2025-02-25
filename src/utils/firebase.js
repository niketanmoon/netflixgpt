// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYClf-8u15TU0Tu5oV_mhD22nS-Sg8Nag",
  authDomain: "netflixgpt-ca2b9.firebaseapp.com",
  projectId: "netflixgpt-ca2b9",
  storageBucket: "netflixgpt-ca2b9.firebasestorage.app",
  messagingSenderId: "1071039935997",
  appId: "1:1071039935997:web:4dc9d658c22ddcf1cfd594",
  measurementId: "G-0EGJQRPQSD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
