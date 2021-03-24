import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyB2Bc1D60tFsIfKtxyrCeZ7n3hNG7Gc2Uc",
  authDomain: "panier-achat.firebaseapp.com",
  databaseURL: "https://panier-achat-default-rtdb.firebaseio.com",
  projectId: "panier-achat",
  storageBucket: "panier-achat.appspot.com",
  messagingSenderId: "522134652630",
  appId: "1:522134652630:web:c64982ee579bd85f912b77",
  measurementId: "G-7ZBKRL9T3J"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
