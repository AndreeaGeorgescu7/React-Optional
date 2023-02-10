// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDO6xJhOThX1QveAdIXk95ir_gKRKYcvUs",
  authDomain: "make-upstore.firebaseapp.com",
  databaseURL: "https://make-upstore-default-rtdb.firebaseio.com",
  projectId: "make-upstore",
  storageBucket: "make-upstore.appspot.com",
  messagingSenderId: "768247591063",
  appId: "1:768247591063:web:ccf5788889ed3fd43839d2",
  measurementId: "G-T01PJ5QMV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth(app);