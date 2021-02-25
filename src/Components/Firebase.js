import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBotfEn2Oh3T3-y-z4GyexA2kAAfWTQOX0",
    authDomain: "twitter-clone-2b63d.firebaseapp.com",
    projectId: "twitter-clone-2b63d",
    storageBucket: "twitter-clone-2b63d.appspot.com",
    messagingSenderId: "929821485172",
    appId: "1:929821485172:web:7db63b3d5ef4ef1bce8921",
    measurementId: "G-4R071LY7QW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db;