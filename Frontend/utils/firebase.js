import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "lms-g-login.firebaseapp.com",
  projectId: "lms-g-login",
  storageBucket: "lms-g-login.firebasestorage.app",
  messagingSenderId: "967632087186",
  appId: "1:967632087186:web:544d356d44e2e7e6ba1e4b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}