import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAoqegMPFXVT3E1aoGmilZJYq6smuwLwC0",
  authDomain: "hooksreact.firebaseapp.com",
  databaseURL: "https://hooksreact.firebaseio.com",
  projectId: "hooksreact",
  storageBucket: "",
  messagingSenderId: "338347673391",
  appId: "1:338347673391:web:9f0e4c6968e4733d"
};
// Initialize Firebase
const fr = firebase.initializeApp(firebaseConfig);
const db = fr.firestore();

export default db;
