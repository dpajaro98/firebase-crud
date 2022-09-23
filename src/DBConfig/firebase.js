import { initializeApp } from "firebase/app";
import{getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDlki5mgt4QWlb--Wn5p4skfkLkxnoVIV0",
  authDomain: "app-personal-db6e5.firebaseapp.com",
  projectId: "app-personal-db6e5",
  storageBucket: "app-personal-db6e5.appspot.com",
  messagingSenderId: "356068872320",
  appId: "1:356068872320:web:9623e9389ea914d955d665"
};


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)