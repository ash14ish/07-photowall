import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyCvmkxmhqizgcJi-tgmAFWW1k6vvpNHSO4",
  authDomain: "photowall7347.firebaseapp.com",
  databaseURL: "https://photowall7347-default-rtdb.firebaseio.com",
  projectId: "photowall7347",
  storageBucket: "photowall7347.appspot.com",
  messagingSenderId: "543857774060",
  appId: "1:543857774060:web:d17ed53a517cc7f3aac4c9",
  measurementId: "G-CK2R88KFLD",
};

// firebase.firestore().enablePersistence();
const app = initializeApp(config);
const database = getDatabase();
export default database;
