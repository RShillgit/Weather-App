import { convertTime } from "./helpers";



export default function loadMain(response) {

    // Div that holds the main information
    const importantInfo = document.querySelector('.importantInfo');

    // Clear div initially
    importantInfo.innerHTML = '';
    console.log(response)

    // Create Elements
    // City
    const city = document.createElement('p');
    city.innerHTML = response.name;

    // Temp
    const temp = document.createElement('p');
    temp.innerHTML = `Temp ${response.main.temp}\u00B0`;

    // Feels Like
    const feelsLike = document.createElement('p');
    feelsLike.innerHTML = `Feels Like ${response.main.feels_like}\u00B0`;

    // High
    const tempHigh = document.createElement('p');
    tempHigh.innerHTML = `High of ${response.main.temp_max}\u00B0`;

    // Low
    const tempLow = document.createElement('p');
    tempLow.innerHTML = `Low of ${response.main.temp_min}\u00B0`;

    // Humidity
    const humidity = document.createElement('p');
    humidity.innerHTML = `Humidity ${response.main.humidity}%`;

    // Pressure
    const pressure = document.createElement('p');
    pressure.innerHTML = `Pressure ${response.main.pressure} inHg`;
 
    // Append elements
    importantInfo.appendChild(city);
    importantInfo.appendChild(temp);
    importantInfo.appendChild(feelsLike);
    importantInfo.appendChild(tempHigh);
    importantInfo.appendChild(tempLow);
    importantInfo.appendChild(humidity);
    importantInfo.appendChild(pressure);
};

// Loads the other information on the right side of the page
function loadOther(response) {

    // Div that holds other information
    const otherInfo = document.querySelector('.otherInfo');

    // Clear div initially 
    otherInfo.innerHTML = '';

    // Create Elements
    // UV Index
    const uvIndex = document.createElement('p');
    uvIndex.innerHTML = `UV Index `;

    // Sunrise
    const sunrise = document.createElement('p');
    sunrise.innerHTML = `Sunrise `;

    // Sunset
    const sunset = document.createElement('p');
    sunset.innerHTML = `Sunset `;

    // Wind
    const wind = document.createElement('p');
    wind.innerHTML = `Wind ${response.wind.speed}mph at ${response.wind.deg}\u00B0`;

    // Weather
    const weather = document.createElement('p');
    weather.innerHTML = `Weather ${response.weather[0].description}`;

    // Visibility
    const visibility = document.createElement('p');
    visibility.innerHTML = `Visibility ${(response.visibility / 1000)}mi`;

    // Append Elements
    otherInfo.appendChild(uvIndex);
    otherInfo.appendChild(sunrise);
    otherInfo.appendChild(sunset);
    otherInfo.appendChild(wind);
    otherInfo.appendChild(weather);
    otherInfo.appendChild(visibility);
}

export {
    loadOther,
}