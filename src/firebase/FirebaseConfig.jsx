// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1xDBDpaShMm6waUeqCBHwkTp5PrQ_je4",
  authDomain: "e-commerce-93ae9.firebaseapp.com",
  projectId: "e-commerce-93ae9",
  storageBucket: "e-commerce-93ae9.appspot.com",
  messagingSenderId: "379208248820",
  appId: "1:379208248820:web:c55f08a797c1d761c5dda1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;