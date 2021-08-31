import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account " });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
