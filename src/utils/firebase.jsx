// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6EAcKJbs_Juj6SJETlQ81OmH2zAVACFk",
  authDomain: "ecommerce-vallera.firebaseapp.com",
  projectId: "ecommerce-vallera",
  storageBucket: "ecommerce-vallera.appspot.com",
  messagingSenderId: "837285639629",
  appId: "1:837285639629:web:14f816a0dceafc02b60084"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//base de datos
export const db = getFirestore(app);