import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCYuSPuXYuNaJQ1rvItPm8CFddzUyzgRsE",
  authDomain: "ejercicionotas.firebaseapp.com",
  projectId: "ejercicionotas",
  storageBucket: "ejercicionotas.appspot.com",
  messagingSenderId: "455956487885",
  appId: "1:455956487885:web:8868a0ee6cac7594039384"
};

const db = firebase.initializeApp( firebaseConfig ).firestore();

export {db}