import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  // apiKey: process.env.FIRBASE_AUTH_apiKey,
  // authDomain: process.env.FIRBASE_AUTH_authDomain,
  // projectId: process.env.FIRBASE_AUTH_projectId,
  // storageBucket: process.env.FIRBASE_AUTH_storageBucket,
  // messagingSenderId: process.env.FIRBASE_AUTH_messagingSenderId,
  // appId: process.env.FIRBASE_AUTH_appId,
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