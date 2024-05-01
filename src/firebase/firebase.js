// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqbxNqsFNpdkuwxdMgmTg697U12zTLr2k",
  authDomain: "basketjo-dbc56.firebaseapp.com",
  projectId: "basketjo-dbc56",
  storageBucket: "basketjo-dbc56.appspot.com",
  messagingSenderId: "506718146114",
  appId: "1:506718146114:web:419391ca59fec9014ba7db",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// const analytics = getAnalytics(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);
