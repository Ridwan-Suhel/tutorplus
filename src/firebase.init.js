// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOwf6n3F-ISAvsRE1pIkdMendtmLyyFsU",
  authDomain: "tutorplus-5456d.firebaseapp.com",
  projectId: "tutorplus-5456d",
  storageBucket: "tutorplus-5456d.appspot.com",
  messagingSenderId: "123215579123",
  appId: "1:123215579123:web:1583d204f5a026189d3486",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
