// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAy2Zy0JPSEU0kjOzDOX60_bPibXuMjdEs",
  authDomain: "login-page-7fa9f.firebaseapp.com",
  databaseURL: "https://login-page-7fa9f-default-rtdb.firebaseio.com",
  projectId: "login-page-7fa9f",
  storageBucket: "login-page-7fa9f.appspot.com",
  messagingSenderId: "293516636185",
  appId: "1:293516636185:web:c0e0a6fd78551361077a88",
  measurementId: "G-YF6ES1HHK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;