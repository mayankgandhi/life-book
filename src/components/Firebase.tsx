import firebase from 'firebase';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCqMQ8VKyOam_XRbf6-G3b0bzXGDuooOCk",
    authDomain: "lifebook-460fb.firebaseapp.com",
    projectId: "lifebook-460fb",
    storageBucket: "lifebook-460fb.appspot.com",
    messagingSenderId: "190900733347",
    appId: "1:190900733347:web:8bfa6eec8e5b4aa6cb4616",
    measurementId: "G-BEY12J4ZW8"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
