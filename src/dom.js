import { convertTime, convertTime2 } from "./helpers";
import tempSVG from './images/temp.svg';
import humiditySVG from './images/humidity.svg';
import pressureSVG from './images/air-pressure.svg';
import sunriseSVG from './images/sunrise.svg';
import sunsetSVG from './images/sunset.svg';
import windSVG from './images/wind.svg';
import clearSkyDay from './images/clearSkyDay.png';
import clearSkyNight from './images/clearSkyNight.png';
import fewCloudsDay from './images/fewCloudsDay.png';
import fewCloudsNight from './images/fewCloudsNight.png';
import scatteredClouds from './images/scatteredClouds.png';
import brokenClouds from './images/brokenClouds.png';
import showerRain from './images/showerRain.png';
import rainDay from './images/rainDay.png';
import rainNight from './images/rainNight.png';
import thunderstorm from './images/thunderstorm.png';
import snow from './images/snow.png';
import mist from './images/mist.png';


export default function loadMain(response) {

    // Div that holds the main information
    const importantInfo = document.querySelector('.importantInfo');

    // Clear div initially
    importantInfo.innerHTML = '';

    // Create Elements
    // City
    const city = document.createElement('p');
    city.setAttribute('id', 'cityName');
    city.innerHTML = response.name;

    // Temp
    const tempDiv = document.createElement('div');
    const tempImage = document.createElement('img');
    tempImage.src = tempSVG;
    const tempText = document.createElement('p');
    tempText.innerHTML = `${response.main.temp}\u00B0`;
    tempDiv.appendChild(tempImage);
    tempDiv.appendChild(tempText);

    // Feels Like
    const feelsLikeDiv = document.createElement('div');
    const feelsLikeImage = document.createElement('img');
    feelsLikeImage.src = tempSVG;
    const feelsLikeText = document.createElement('p');
    feelsLikeText.innerHTML = `Feels Like ${response.main.feels_like}\u00B0`;
    feelsLikeDiv.appendChild(feelsLikeImage);
    feelsLikeDiv.appendChild(feelsLikeText);

    // High
    const tempHighDiv = document.createElement('div');
    const tempHighImage = document.createElement('img');
    tempHighImage.src = tempSVG;
    const tempHighText = document.createElement('p');
    tempHighText.innerHTML = `High of ${response.main.temp_max}\u00B0`;
    tempHighDiv.appendChild(tempHighImage);
    tempHighDiv.appendChild(tempHighText);

    // Low
    const tempLowDiv = document.createElement('div');
    const tempLowImage = document.createElement('img');
    tempLowImage.src = tempSVG;
    const tempLowText = document.createElement('p');
    tempLowText.innerHTML = `Low of ${response.main.temp_min}\u00B0`;
    tempLowDiv.appendChild(tempLowImage);
    tempLowDiv.appendChild(tempLowText);

    // Humidity
    const humidityDiv = document.createElement('div');
    const humidityImage = document.createElement('img');
    humidityImage.src = humiditySVG;
    const humidityText = document.createElement('p');
    humidityText.innerHTML = `${response.main.humidity}%`;
    humidityDiv.appendChild(humidityImage);
    humidityDiv.appendChild(humidityText);

    // Pressure
    const pressureDiv = document.createElement('div')
    const pressureImage = document.createElement('img');
    pressureImage.src = pressureSVG;
    const pressureText = document.createElement('p');
    pressureText.innerHTML = `${response.main.pressure} inHg`;
    pressureDiv.appendChild(pressureImage);
    pressureDiv.appendChild(pressureText);

    // Append elements
    importantInfo.appendChild(city);
    importantInfo.appendChild(tempDiv);
    importantInfo.appendChild(feelsLikeDiv);
    importantInfo.appendChild(tempHighDiv);
    importantInfo.appendChild(tempLowDiv);
    importantInfo.appendChild(humidityDiv);
    importantInfo.appendChild(pressureDiv);
};

// Loads the other information on the right side of the page
async function loadOther(response, unit) {

    // Div that holds other information
    const otherInfo = document.querySelector('.otherInfo');

    // Clear div initially 
    otherInfo.innerHTML = '';

    // Create Elements
    // Sunrise
    const sunriseDiv = document.createElement('div');
    const sunriseImage = document.createElement('img');
    sunriseImage.src = sunriseSVG;
    const sunriseText = document.createElement('p');
    const sunriseTime = await convertTime(response.sys.sunrise, response.coord.lat, response.coord.lon);
    sunriseText.innerHTML = `${sunriseTime}AM`;
    sunriseDiv.appendChild(sunriseImage);
    sunriseDiv.appendChild(sunriseText);

    // Sunset
    const sunsetDiv = document.createElement('div');
    const sunsetImage = document.createElement('img');
    sunsetImage.src = sunsetSVG;
    const sunsetText = document.createElement('p');
    const sunsetTime = await convertTime(response.sys.sunset, response.coord.lat, response.coord.lon);
    sunsetText.innerHTML = `${sunsetTime}PM`;
    sunsetDiv.appendChild(sunsetImage);
    sunsetDiv.appendChild(sunsetText);

    // Wind
    const windDiv = document.createElement('div');
    const windImage = document.createElement('img');
    windImage.src = windSVG;
    const windText = document.createElement('p');
    if (unit == 'imperial') {
        windText.innerHTML = `Wind ${response.wind.speed}mph at ${response.wind.deg}\u00B0`;
    }
    else {
        windText.innerHTML = `Wind ${response.wind.speed}km/h at ${response.wind.deg}\u00B0`;
    }
    windDiv.appendChild(windImage);
    windDiv.appendChild(windText);

    // Weather
    const weatherDiv = document.createElement('div');
    const weatherText = document.createElement('p');
    weatherText.classList = 'description';
    weatherText.innerHTML = `${response.weather[0].description}`;
    weatherDiv.appendChild(weatherText);

    // Visibility
    const visibilityDiv = document.createElement('div');
    const visibilityText = document.createElement('p');
    if (unit == 'imperial') {
        visibilityText.innerHTML = `Visibility ${(response.visibility / 1000)}mi`;
    }
    else {
        visibilityText.innerHTML = `Visibility ${(response.visibility / 1000)}km`;
    }
    visibilityDiv.appendChild(visibilityText);

    // Append Elements
    otherInfo.appendChild(sunriseDiv);
    otherInfo.appendChild(sunsetDiv);
    otherInfo.appendChild(windDiv);
    otherInfo.appendChild(weatherDiv);
    otherInfo.appendChild(visibilityDiv);
};

async function renderLogo(apiResponse) {

    const logoImage = document.getElementById('logo');

    // Initialize daytime variable which will be set to true or false
    let dayTime;

    // Initialize logo variable which will be set to an image
    let logo;

    // Get day time, sunrise, and sunset in military time
    let militaryTimeOfDay = await convertTime2(apiResponse.dt, apiResponse.coord.lat, apiResponse.coord.lon);
    let militarySunrise = await convertTime2(apiResponse.sys.sunrise, apiResponse.coord.lat, apiResponse.coord.lon);
    let militarySunset = await convertTime2(apiResponse.sys.sunset, apiResponse.coord.lat, apiResponse.coord.lon);
    
    // Remove colon separating hours and minutes
    militaryTimeOfDay = militaryTimeOfDay.replace(':', '');
    militarySunrise = militarySunrise.replace(':', '');
    militarySunset = militarySunset.replace(':', '');

    // Convert times to numbers
    militaryTimeOfDay = Number(militaryTimeOfDay);
    militarySunrise = Number(militarySunrise);
    militarySunset = Number(militarySunset)

    // Time is before sunrise
    if (militaryTimeOfDay < militarySunrise ) {dayTime = false;}
    // Time is after sunset
    else if (militaryTimeOfDay > militarySunset) {dayTime = false;}
    // Day Time
    else {dayTime = true;};

    // Array that holds description and the DAY TIME image associated
    let weatherConditionsDay = [
        {'clear sky': clearSkyDay},
        {'few clouds': fewCloudsDay},
        {'scattered clouds': scatteredClouds},
        {'overcast clouds': scatteredClouds},
        {'broken clouds': brokenClouds},
        {'shower rain': showerRain},
        {'light intensity drizzle': showerRain},
        {'drizzle': showerRain},
        {'heavy intensity drizzle': showerRain},
        {'light intensity drizzle rain': showerRain},
        {'drizzle rain': showerRain},
        {'heavy intensity drizzle rain': showerRain},
        {'shower rain and drizzle': showerRain},
        {'heavy shower rain and drizzle': showerRain},
        {'shower drizzle': showerRain},
        {'light intensity shower rain': showerRain},
        {'heavy intensity shower rain': showerRain},
        {'ragged shower rain': showerRain},
        {'rain': rainDay},
        {'light rain': rainDay},
        {'moderate rain': rainDay},
        {'heavy intensity rain': rainDay},
        {'very heavy rain': rainDay},
        {'extreme rain': rainDay},
        {'thunderstorm': thunderstorm},
        {'thunderstorm with light rain': thunderstorm},
        {'thunderstorm with rain': thunderstorm},
        {'thunderstorm with heavy rain': thunderstorm},
        {'light thunderstorm': thunderstorm},
        {'heavy thunderstorm': thunderstorm},
        {'ragged thunderstorm': thunderstorm},
        {'thunderstorm with light drizzle': thunderstorm},
        {'thunderstorm with drizzle': thunderstorm},
        {'thunderstorm with heavy drizzle': thunderstorm},
        {'snow': snow},
        {'freezing rain': snow},
        {'light snow': snow},
        {'heavy snow': snow},
        {'sleet': snow},
        {'light shower sleet': snow},
        {'shower sleet': snow},
        {'light rain and snow': snow},
        {'rain and snow': snow},
        {'light shower snow': snow},
        {'shower snow': snow},
        {'heavy shower snow': snow},
        {'mist': mist},
        {'smoke': mist},
        {'haze': mist},
        {'sand/ dust whirls': mist},
        {'fog': mist},
        {'sand': mist},
        {'dust': mist},
        {'volcanic ash': mist},
        {'squalls': mist},
        {'tornado': mist},
    ];
    // Array that holds description and the NIGHT TIME image associated
    let weatherConditionsNight = [
        {'clear sky': clearSkyNight},
        {'few clouds': fewCloudsNight},
        {'scattered clouds': scatteredClouds},
        {'overcast clouds': scatteredClouds},
        {'broken clouds': brokenClouds},
        {'shower rain': showerRain},
        {'light intensity drizzle': showerRain},
        {'drizzle': showerRain},
        {'heavy intensity drizzle': showerRain},
        {'light intensity drizzle rain': showerRain},
        {'drizzle rain': showerRain},
        {'heavy intensity drizzle rain': showerRain},
        {'shower rain and drizzle': showerRain},
        {'heavy shower rain and drizzle': showerRain},
        {'shower drizzle': showerRain},
        {'light intensity shower rain': showerRain},
        {'heavy intensity shower rain': showerRain},
        {'ragged shower rain': showerRain},
        {'rain': rainNight},
        {'light rain': rainDay},
        {'moderate rain': rainDay},
        {'heavy intensity rain': rainDay},
        {'very heavy rain': rainDay},
        {'extreme rain': rainDay},
        {'thunderstorm': thunderstorm},
        {'thunderstorm with light rain': thunderstorm},
        {'thunderstorm with rain': thunderstorm},
        {'thunderstorm with heavy rain': thunderstorm},
        {'light thunderstorm': thunderstorm},
        {'heavy thunderstorm': thunderstorm},
        {'ragged thunderstorm': thunderstorm},
        {'thunderstorm with light drizzle': thunderstorm},
        {'thunderstorm with drizzle': thunderstorm},
        {'thunderstorm with heavy drizzle': thunderstorm},
        {'snow': snow},
        {'freezing rain': snow},
        {'light snow': snow},
        {'heavy snow': snow},
        {'sleet': snow},
        {'light shower sleet': snow},
        {'shower sleet': snow},
        {'light rain and snow': snow},
        {'rain and snow': snow},
        {'light shower snow': snow},
        {'shower snow': snow},
        {'heavy shower snow': snow},
        {'mist': mist},
        {'smoke': mist},
        {'haze': mist},
        {'sand/ dust whirls': mist},
        {'fog': mist},
        {'sand': mist},
        {'dust': mist},
        {'volcanic ash': mist},
        {'squalls': mist},
        {'tornado': mist},
    ];

    // The description for the current city
    const weatherDescription = apiResponse.weather[0].description;

    // If it is daytime loop through daytime array, find the correct description and make logo its image
    if (dayTime === true) {
        for (let i = 0; i < weatherConditionsDay.length; i++) {

            if(weatherConditionsDay[i][weatherDescription]) {
                logo = weatherConditionsDay[i][weatherDescription]
                return logoImage.src = logo;
            }
        }
    }
    // If it is night time, do the same using weatherConditionsNight array
    else {
        for (let i = 0; i < weatherConditionsNight.length; i++) {
            if(weatherConditionsNight[i][weatherDescription]) {
                logo = weatherConditionsNight[i][weatherDescription]
                return logoImage.src = logo;
            }
        }
    };

};

export {
    loadOther,
    renderLogo,
}