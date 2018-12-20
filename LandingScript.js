function setTabs(element){
				//var clickedDiv = this.target;
				//alert(element.id);
				
				document.getElementById("aOne").classList = "";
				document.getElementById("aTwo").classList = "";
				document.getElementById("aThree").classList = "";
				document.getElementById("aFour").classList = "";
				
				switch(element.id){
					case "aOne":
						document.getElementById("one").style.visibility = "visible";
						document.getElementById("two").style.visibility = "hidden";
						document.getElementById("three").style.visibility = "hidden";
						document.getElementById("four").style.visibility = "hidden";
						break;
						
					case "aTwo":
						document.getElementById("one").style.visibility = "hidden";
						document.getElementById("two").style.visibility = "visible";
						document.getElementById("three").style.visibility = "hidden";
						document.getElementById("four").style.visibility = "hidden";
						break;
						
					case "aThree":
						document.getElementById("one").style.visibility = "hidden";
						document.getElementById("two").style.visibility = "hidden";
						document.getElementById("three").style.visibility = "visible";
						document.getElementById("four").style.visibility = "hidden";
						break;
						
					case "aFour":
						document.getElementById("one").style.visibility = "hidden";
						document.getElementById("two").style.visibility = "hidden";
						document.getElementById("three").style.visibility = "hidden";
						document.getElementById("four").style.visibility = "visible";
						break;
				}
				
				document.getElementById(element.id).classList.add("active");
				
				return true;
			}