var config = {
	apiKey: "AIzaSyDYAi-g6LUhoBemBkJbC00paYaBI07D2YA",
	authDomain: "mywebsite-65acf.firebaseapp.com",
	databaseURL: "https://mywebsite-65acf.firebaseio.com",
	projectId: "mywebsite-65acf",
	storageBucket: "mywebsite-65acf.appspot.com",
	messagingSenderId: "799508371201"
};
firebase.initializeApp(config);

function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

var headingText = 'I am Kshitij Saxena';
var descriptionText = 'And I am a Software Engineer';
var i = 0;
var j = 0;

const elemnt = document.getElementById('heading');
const elemnt1 = document.getElementById('description');

function indexOnLoad(){	
	setInterval(headTyper,100);
}


function headTyper(){	
	if(i < headingText.length){
		elemnt.innerHTML += headingText.charAt(i);
		i++;
	}
	else{
		clearInterval();
		setInterval(pTyper,500);
	}
}



function pTyper(){	
	if(j < descriptionText.length){
		elemnt1.innerHTML += descriptionText.charAt(j);
		j++;
	}
	else
		clearInterval();
}

// function recursiveTyper(txt, elemnt){
	// var i = 0;
	
	// if(i < txt.length){
		// elemnt.innerHTML += txt.charAt(i);
		// i++;
		// setTimeout(recursiveTyper(txt,elemnt),50);
	// }	
// }
