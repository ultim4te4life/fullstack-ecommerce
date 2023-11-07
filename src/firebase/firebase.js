import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmaqhmxKdfCwls17GHgFC4JcoCMgJI194",
  authDomain: "react-345d5.firebaseapp.com",
  projectId: "react-345d5",
  storageBucket: "react-345d5.appspot.com",
  messagingSenderId: "251432025971",
  appId: "1:251432025971:web:5739d5b17a9aaf67ce0f06",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getFirestore(app);
const usersCollection = collection(database, "users");
const productsCollection = collection(database, "products");

export { auth, usersCollection, productsCollection, database };
