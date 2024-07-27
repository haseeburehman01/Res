// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyByZ004eU3zGqRTvfDYWhy5vcRbS4Pom-Y",
  authDomain: "giaic-quiz-app-by-haseeb.firebaseapp.com",
  projectId: "giaic-quiz-app-by-haseeb",
  storageBucket: "giaic-quiz-app-by-haseeb.appspot.com",
  messagingSenderId: "238851099592",
  appId: "1:238851099592:web:053b39abb2f3b8a3578efd",
  measurementId: "G-CYMPN32EP1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);