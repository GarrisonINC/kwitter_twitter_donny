var firebaseConfig = {
    apiKey: "AIzaSyDVm-hzlVHKmwdrncrFSYwEJ-EWYv7bggc",
    authDomain: "kwitter-kitty-e6fee.firebaseapp.com",
    databaseURL: "https://kwitter-kitty-e6fee-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-kitty-e6fee",
    storageBucket: "kwitter-kitty-e6fee.appspot.com",
    messagingSenderId: "43439815399",
    appId: "1:43439815399:web:5f43705eb3f87808208042",
    measurementId: "G-J9L3KY0DDZ"
  }

firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";

    console.log(user_name)
}