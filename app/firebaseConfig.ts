// firebaseConfig.ts
import firebase from 'firebase/app';
import 'firebase/messaging';
import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6di1O84-vHxtqopujwXklpxrVP45iqaI",
  authDomain: "gsrc-app.firebaseapp.com",
  projectId: "gsrc-app",
  storageBucket: "gsrc-app.appspot.com",
  messagingSenderId: "315016896909",
  appId: "1:315016896909:web:88a3cecf4da506e5a49dc4",

};

if (getApps().length < 1) {
    initializeApp(firebaseConfig);
}

export { firebase };