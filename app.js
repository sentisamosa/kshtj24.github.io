// Initialize Firebase
var config = {
	apiKey: "AIzaSyDYAi-g6LUhoBemBkJbC00paYaBI07D2YA",
	authDomain: "mywebsite-65acf.firebaseapp.com",
	databaseURL: "https://mywebsite-65acf.firebaseio.com",
	projectId: "mywebsite-65acf",
	storageBucket: "mywebsite-65acf.appspot.com",
	messagingSenderId: "799508371201"
};
firebase.initializeApp(config);


const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');

const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {
   let user = snap.val();
   let $li = document.createElement("li");
   $li.innerHTML = user.name;
   $li.setAttribute("child-key", snap.key); 
   $li.addEventListener("click", userClicked)
   userListUI.append($li);
});

function userClicked(e) {

  var userID = e.target.getAttribute("child-key");

  const userRef = dbRef.child('users/' + userID);

  const userDetailUI = document.getElementById("userDetail");
  userDetailUI.innerHTML = ""

  userRef.on("child_added", snap => {
    var $p = document.createElement("p");
    $p.innerHTML = snap.key + " - " + snap.val()
    userDetailUI.append($p);
  });

}