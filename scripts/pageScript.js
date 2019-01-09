function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function indexOnLoad(){
	var headingText = 'I am Kshitij Saxena';
	const elemnt = document.getElementById('heading');
	
	recursiveTyper(headingText, elemnt);
}


function recursiveTyper(txt, elemnt){
	
	if(txt.length > 0){
		elemnt.innerHTML += txt.charAt(0);
		txt = txt.substring(1,txt.length);
		setTimeout(recursiveTyper(txt,elemnt),5000);
	}	
}

// function recursiveTyper(txt, elemnt){
	// var i = 0;
	
	// if(i < txt.length){
		// elemnt.innerHTML += txt.charAt(i);
		// i++;
		// setTimeout(recursiveTyper(txt,elemnt),50);
	// }	
// }
