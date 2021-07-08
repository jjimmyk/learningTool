

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC72q6mL6d52YuTOPsRx5KDSRdrfiNotVk",
    authDomain: "learningtool-54b95.firebaseapp.com",
    projectId: "learningtool-54b95",
    storageBucket: "learningtool-54b95.appspot.com",
    messagingSenderId: "844271141498",
    appId: "1:844271141498:web:e3f8dee7debd59c6d8f1c3",
    measurementId: "G-H92HYQ7EVH"
  };
  // Initialize Firebase
  firebase.initializeApp();
  firebase.analytics();


let dbLocation = firebase.database().ref('LearningTool1');

dbLocation.set(myFlashcards);




//firebase.database().ref;

//let cardLocation = firebase.database().ref("LearningTool1");

//cardLocation.set(myFlashcards);

//firebase.database().ref('LearningTool1').set(myFlashcards);



