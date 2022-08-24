import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ5KqBhvMGGs0dnxuHDlohxDvRRHsEAXw",
  authDomain: "eshop-995a3.firebaseapp.com",
  projectId: "eshop-995a3",
  storageBucket: "eshop-995a3.appspot.com",
  messagingSenderId: "781634230607",
  appId: "1:781634230607:web:ce151518a3b88f8c9dcd3a",
  measurementId: "G-2W521QL543",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
