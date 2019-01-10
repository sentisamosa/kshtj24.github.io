function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

var headingText = 'I am Kshitij Saxena';
var i = 0;
const elemnt = document.getElementById('heading');

function indexOnLoad(){	
	setInterval(recursiveTyper,100);
}


function recursiveTyper(){	
	if(i < headingText.length){
		elemnt.innerHTML += headingText.charAt(i);
		i++;
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
