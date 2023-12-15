import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import  initializeApp  from "firebase/app";

firebase.initializeApp({
    apiKey: "AIzaSyCZ0I_V5l7i7adQIlHR0l6MnDhCHv6VpuI",
    authDomain: "noteapptes.firebaseapp.com",
    databaseURL: "https://noteapptes-default-rtdb.firebaseio.com",
    projectId: "noteapptes",
    storageBucket: "noteapptes.appspot.com",
    messagingSenderId: "163233919847",
    appId: "1:163233919847:web:01c2819fdcd6e5c0ee35c2"
});

const FIREBASE = firebase;

export default FIREBASE;