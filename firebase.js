// import firebase from "firebase";
// import "firebase/storage";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, updateDoc, serverTimestamp, doc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAl3tmFebhFmG_sQYS6kswsflyFxcV22Ks",
    authDomain: "facebook-2point0.firebaseapp.com",
    projectId: "facebook-2point0",
    storageBucket: "facebook-2point0.appspot.com",
    messagingSenderId: "343924588668",
    appId: "1:343924588668:web:f616a614344a88f5d889f9"
};

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();
const app = initializeApp(firebaseConfig);

// const db = app.firestore();
const db = getFirestore();

// const storage = firebase.storage();
const storage = getStorage(app);

export { db, storage, collection, addDoc, uploadString, ref, getDownloadURL, updateDoc, serverTimestamp, doc, query, orderBy, onSnapshot };