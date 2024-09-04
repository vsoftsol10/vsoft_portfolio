

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAZdEOLvUbpGuL4s2qYMETvKuU9FZjtDFM",
    authDomain: "vsoftadmin-29f4f.firebaseapp.com",
    projectId: "vsoftadmin-29f4f",
    storageBucket: "vsoftadmin-29f4f.appspot.com",
    messagingSenderId: "654111268361",
    appId: "1:654111268361:web:18d69557a90a9c8599a2d8",
    measurementId: "G-JKTCSL34SJ",
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL };
