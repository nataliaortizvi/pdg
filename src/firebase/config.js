// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//----------Import Firestore-------------------
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmeubSpTK1Kux0wdwILNJu26ED5v3LS_o",
  authDomain: "validata-51c64.firebaseapp.com",
  projectId: "validata-51c64",
  storageBucket: "validata-51c64.appspot.com",
  messagingSenderId: "85593327036",
  appId: "1:85593327036:web:039939d80d4971b77517b9",
  measurementId: "G-3LS2W0KQCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);

export {storage}
export {db}