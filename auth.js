// auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { auth } from './firebase-config.js';

// Sign up function
export async function signup(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Signup successful:", userCredential.user);
  } catch (error) {
    console.error("Signup error:", error.message);
    throw error;
  }
}

// Login function
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful:", userCredential.user);
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
}

// Logout function
export async function logout() {
  try {
    await signOut(auth);
    console.log("Logged out successfully.");
  } catch (error) {
    console.error("Logout error:", error.message);
  }
      }
