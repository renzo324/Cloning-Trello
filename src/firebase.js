import * as firebase from 'firebase';
const config = {
  apiKey: "ENTER YOURS HERE",
  authDomain: "ENTER YOURS HERE",
  databaseURL: "ENTER YOURS HERE",
  projectId: "ENTER YOURS HERE",
  storageBucket: "ENTER YOURS HERE",
  messagingSenderId: "ENTER YOURS HERE"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")