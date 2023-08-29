import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAtppGXQ670Mj2OOmX9rMw97G3c-0bThRY",
  authDomain: "pro-71-edcb9.firebaseapp.com",
  projectId: "pro-71-edcb9",
  storageBucket: "pro-71-edcb9.appspot.com",
  messagingSenderId: "963600343150",
  appId: "1:963600343150:web:05a8a37e77da978a97467f"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
