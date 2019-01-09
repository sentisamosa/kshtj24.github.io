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
const msgRef = dbRef.child('messages');
const sendButton = document.getElementById("send");

sendButton.addEventListener("click", sendButtonClicked);


function sendButtonClicked(e){
	const sendMessageInputUI = document.getElementsByClassName("user-input");
	
	let sendData = {};
	
	for(let i = 0, len = sendMessageInputUI.length; i < len; i++)
	{
		let key = sendMessageInputUI[i].getAttribute('data-key');
		let value = sendMessageInputUI[i].value;
		
		sendData[key] = value;
	}
	
	msgRef.push(sendData, function(error){
		if (error)
			alert("I couldn't receive your message! Please try again.");
		else{
			if(confirm('I have received your message successfully. Thank you!'))
				window.location.reload();			
		}
	});
}