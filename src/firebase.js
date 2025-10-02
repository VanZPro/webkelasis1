// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBLj2fXBUadBXFb4EYxH8MsT1caj85sdas",
  authDomain: "web-kelas-tes-24d34.firebaseapp.com",
  projectId: "web-kelas-tes-24d34",
  storageBucket: "web-kelas-tes-24d34.appspot.com",
  messagingSenderId: "41654521532",
  appId: "1:41654521532:web:1e1f15f08d2c49247e0ab9",
  measurementId: "G-6DX7WBFDH1" 


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();