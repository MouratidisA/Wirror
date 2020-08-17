var gettingData = false;
var openWeatherMapKey = "";
var cityName = "Thessaloniki";

var weatherIcons = {
    "200": {
        "label": "thunderstorm with light rain",
        "icon": "wi-storm-showers"
    },
    "201": {
        "label": "thunderstorm with rain",
        "icon": "wi-storm-showers"
    },
    "202": {
        "label": "thunderstorm with heavy rain",
        "icon": "wi-storm-showers"
    },
    "210": {
        "label": "light thunderstorm",
        "icon": "wi-storm-showers"
    },
    "211": {
        "label": "thunderstorm",
        "icon": "wi-thunderstorm"
    },
    "212": {
        "label": "heavy thunderstorm",
        "icon": "wi-thunderstorm"
    },
    "221": {
        "label": "ragged thunderstorm",
        "icon": "wi-thunderstorm"
    },
    "230": {
        "label": "thunderstorm with light drizzle",
        "icon": "wi-storm-showers"
    },
    "231": {
        "label": "thunderstorm with drizzle",
        "icon": "wi-storm-showers"
    },
    "232": {
        "label": "thunderstorm with heavy drizzle",
        "icon": "wi-storm-showers"
    },
    "300": {
        "label": "light intensity drizzle",
        "icon": "wi-sprinkle"
    },
    "301": {
        "label": "drizzle",
        "icon": "wi-sprinkle"
    },
    "302": {
        "label": "heavy intensity drizzle",
        "icon": "wi-sprinkle"
    },
    "310": {
        "label": "light intensity drizzle rain",
        "icon": "wi-sprinkle"
    },
    "311": {
        "label": "drizzle rain",
        "icon": "wi-sprinkle"
    },
    "312": {
        "label": "heavy intensity drizzle rain",
        "icon": "wi-sprinkle"
    },
    "313": {
        "label": "shower rain and drizzle",
        "icon": "wi-sprinkle"
    },
    "314": {
        "label": "heavy shower rain and drizzle",
        "icon": "wi-sprinkle"
    },
    "321": {
        "label": "shower drizzle",
        "icon": "wi-sprinkle"
    },
    "500": {
        "label": "light rain",
        "icon": "wi-rain"
    },
    "501": {
        "label": "moderate rain",
        "icon": "wi-rain"
    },
    "502": {
        "label": "heavy intensity rain",
        "icon": "wi-rain"
    },
    "503": {
        "label": "very heavy rain",
        "icon": "wi-rain"
    },
    "504": {
        "label": "extreme rain",
        "icon": "wi-rain"
    },
    "511": {
        "label": "freezing rain",
        "icon": "wi-rain-mix"
    },
    "520": {
        "label": "light intensity shower rain",
        "icon": "wi-showers"
    },
    "521": {
        "label": "shower rain",
        "icon": "wi-showers"
    },
    "522": {
        "label": "heavy intensity shower rain",
        "icon": "wi-showers"
    },
    "531": {
        "label": "ragged shower rain",
        "icon": "wi-showers"
    },
    "600": {
        "label": "light snow",
        "icon": "wi-snow"
    },
    "601": {
        "label": "snow",
        "icon": "wi-snow"
    },
    "602": {
        "label": "heavy snow",
        "icon": "wi-snow"
    },
    "611": {
        "label": "sleet",
        "icon": "wi-sleet"
    },
    "612": {
        "label": "shower sleet",
        "icon": "wi-sleet"
    },
    "615": {
        "label": "light rain and snow",
        "icon": "wi-rain-mix"
    },
    "616": {
        "label": "rain and snow",
        "icon": "wi-rain-mix"
    },
    "620": {
        "label": "light shower snow",
        "icon": "wi-rain-mix"
    },
    "621": {
        "label": "shower snow",
        "icon": "wi-rain-mix"
    },
    "622": {
        "label": "heavy shower snow",
        "icon": "wi-rain-mix"
    },
    "701": {
        "label": "mist",
        "icon": "wi-sprinkle"
    },
    "711": {
        "label": "smoke",
        "icon": "wi-smoke"
    },
    "721": {
        "label": "haze",
        "icon": "wi-day-haze"
    },
    "731": {
        "label": "sand, dust whirls",
        "icon": "wi-cloudy-gusts"
    },
    "741": {
        "label": "fog",
        "icon": "wi-fog"
    },
    "751": {
        "label": "sand",
        "icon": "wi-cloudy-gusts"
    },
    "761": {
        "label": "dust",
        "icon": "wi-dust"
    },
    "762": {
        "label": "volcanic ash",
        "icon": "wi-smog"
    },
    "771": {
        "label": "squalls",
        "icon": "wi-windy"
    },
    "781": {
        "label": "tornado",
        "icon": "wi-tornado"
    },
    "800": {
        "label": "clear sky",
        "icon": "wi-day-sunny"
    },
    "801": {
        "label": "few clouds",
        "icon": "wi-cloudy"
    },
    "802": {
        "label": "scattered clouds",
        "icon": "wi-cloudy"
    },
    "803": {
        "label": "broken clouds",
        "icon": "wi-cloudy"
    },
    "804": {
        "label": "overcast clouds",
        "icon": "wi-cloudy"
    },
    "900": {
        "label": "tornado",
        "icon": "wi-tornado"
    },
    "901": {
        "label": "tropical storm",
        "icon": "wi-hurricane"
    },
    "902": {
        "label": "hurricane",
        "icon": "wi-hurricane"
    },
    "903": {
        "label": "cold",
        "icon": "wi-snowflake-cold"
    },
    "904": {
        "label": "hot",
        "icon": "wi-hot"
    },
    "905": {
        "label": "windy",
        "icon": "wi-windy"
    },
    "906": {
        "label": "hail",
        "icon": "wi-hail"
    },
    "951": {
        "label": "calm",
        "icon": "wi-day-sunny"
    },
    "952": {
        "label": "light breeze",
        "icon": "wi-cloudy-gusts"
    },
    "953": {
        "label": "gentle breeze",
        "icon": "wi-cloudy-gusts"
    },
    "954": {
        "label": "moderate breeze",
        "icon": "wi-cloudy-gusts"
    },
    "955": {
        "label": "fresh breeze",
        "icon": "wi-cloudy-gusts"
    },
    "956": {
        "label": "strong breeze",
        "icon": "wi-cloudy-gusts"
    },
    "957": {
        "label": "high wind, near gale",
        "icon": "wi-cloudy-gusts"
    },
    "958": {
        "label": "gale",
        "icon": "wi-cloudy-gusts"
    },
    "959": {
        "label": "severe gale",
        "icon": "wi-cloudy-gusts"
    },
    "960": {
        "label": "storm",
        "icon": "wi-thunderstorm"
    },
    "961": {
        "label": "violent storm",
        "icon": "wi-thunderstorm"
    },
    "962": {
        "label": "hurricane",
        "icon": "wi-cloudy-gusts"
    }
};


// Make the weather request
var getWeather = function () {
    gettingData = true;
    var requestString = "https://api.openweathermap.org/data/2.5/weather?" +
        "q=" + cityName +
        "&appid=" + openWeatherMapKey;
    request = new XMLHttpRequest();
    request.onload = proccessResults;
    request.open("get", requestString, true);
    request.send();
};

var getIcon = function (resp) {
    var prefix = 'wi ';
    var code = resp.weather[0].id;
    var icon = weatherIcons[code].icon;
    icon = prefix + icon;
    return icon;
};

var getWindDirection = function (degree) {
    if (degree > 337.5) return 'Northerly';
    if (degree > 292.5) return 'North Westerly';
    if (degree > 247.5) return 'Westerly';
    if (degree > 202.5) return 'South Westerly';
    if (degree > 157.5) return 'Southerly';
    if (degree > 122.5) return 'South Easterly';
    if (degree > 67.5)  return 'Easterly';
    if (degree > 22.5)  return 'North Easterly';    
    return 'Northerly';
};

// Take the JSON results and proccess them
var proccessResults = function () {

    var res = JSON.parse(this.responseText);
    var temperature = Math.round((res.main.temp - 273.15) * 10) / 10;
    var humidity = res.main.humidity;
    var description = res.weather[0].description;
    var cityName = res.name;
    var windDirection = getWindDirection(res.wind.deg);

    document.getElementById("wd").innerHTML +=
        // '<div>' +
        '<h1><i class="' + getIcon(res) + '" style="font-size: 100px;"></i></h1>' +
        '<h3>' + temperature + '<i class="wi wi-celsius"></i>' +'</h1>' +
        '<h3>' + humidity + '<i class="wi wi-humidity"></i>' +'</h1>' +
        '<h4>' + cityName + '</h4>' ;
        // +
        // '<p>' +  description + '</p>' +
        // '<p>'+  windDirection+ '  <i class="wi wi-wind from-'+res.wind.deg+'-deg"></i></p>' +
        // '</div>';

};

getWeather();