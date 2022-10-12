
var firebaseConfig = {
      apiKey: "AIzaSyC1qi0jSjDZnlNtcM46axl8brqbM6Pc-l0",
      authDomain: "kwitter-c435e.firebaseapp.com",
      databaseURL: "https://kwitter-c435e-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-c435e",
      storageBucket: "kwitter-c435e.appspot.com",
      messagingSenderId: "810839744464",
      appId: "1:810839744464:web:d15a68c037e86a7c24e3d5"
    };

    firebase.initializeApp(firebaseConfig)

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
