import { getApp, getApps, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const VITE_FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: "fir-auth-cc-46fa0.firebaseapp.com",
  projectId: "fir-auth-cc-46fa0",
  storageBucket: "fir-auth-cc-46fa0.appspot.com",
  messagingSenderId: "873292002135",
  appId: "1:873292002135:web:a2e104c826bc8df4274412",
};

// Initialize Firebase
const firestoreApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth(firestoreApp);

export { auth, googleAuthProvider };
