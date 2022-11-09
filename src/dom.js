import { convertTime } from "./helpers";
import tempSVG from './images/temp.svg';
import humiditySVG from './images/humidity.svg';
import pressureSVG from './images/air-pressure.svg';
import sunriseSVG from './images/sunrise.svg';
import sunsetSVG from './images/sunset.svg';
import windSVG from './images/wind.svg';


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

export {
    loadOther,
}