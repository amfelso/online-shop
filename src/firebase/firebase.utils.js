import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBv07FJx4JpyWBbl98YMBuA1Pao7oYr3oA",
  authDomain: "react-shop-7afd7.firebaseapp.com",
  projectId: "react-shop-7afd7",
  storageBucket: "react-shop-7afd7.appspot.com",
  messagingSenderId: "994722831988",
  appId: "1:994722831988:web:48ed0364b7ea9b252b7b21",
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account " });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
