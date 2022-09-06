import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfk8gjlRrmYDxwqTKBU3qOYWRqta3ICxA",
  authDomain: "ecommerce-project-5ab4d.firebaseapp.com",
  databaseURL: "https://ecommerce-project-5ab4d-default-rtdb.firebaseio.com",
  projectId: "ecommerce-project-5ab4d",
  storageBucket: "ecommerce-project-5ab4d.appspot.com",
  messagingSenderId: "428561597105",
  appId: "1:428561597105:web:669eae5b7fe47638121890",
  measurementId: "G-ZZXLFE2PDQ"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

