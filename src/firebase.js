// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtY_YKxaHB3LvClffaiMe17bezyFRIqKM",
  authDomain: "netflixgpt-16g1.firebaseapp.com",
  projectId: "netflixgpt-16g1",
  storageBucket: "netflixgpt-16g1.firebasestorage.app",
  messagingSenderId: "774940070247",
  appId: "1:774940070247:web:f05563b139ecdfbec05fc2",
  measurementId: "G-1GPBZRZ08V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
