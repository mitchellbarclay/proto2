var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}







function showPosition(position) {

	var one = document.getElementById("r1c1");
	var two = document.getElementById("r1c2");
	var three = document.getElementById("r1c3");
	var four = document.getElementById("r1c4");
	var five = document.getElementById("r2c1");
	var six = document.getElementById("r2c2");
	var seven = document.getElementById("r2c3");
	var eight = document.getElementById("r2c4");
	var nine = document.getElementById("r3c1");
	var ten = document.getElementById("r3c2");
	var eleven = document.getElementById("r3c3");
	var twelve = document.getElementById("r3c4");
	var thirteen = document.getElementById("r4c1");
	var fourteen = document.getElementById("r4c2");
	var fifteen = document.getElementById("r4c3");
	var sixteen = document.getElementById("r4c4");
	var marker = document.getElementById("marker");






  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;

   xMax = 969;
   xMin = 220;

   yMax = 174.778;
   yMin = 174.774;

   xMax2 = 966;
   xMin2 = 220;

   yMax2 = -41.297
   yMin2 = -41.294

  percent = (position.coords.longitude - yMin) / (yMax - yMin);
  marker.style.marginLeft = percent * (xMax - xMin) + xMin + "px";

  percent2 = (position.coords.latitude - yMin2) / (yMax2 - yMin2);
  marker.style.marginTop = percent2 * (xMax2 - xMin2) + xMin2 + "px";







 


    if (position.coords.longitude < 174.774 || position.coords.longitude > 174.778 || position.coords.latitude < -41.297 || position.coords.latitude > -41.294){
    	x.innerHTML = "out of range"
    	marker.style.opacity = "0";
    }
    if (position.coords.longitude > 174.774 || position.coords.longitude < 174.778 || position.coords.latitude > -41.297 || position.coords.latitude < -41.294){
    	
    	marker.style.opacity = "1";
    }




    if (position.coords.latitude <= -41.294 && position.coords.latitude >= -41.29475){

	 if (position.coords.longitude <= 174.775 && position.coords.longitude >= 174.774) {
		one.style.opacity = "1";
	}
	 if (position.coords.longitude <= 174.776 && position.coords.longitude >= 174.775) {
		two.style.opacity = "1";
	}

	 if (position.coords.longitude <= 174.777 && position.coords.longitude >= 174.776) {
		three.style.opacity = "1";
	}

	 if (position.coords.longitude <= 174.778 && position.coords.longitude >= 174.777) {
		four.style.opacity = "1";
	}

	}



	if (position.coords.latitude <= -41.29475 && position.coords.latitude >= -41.2955){

	 if (position.coords.longitude <= 174.775 && position.coords.longitude >= 174.774) {
		five.style.opacity = "1";
	}
	 if (position.coords.longitude <= 174.776 && position.coords.longitude >= 174.775) {
		six.style.opacity = "1";
	}

	 if (position.coords.longitude <= 174.777 && position.coords.longitude >= 174.776) {
		seven.style.opacity = "1";
	}

	 if (position.coords.longitude <= 174.778 && position.coords.longitude >= 174.777) {
		eight.style.opacity = "1";
	}

	}

	if (position.coords.latitude <= -41.2955 && position.coords.latitude >= -41.29625){

	 if (position.coords.longitude <= 174.775 && position.coords.longitude >= 174.774) {
		nine.style.opacity = "1";
	}
	 if (position.coords.longitude <= 174.776 && position.coords.longitude >= 174.775) {
		ten.style.opacity = "1";
	}

	 if (position.coords.longitude <= 174.777 && position.coords.longitude >= 174.776) {
		eleven.style.opacity = "1";
	}

	 if (position.coords.longitude <= 174.778 && position.coords.longitude >= 174.777) {
		twelve.style.opacity = "1";
	}

	}

	if (position.coords.latitude <= -41.29625 && position.coords.latitude >= -41.297){

	 if (position.coords.longitude <= 174.775 && position.coords.longitude >= 174.774) {
		thirteen.style.opacity = "1";
	}
	 if (position.coords.longitude <= 174.776 && position.coords.longitude >= 174.775) {
		fourteen.style.opacity = "1";
	}

	 if (position.coords.longitude <= 174.777 && position.coords.longitude >= 174.776) {
		fifteen.style.opacity = "1";
	}

	 if (position.coords.longitude <= 174.778 && position.coords.longitude >= 174.777) {
		sixteen.style.opacity = "1";
	}

	}




}

