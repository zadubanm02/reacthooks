import * as firebase from "firebase";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAoqegMPFXVT3E1aoGmilZJYq6smuwLwC0",
  authDomain: "hooksreact.firebaseapp.com",
  databaseURL: "https://hooksreact.firebaseio.com",
  projectId: "hooksreact",
  storageBucket: "gs://hooksreact.appspot.com",
  messagingSenderId: "338347673391",
  appId: "1:338347673391:web:9f0e4c6968e4733d"
};
// Initialize Firebase
export const fr = firebase.initializeApp(firebaseConfig);

const db = fr.firestore();

export const fbstorage = fr.storage();

export default db;

class Firebase {
  constructor() {
    this.auth = fr.auth();
  }
  logIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  async signUp(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }
  logOut() {
    this.auth.signOut();
  }
}

export const firebaseClass = new Firebase();
