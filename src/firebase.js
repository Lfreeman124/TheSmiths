import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWixqo1scMu30WO-JFQm74GfCcITo3Fxc",
  authDomain: "the-smiths-11b41.firebaseapp.com",
  projectId: "the-smiths-11b41",
  storageBucket: "the-smiths-11b41.appspot.com",
  messagingSenderId: "1055759244678",
  appId: "1:1055759244678:web:93bf5a50da80ce9ebb6007",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
