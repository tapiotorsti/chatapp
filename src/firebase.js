import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyColXI_zOJa0JI-0JtdemFg8C_8CvsCTGM",
    authDomain: "chatapp-76f6b.firebaseapp.com",
    projectId: "chatapp-76f6b",
    storageBucket: "chatapp-76f6b.appspot.com",
    messagingSenderId: "6945781281",
    appId: "1:6945781281:web:a46e86dde7e225b8d49560",
    measurementId: "G-WRXFWSPRMX"
}

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};