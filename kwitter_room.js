
var firebaseConfig = {
      apiKey: "AIzaSyDo-7meFXYx0-Fi2HmlFq01CMdhnKidJm8",
      authDomain: "kwitter-2fbd9.firebaseapp.com",
      databaseURL: "https://kwitter-2fbd9-default-rtdb.firebaseio.com",
      projectId: "kwitter-2fbd9",
      storageBucket: "kwitter-2fbd9.appspot.com",
      messagingSenderId: "515926548092",
      appId: "1:515926548092:web:b6c70ffed764e1c70a33f9"
    };
    firebase. initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
