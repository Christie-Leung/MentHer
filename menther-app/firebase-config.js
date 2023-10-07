// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCd8NFXgB4DBIJveBtqP57kanbmzhZ1Gn4",
  authDomain: "menther-ae546.firebaseapp.com",
  projectId: "menther-ae546",
  storageBucket: "menther-ae546.appspot.com",
  messagingSenderId: "124211927036",
  appId: "1:124211927036:web:dcd83e2a22951ed941c479"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
