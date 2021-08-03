import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCLf43uX3BZu_m9D82t43yrWGmnboziF-c",
    authDomain: "farmlyape.firebaseapp.com",
    projectId: "farmlyape",
    storageBucket: "farmlyape.appspot.com",
    messagingSenderId: "716840379595",
    appId: "1:716840379595:web:d47470f4f8ed1e8b07a74e",
    measurementId: "G-LZC4079YH8"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;