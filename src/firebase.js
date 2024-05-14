// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkY2X_M5R5vJ82_LVShHT3-G43-Otjpbs",
  authDomain: "realtor-clone-react-416df.firebaseapp.com",
  projectId: "realtor-clone-react-416df",
  storageBucket: "realtor-clone-react-416df.appspot.com",
  messagingSenderId: "234007841089",
  appId: "1:234007841089:web:7a5d367e76bda4e30c79c0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()