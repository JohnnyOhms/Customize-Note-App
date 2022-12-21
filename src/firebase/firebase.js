import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-Vc3Sr87dgX-5cjRWIt_CslAiVYlYcsc",
  authDomain: "note-app-auth-97258.firebaseapp.com",
  projectId: "note-app-auth-97258",
  storageBucket: "note-app-auth-97258.appspot.com",
  messagingSenderId: "871873511891",
  appId: "1:871873511891:web:430a038d5bbb72d95a2f26",
  measurementId: "G-QY39GSJTMQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
