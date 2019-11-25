var apikey = "afb33145b7eb38ce9a6dd967e653cf4e";
var city = $("#cityInput").val();
var countryCode = "";
var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&api_key=" + apikey

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(result) {
    console.log("city results = " + result);
  });
