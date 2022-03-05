// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa0fQlXP6h1XONLvjf-ucE98cKZPeFstM",
  authDomain: "loginpage-e6f89.firebaseapp.com",
  projectId: "loginpage-e6f89",
  storageBucket: "loginpage-e6f89.appspot.com",
  messagingSenderId: "1043903670598",
  appId: "1:1043903670598:web:448a87359cbddee42b9d47",
  measurementId: "G-V3XGVN8JRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;