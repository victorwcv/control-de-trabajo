// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYVg-L1H8CjgYt5M9_6IcymOZhmRHyulU",
  authDomain: "control-de-trabajo-bc078.firebaseapp.com",
  projectId: "control-de-trabajo-bc078",
  storageBucket: "control-de-trabajo-bc078.appspot.com",
  messagingSenderId: "18428666158",
  appId: "1:18428666158:web:c0ae12f5499e0a6788dabf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);