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