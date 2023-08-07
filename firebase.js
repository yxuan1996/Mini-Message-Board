import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import "dotenv/config.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log('firebase init');

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

