// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxMH1NRpSlah9CflQU6m8v76ZVDq3Dw-I",
  authDomain: "netflix-gpt-f6244.firebaseapp.com",
  projectId: "netflix-gpt-f6244",
  storageBucket: "netflix-gpt-f6244.appspot.com",
  messagingSenderId: "859028361525",
  appId: "1:859028361525:web:2505a63194219d14943c7c",
  measurementId: "G-C1H8X10Q3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
