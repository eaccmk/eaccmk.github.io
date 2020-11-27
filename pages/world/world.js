//Actual ref : https://github.com/james-priest/100-days-of-code-log-r2/blob/master/CH14-Geolocation.md
//Further ref : https://codepen.io/qkevinto/pen/EVGrGq?editors=0110

$(document).ready(function() {
    getLocation();
});

function supportsGeolocation() {
    return 'geolocation' in navigator;
}

function showMessage(message) {
    $('#message').html(message);
}

//function showCityName(getmoredetails) {
  //  $('#cityName').html(cityName);
//}

function getLocation() {
    if (supportsGeolocation()) {
	var options = {
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 20000
		};
        navigator.geolocation.getCurrentPosition(showPosition,showError, options);
	} else {
        showMessage("Geolocation isn't supported by your browser");
	}
}

function showPosition(position) {
    var datetime = new Date(position.timestamp).toLocaleString();
    showMessage('Latitude: ' + position.coords.latitude + '<br>' +
        'Longitude: ' + position.coords.longitude + '<br>' +
        'Timestamp: ' + datetime + '<br>');
	
	getmoredetails (position.coords.latitude,position.coords.longitude);
	setTimeout(function(){
		$('#betweenCities').html("Searching.... other side of your world, won't take too long.... " );
		$("#betweenCities").css("color", "white").slideUp(2000).slideDown(2000);
	}, 2000);
	getmoredetails2(position.coords.latitude,position.coords.longitude);

}


function getmoredetails (lat,lon) {
var sourceURL="https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="+lat+"&lon="+lon;
//function getmoredetails (position) {
//var sourceURL="https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="+position.coords.latitude+"&lon="+position.coords.longitude;

$.ajax({
    url: sourceURL,
    type: 'GET',
    success: function (resp) {
	if (resp.hasOwnProperty("error")){
		console.log("Current side has no city error : "+ resp.error);
		$('#cityName').html("hmm looks wet this side .. About <b>71 percent of the Earth's surface has water 🌊" );
		$("#cityName").css("color", "blue");
		$("#betweenCities").css("color", "black")
	} else if (resp.address.hasOwnProperty("city")) {
		$('#cityName').html("Glad that you are in: "+resp.address.city + " 📍");
		$("#cityName").css("color", "white");
		$("#betweenCities").css("color", "black")
	} else {
		$('#cityName').html(" 📍 Glad that you are in: "+ resp.display_name + "  (Country Name) : <b> " + resp.address.country  );
		$("#cityName").css("color", "white");
		$("#betweenCities").css("color", "black")
	}	 
	},
    error: function(e) {
        	alert('We are facing, error while fetching your current address : '+e);
		$("#cityName").css("color", "red");
		$('#otherCityName').html(" error while fetching current address ❗");
	}
	});
}

function getmoredetails2 (lat,lon) {
var reverseURL="https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="+lon+"&lon="+lat;

$.ajax({
    url: reverseURL,
    type: 'GET',
    success: function (resp) {

	if (resp.hasOwnProperty("error")){
		console.log("Other side has no city error : "+ resp.error)
		$('#otherCityName').html("hmm looks wet that side .. About <b>71 percent of the Earth's surface has water 🌊 " );
		$("#otherCityName").css("color", "blue");
		$("#betweenCities").css("color", "black")
	
	} else if (resp.address.hasOwnProperty("city")) {
		$('#otherCityName').html(" 📍 So other side of the Place is: "+resp.address.city + " 📍");
		$("#otherCityName").css("color", "white");
		$("#betweenCities").css("color", "black")
	} else {
		$('#otherCityName').html(" 📍 So other side of the Place is: "+ resp.display_name + "  (Country Name) : <b> " + resp.address.country);
		$("#otherCityName").css("color", "white");
		$("#betweenCities").css("color", "black");
	}

	},
    error: function(e) {
		alert ('We are facing, error while fetching your current address');
        	console.error('We are facing, error while fetching your current address : '+ e);
		$('#otherCityName').html(" error while fetching opposit address ❗");
		$("#otherCityName").css("color", "red");
	}
	});

}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            showMessage("User denied Geolocation access request. 🚫 ");
            break;
        case error.POSITION_UNAVAILABLE:
            showMessage("Location Information unavailable. Are you connected to Internet 🤔  ");
            break;
        case error.TIMEOUT:
            showMessage("Get user location request timed out.");
            break;
        case error.UNKNOWN_ERROR:
            showMessage("An unknown error occurred.");
            break;
	}
}
