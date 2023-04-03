
//PASTE YOUR FIREBASE LINK HERE

var firebaseConfig = {
    apiKey: "AIzaSyDl99OcPWK29Nc1gQ2S1Op34N0ahLbbkbc",
    authDomain: "kwitter12345-b3aa8.firebaseapp.com",
    databaseURL: "https://kwitter12345-b3aa8-default-rtdb.firebaseio.com",
    projectId: "kwitter12345-b3aa8",
    storageBucket: "kwitter12345-b3aa8.appspot.com",
    messagingSenderId: "604084736260",
    appId: "1:604084736260:web:2a66f38c19add090974051"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   function addUser()
   {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   }