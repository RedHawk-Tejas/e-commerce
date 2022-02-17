import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXRxxARZ-KWqDRQQ-5dV6IfY5Qt_NBurk",
  authDomain: "redhawk-tej.firebaseapp.com",
  projectId: "redhawk-tej",
  storageBucket: "redhawk-tej.appspot.com",
  messagingSenderId: "277779294722",
  appId: "1:277779294722:web:88af58b8d4d45f9409951b",
  measurementId: "G-VSZP76BKRZ"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)


export { db, firebaseApp}
