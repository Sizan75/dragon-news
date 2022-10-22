// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQXaLKyCsXBbNzpYQHIbGdwxMlV4oLBso",
  authDomain: "dragon-news-ccfcc.firebaseapp.com",
  projectId: "dragon-news-ccfcc",
  storageBucket: "dragon-news-ccfcc.appspot.com",
  messagingSenderId: "93714083432",
  appId: "1:93714083432:web:aa440dfd6bd8f883fdd5dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;