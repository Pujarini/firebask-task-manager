import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd3a2n17T4XeLBQAv4afywPEbgj4w22co",
  authDomain: "interview-share.firebaseapp.com",
  projectId: "interview-share",
  storageBucket: "interview-share.appspot.com",
  messagingSenderId: "144315454828",
  appId: "1:144315454828:web:daa36941e2b41748740f49",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
