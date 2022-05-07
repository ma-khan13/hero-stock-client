import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: process.env.FIRBASE_AUTH_apiKey,
  authDomain: process.env.FIRBASE_AUTH_authDomain,
  projectId: process.env.FIRBASE_AUTH_projectId,
  storageBucket: process.env.FIRBASE_AUTH_storageBucket,
  messagingSenderId: process.env.FIRBASE_AUTH_messagingSenderId,
  appId: process.env.FIRBASE_AUTH_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;