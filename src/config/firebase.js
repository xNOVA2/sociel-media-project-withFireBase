// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBNBl_4Lr7j2f7VGAmKpWJHlnuPkCAtB4",
  authDomain: "myfacebook-5b13b.firebaseapp.com",
  projectId: "myfacebook-5b13b",
  storageBucket: "myfacebook-5b13b.appspot.com",
  messagingSenderId: "785991985213",
  appId: "1:785991985213:web:34d5cf66db84b62b6ea254",
  measurementId: "G-4JYPMJ7GWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)