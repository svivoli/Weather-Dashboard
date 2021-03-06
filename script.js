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

        console.log(response)

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

        searchedEl = $(".searched");

        localStorage.setItem("citySearched", city);
        setHistory();

        function setHistory() {
            var searchedInput = localStorage.getItem("citySearched");
            var $historyRow = $("<div>");
            $historyRow.attr("style", "padding: 5px; border: solid 1px lightgray; border-radius: 5px; background-color: white;");
            $historyRow.html(searchedInput);
            searchedEl.prepend($historyRow);
        }

    });

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response2) {

        $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");
        for (var i = 0; i < response2.list.length; i++) {
          if (response2.list[i].dt_txt.indexOf("15:00:00") !== -1) {
            var col = $("<div>").addClass("col-md-2");
            col.attr("style", "margin: 10px")
            var card = $("<div>").addClass("text-white forecastDay");
            var body = $("<div>").addClass("card-body p-2");
            var title = $("<h5>").addClass("card-title").text(new Date(response2.list[i].dt_txt).toLocaleDateString());
            var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response2.list[i].weather[0].icon + ".png");
            var p1 = $("<p>").addClass("card-text").text("Temp: " + response2.list[i].main.temp_max + " °F");
            p1.attr("style", "font-size: 14px")
            var p2 = $("<p>").addClass("card-text").text("Humidity: " + response2.list[i].main.humidity + "%");
            p2.attr("style", "font-size: 14px")
            col.append(card.append(body.append(title, img, p1, p2)));
            $("#forecast .row").append(col);
          }
        }

    });

});