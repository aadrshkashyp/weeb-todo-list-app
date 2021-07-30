import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDfiYcs3ieMcRXBV-NqiIVK5ckCbJTQFDs",
    authDomain: "weeb-todo-list-app.firebaseapp.com",
    databaseURL: "https://weeb-todo-list-app-default-rtdb.firebaseio.com",
    projectId: "weeb-todo-list-app",
    storageBucket: "weeb-todo-list-app.appspot.com",
    messagingSenderId: "1002981537455",
    appId: "1:1002981537455:web:52aab60abba2bf475fc65a"
});

export {firebaseConfig as firebase};