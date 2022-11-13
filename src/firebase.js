// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig1 = {
    apiKey: "AIzaSyDQSdD17a7AzF2ys3Zvy2dMxKGsX9FODCM",
    authDomain: "socialscoring.firebaseapp.com",
    databaseURL: "https://socialscoring-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "socialscoring",
    storageBucket: "socialscoring.appspot.com",
    messagingSenderId: "535209349524",
    appId: "1:535209349524:web:934edc35286a1fc34c3f81",
    measurementId: "G-1T80KQ1DVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig1);
export const db = getDatabase(app);