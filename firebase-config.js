// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ-z5WqawD7s_cZW36_m_EVDHcCsx-3jo",
  authDomain: "myweblogin-57f4b.firebaseapp.com",
  projectId: "myweblogin-57f4b",
  storageBucket: "myweblogin-57f4b.appspot.com",
  messagingSenderId: "980766131613",
  appId: "1:980766131613:web:c1339b47d7fe4c7713db74",
  measurementId: "G-WF837KLQJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth so other scripts can use it
export { auth };
