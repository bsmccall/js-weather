"use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=e5e6cbbcfaa7cc31c184f9a40cf706be"

$.ajax ({
    url: url, 
    success: function (result) {
        console.log(result);
        console.log(result.name);
        
        // Display the location
        let displayCity = `Current Weather in ${result.name}`;
        $("#location").html(displayCity);
        
        // Display the Temperature
        let F = Math.round(result.main.temp * (9/5) -459.67);
        let displayTemp = `Temperature: ${F}&#176;F`;
        $("#temperature").html(displayTemp);
        
        // Display the Wind Speed
        let windSpeed = Math.round(result.wind.speed / .44704);
        let displayWind = `Wind: ${windSpeed} mph`;
        $("#wind").html(displayWind);
        
        // Display Sky Conditions
        let displaySky = `Sky Condition: ${result.weather[0].description}`;
        $("#sky").html(displaySky);
    }
})




