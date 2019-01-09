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
const msgRef = dbRef.child('messages');
const view = document.getElementById('msgvw');
const messageBox = document.getElementById('messagebox');

// view.addEventListener("onload",onPageLoad);


msgRef.on("child_added",snap => {
	
	let message = snap.val();
	
	let $li = document.createElement("li");
	$li.className = "w3-card w3-padding w3-margin";
	$li.innerHTML = message.name + "<br/>" + message.country + "<br/>" + message.email + "<br/>" + message.message;
	messageBox.append($li);
});