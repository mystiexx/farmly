import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCLf43uX3BZu_m9D82t43yrWGmnboziF-c",
    authDomain: "farmlyape.firebaseapp.com",
    projectId: "farmlyape",
    storageBucket: "farmlyape.appspot.com",
    messagingSenderId: "716840379595",
    appId: "1:716840379595:web:d47470f4f8ed1e8b07a74e",
    measurementId: "G-LZC4079YH8"
  };

firebase.initializeApp(firebaseConfig);
 export const db =  firebase.firestore()
  
 export default firebase