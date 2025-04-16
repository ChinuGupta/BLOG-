import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDPqEq2WrYshf8G4S_VVwgK9m9Cwj3pZM",
  authDomain: "authentication-7f118.firebaseapp.com",
  projectId: "authentication-7f118",
  storageBucket: "authentication-7f118.appspot.com",
  messagingSenderId: "862083294686",
  appId: "1:862083294686:web:c33df7a902e4a8c6ac294f",
  measurementId: "G-ME44083VK8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});