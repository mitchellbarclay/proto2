var x = document.getElementById("demo");
var y = document.getElementById("demo2");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;

  gyro();
  

}

function gyro(){
	var orientation = screen.orientation.type;

	if (orientation === "landscape-primary") {
  y.innerHTML = "Landscape";

} 

else if (orientation === "landscape-secondary") {
  y.innerHTML ="Landscape";
} 


else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
  y.innerHTML = ("Portrait");
} 


else if (orientation === undefined) {
  console.log("The orientation API isn't supported in this browser :("); 
}

}


