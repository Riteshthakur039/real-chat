import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYb7XbSlIOXrCOTdPRJnYDv3NAe6WENkQ",
  authDomain: "chat-a4d82.firebaseapp.com",
  projectId: "chat-a4d82",
  storageBucket: "chat-a4d82.appspot.com",
  messagingSenderId: "1009128949825",
  appId: "1:1009128949825:web:d4c9bd7610159b99fddec0"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "chat-a4d82.firebaseapp.com",
//   projectId: "chat-a4d82",
//   storageBucket: "chat-a4d82.appspot.com",
//   messagingSenderId: "1009128949825",
//   appId: "1:1009128949825:web:d4c9bd7610159b99fddec0",
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()