

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        } else {
        x.className = "topnav";
        }
}   



 
var CarpentrySummary = document.getElementById("CarpentryByNadUpdate");
var SpotifySummary = document.getElementById("SpotifyUpdate");
var AutomatedSummary = document.getElementById("AutomatedUpdate");


 function DisplayCarpentrySummary(){
	CarpentrySummary.style = "display:block";
 }
 
 function HideCarpentrySummary(){
	 CarpentrySummary.style = "display:none";
 }
 
 
 function DisplaySpotifySummary(){
	SpotifySummary.style = "display:block";
 }
 
 function HideSpotifySummary(){
	 SpotifySummary.style = "display:none";
 }
 
 function DisplayAutomatedSummary(){
	AutomatedSummary.style = "display:block";
 }
 
 function HideAutomatedSummary(){
	 AutomatedSummary.style = "display:none";
 }
 