
var firebaseConfig = {
      apiKey: "AIzaSyDuEdTXnHO4ML6MnQjlaVQBfiNMhuruhto",
      authDomain: "kwitter-project-94271.firebaseapp.com",
      projectId: "kwitter-project-94271",
      storageBucket: "kwitter-project-94271.appspot.com",
      messagingSenderId: "638842396872",
      appId: "1:638842396872:web:2604bf533fb18db87305fd",
      measurementId: "G-WF9F3Y8CQC"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addUser()
{
      username=document.getElementById("user_name").value 
    firebase.database().ref("/").child(username).update({
        purpose:"adding user"
    }) 
}
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
