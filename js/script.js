

//All the Event handlers 
document.addEventListener("DOMContentLoaded",function (event) {


	//Dropdown Menu function
	document.querySelector("#bar").addEventListener("click",function (event){
			
			if (document.querySelector("nav").style.display==="none") {
				getComputedStyle(document.querySelector("#logo"))
				document.querySelector("nav").style.top=getComputedStyle(document.querySelector("header")).height;

				document.querySelector("nav").style.display="block"
			}
			else{
				document.querySelector("nav").style.display="none"
			}
		});

});