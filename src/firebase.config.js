// Import the functions you need from the SDKs you need
import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdNo_FM8uTaGJMt68-6PepYRaoIS1O2Mc",
  authDomain: "house-marketplace-aed34.firebaseapp.com",
  projectId: "house-marketplace-aed34",
  storageBucket: "house-marketplace-aed34.appspot.com",
  messagingSenderId: "215288091597",
  appId: "1:215288091597:web:2630717bb24f74db52aa84"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const auth = getAuth(app);
export const db = getFirestore()