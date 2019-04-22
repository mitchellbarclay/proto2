var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

	var one = document.getElementById("col1");
	var two = document.getElementById("col2");
	var three = document.getElementById("col3");
	var four = document.getElementById("col4");
	var five = document.getElementById("col5");
	var six = document.getElementById("col6");
	var seven = document.getElementById("col7");
	var eight = document.getElementById("col8");
	var nine = document.getElementById("col9");
	var ten = document.getElementById("col10");
	var eleven = document.getElementById("col11");
	var twelve = document.getElementById("col12");
	var thirteen = document.getElementById("col13");
	var fourteen = document.getElementById("col14");
	var fifteen = document.getElementById("col15");
	var sixteen = document.getElementById("col16");
	var seventeen = document.getElementById("col17");
	var eighteen = document.getElementById("col18");
	var nineteen = document.getElementById("col19");
	var twenty = document.getElementById("col20");
	var twentyone = document.getElementById("col21");
	var twentytwo = document.getElementById("col22");
	var twentythree = document.getElementById("col23");
	var twentyfour = document.getElementById("col24");
	var twentyfive = document.getElementById("col25");
	var twentysix = document.getElementById("col26");
	var twentyseven = document.getElementById("col27");
	var twentyeight = document.getElementById("col28");
	var twentynine = document.getElementById("col29");
	var thirty = document.getElementById("col30");
	var thirtyone = document.getElementById("col31");
	var thirtytwo = document.getElementById("col32");
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;

 //  if (position.coords.longitude == 1 && position.coords.latitude == 1) {
	// 	one.style.background = "#000";
	// }
	//  if (position.coords.longitude == 2 && position.coords.latitude == 1) {
	// 	two.style.background = "#000";
	// }

	//  if (position.coords.longitude == 3 && position.coords.latitude == 1) {
	// 	three.style.background = "#000";
	// }

	//  if (position.coords.longitude == 4 && position.coords.latitude == 1) {
	// 	four.style.background = "#000";
	// }

	//  if (position.coords.longitude == 5 && position.coords.latitude == 1) {
	// 	five.style.background = "#000";
	// }

	//  if (position.coords.longitude == 6 && position.coords.latitude == 1) {
	// 	six.style.background = "#000";
	// }

	//  if (position.coords.longitude == 7 && position.coords.latitude == 1) {
	// 	seven.style.background = "#000";
	// }

	//  if (position.coords.longitude == 8 && position.coords.latitude == 1) {
	// 	eight.style.background = "#000";
	// }

	if (position.coords.latitude == 1){

		  if (position.coords.longitude == 1) {
		one.style.background = "#000";
	}
	 if (position.coords.longitude == 2) {
		two.style.background = "#000";
	}

	 if (position.coords.longitude == 3) {
		three.style.background = "#000";
	}

	 if (position.coords.longitude == 4) {
		four.style.background = "#000";
	}

	 if (position.coords.longitude == 5) {
		five.style.background = "#000";
	}

	 if (position.coords.longitude == 6) {
		six.style.background = "#000";
	}

	 if (position.coords.longitude == 7) {
		seven.style.background = "#000";
	}

	 if (position.coords.longitude == 8) {
		eight.style.background = "#000";
	}

	}
	else if (position.coords.latitude == 2){

	 if (position.coords.longitude == 1) {
		nine.style.background = "#000";
	}
	 if (position.coords.longitude == 2) {
		ten.style.background = "#000";
	}

	 if (position.coords.longitude == 3) {
		eleven.style.background = "#000";
	}

	 if (position.coords.longitude == 4) {
		twelve.style.background = "#000";
	}

	 if (position.coords.longitude == 5) {
		thirteen.style.background = "#000";
	}

	 if (position.coords.longitude == 6) {
		fourteen.style.background = "#000";
	}

	 if (position.coords.longitude == 7) {
		fifteen.style.background = "#000";
	}

	 if (position.coords.longitude == 8) {
		sixteen.style.background = "#000";
	}

	}

	else if (position.coords.latitude == 3){

	 if (position.coords.longitude == 1) {
		seventeen.style.background = "#000";
	}
	 if (position.coords.longitude == 2) {
		eighteen.style.background = "#000";
	}

	 if (position.coords.longitude == 3) {
		nineteen.style.background = "#000";
	}

	 if (position.coords.longitude == 4) {
		twenty.style.background = "#000";
	}

	 if (position.coords.longitude == 5) {
		twentyone.style.background = "#000";
	}

	 if (position.coords.longitude == 6) {
		twentytwo.style.background = "#000";
	}

	 if (position.coords.longitude == 7) {
		twentythree.style.background = "#000";
	}

	 if (position.coords.longitude == 8) {
		twentyfour.style.background = "#000";
	}

	}

	else if (position.coords.latitude == 4){

	 if (position.coords.longitude == 1) {
		twentyfive.style.background = "#000";
	}
	 if (position.coords.longitude == 2) {
		twentysix.style.background = "#000";
	}

	 if (position.coords.longitude == 3) {
		twentyseven.style.background = "#000";
	}

	 if (position.coords.longitude == 4) {
		twentyeight.style.background = "#000";
	}

	 if (position.coords.longitude == 5) {
		twentynine.style.background = "#000";
	}

	 if (position.coords.longitude == 6) {
		thirty.style.background = "#000";
	}

	 if (position.coords.longitude == 7) {
		thirtyone.style.background = "#000";
	}

	 if (position.coords.longitude == 8) {
		thirtytwo.style.background = "#000";
	}

	}




}

