import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCtTUcc8_gszgTUOHIqW5s574jXtNlMs5k",
  authDomain: "client-store-a97e8.firebaseapp.com",
  projectId: "client-store-a97e8",
  storageBucket: "client-store-a97e8.firebasestorage.app",
  messagingSenderId: "156360424896",
  appId: "1:156360424896:web:dcc8e5494f513aa8b99c25",
  measurementId: "G-JTGXCEHZMJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);