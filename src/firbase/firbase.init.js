import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDi-dqgSNz3bDnziPNiyGfELuMxbeBnRYk",
  authDomain: "hero-stock-21ebe.firebaseapp.com",
  projectId: "hero-stock-21ebe",
  storageBucket: "hero-stock-21ebe.appspot.com",
  messagingSenderId: "904037571953",
  appId: "1:904037571953:web:e53eccf5fcc6f9ca16aad0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;