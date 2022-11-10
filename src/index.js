import _ from 'lodash';
import './style.css';
import getApiFahrenheit from './apiLoad';
import { getApiCelsius } from './apiLoad';

// Elements
const cityInput = document.getElementById('city');
const searchButton = document.getElementById('search');
const unitSwitchButton = document.getElementById('FC');
const fBtn = document.querySelector('.F');
const cBtn = document.querySelector('.C');

// Initially Set fahrenheit to True
let fahrenheit = true;

// Initially set currentCity to London
let currentCity = 'London';

// TODO Dynamic weather logo 
// TODO next to the city write the state or country?
// Get time of day so you know if it is a day or night icon


// Initially load London's weather
function initialLoad() {
    // Set Fahrenheit button to active
    fBtn.classList.toggle('active');
    return getApiFahrenheit(currentCity);  
};
initialLoad();

function getWeather() {

    // Search event listener
    searchButton.addEventListener('click', async () => {

        // No input handler
        if (cityInput.validity.valueMissing) {
            cityInput.setCustomValidity("Input a City");
            cityInput.reportValidity();
        }
        else {
            cityInput.setCustomValidity("");

            // City the user requested
            const requestedCity = cityInput.value;

            await getApiFahrenheit(requestedCity);

            // Change current city
            currentCity = requestedCity;

        }

    });
};
getWeather();

function switchUnits() {

    // Unit Switch event listener
    unitSwitchButton.addEventListener('click', () => {

        // Switch Unit
        fahrenheit = !fahrenheit;

        // Toggle active class
        fBtn.classList.toggle('active');
        cBtn.classList.toggle('active');

        // If fahrenheit is now true
        if (fahrenheit == true) {
            return getApiFahrenheit(currentCity);
        }
        // Else if it is now false
        else {
            return getApiCelsius(currentCity);
        }
    })

};
switchUnits();