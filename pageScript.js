$(function () {
    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }
    };
 $('#cmd').click(function () {
        var doc = new jsPDF();
        doc.fromHTML(
            $('#target').html(), 15, 15, 
            { 'width': 170, 'elementHandlers': specialElementHandlers }, 
            function(){ doc.save('sample-file.pdf'); }
        );

    });  
});


function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}


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