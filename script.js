var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

var today = mm + '/' + dd + '/' + yyyy;

$("#citySearch").on("click", function (event) {

    var apikey = "afb33145b7eb38ce9a6dd967e653cf4e";
    var city = $("#cityInput").val();
    var queryURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apikey;
    var queryURL2 =
        "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&cnt=40&appid=" + apikey;

    event.preventDefault();
    console.log(city)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var $cityTitle = $("<h3>");
        $cityTitle.attr("style", "padding-bottom: 15px; font-weight: bold");
        var weatherIcon = $("<img>");
        weatherIcon.attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
        $cityTitle.html(response.name + " " + "(" + today + ")");
        $cityTitle.append(weatherIcon);

        var cityStatsEl = $(".cityStats");
        cityStatsEl.html($cityTitle);

        var $tempTitle = $("<h5>");
        $tempTitle.html("Temperature: " + response.main.temp + " &deg;F");
        cityStatsEl.append($tempTitle);

        var $humidityTitle = $("<h5>");
        $humidityTitle.html("Humidity: " + response.main.humidity + "%");
        cityStatsEl.append($humidityTitle);

        var $windTitle = $("<h5>");
        $windTitle.html("Wind Speed: " + response.wind.speed + " MPH");
        cityStatsEl.append($windTitle);

        // var $uvTitle = $("<h5>");
        // $uvTitle.html("UV Index: " + response.)

        searchedEl = $(".searched");

        localStorage.setItem("citySearched", city);
        setHistory();

        function setHistory() {
            var searchedInput = localStorage.getItem("citySearched");
            var $historyRow = $("<div>");
            $historyRow.attr("style", "padding: 5px; border: solid 1px lightgray; border-radius: 5px; background-color: white;");
            $historyRow.html(searchedInput);
            searchedEl.append($historyRow);
        }

    });

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response2) {
        console.log(response2);

        var day1El = $(".day1");
        var day2El = $(".day2");
        var day3El = $(".day3");
        var day4El = $(".day4");
        var day5El = $(".day5");
        var dayEls = [day1El, day2El, day3El, day4El, day5El];

        for (var j=0; j<dayEls.length; j++) {
            var $dayDiv = $("<div>");
            var $date = $("<p>");
            $date.html(mm + '/' + (dd ++ + 1) + '/' + yyyy);
            $date.attr("style", "text-size: 24px; font-weight: bold");
            $dayDiv.append($date);
            var $dayTemp = $("<p>");
            $dayTemp.html("Temp: " + response2.list[j+8].main.temp + " &deg;F");
            $dayDiv.append($dayTemp);
            var $dayHum = $("<p>");
            $dayHum.html("Humidity: " + response2.list[j+8].main.humidity + "%");
            $dayDiv.append($dayHum);
            var $weatherIcon = $("<img>");
            $weatherIcon.attr("src", "http://openweathermap.org/img/w/" + response2.list[j+8].weather[0].icon + ".png");
            $dayDiv.append($weatherIcon);
            dayEls[j].html($dayDiv);

        }

    });


});