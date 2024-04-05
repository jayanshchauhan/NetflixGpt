// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA94qunKn5UG3gkQHLxj09gDNEVGTLLmbM",
  authDomain: "netflixgpt-98554.firebaseapp.com",
  projectId: "netflixgpt-98554",
  storageBucket: "netflixgpt-98554.appspot.com",
  messagingSenderId: "109365843270",
  appId: "1:109365843270:web:386c20198f14b36a270147",
  measurementId: "G-SPG39ZB799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
