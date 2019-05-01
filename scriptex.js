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
  y.innerHTML = "Device-orientation: Landscape";

} 

else if (orientation === "landscape-secondary") {
  y.innerHTML ="Device-orientation: Landscape - upside down";
} 


else if (orientation === "portrait-primary") {
  y.innerHTML = ("Device-orientation: Portrait");
} 

else if (orientation === "portrait-secondary") {
  y.innerHTML = ("Device-orientation: Portrait - upside down");
} 


else if (orientation !== "landscape-primary" || "landscape-secondary" || "portrait-secondary" || "portrait-primary") {
  y.innerHTML = "The orientation API isn't supported in this browser"; 
}

}


