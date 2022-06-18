// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

import React from 'react';

import { collection, doc, getDoc, getDocs, getFirestore, onSnapshot, orderBy, query, setDoc, where } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFXgxYNbqxHYiSIu8rL1QW1jANNf1NbNg",
  authDomain: "food-delivery-acc10.firebaseapp.com",
  databaseURL: "https://food-delivery-acc10-default-rtdb.firebaseio.com",
  projectId: "food-delivery-acc10",
  storageBucket: "food-delivery-acc10.appspot.com",
  messagingSenderId: "343225741365",
  appId: "1:343225741365:web:35f4824b7723d10b8a017c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const db = getFirestore(app) 

export {app, storage, db}

export const saveItem = async (data) =>{
    await setDoc(doc(db, 'foodItem', `${Date.now()}`), data, {merge: true});
  }



 

