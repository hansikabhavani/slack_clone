// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWAbAscdDyyJwQ12AzhcREpnp-IRrmfk8",
  authDomain: "slack-react-clone-66f95.firebaseapp.com",
  databaseURL: "https://slack-react-clone-66f95-default-rtdb.firebaseio.com",
  projectId: "slack-react-clone-66f95",
  storageBucket: "slack-react-clone-66f95.appspot.com",
  messagingSenderId: "193349450901",
  appId: "1:193349450901:web:d3e0b8dc19b2c90523af9c",
  measurementId: "G-PTTB3J9V9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};

