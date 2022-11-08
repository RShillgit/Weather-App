import _ from 'lodash';
import './style.css';
import getApiFahrenheit from './apiLoad';
import { getApiCelsius } from './apiLoad';

// Elements
const cityInput = document.getElementById('city');
const searchButton = document.getElementById('search');

// TODO handle api fetch errors
// TODO create slider button that toggles between fahrenheit and celsius
// Only function that would need to change is the display other because the units would be different

function getWeather() {

    // Search event listener
    searchButton.addEventListener('click', () => {

        // No input handler
        if (cityInput.validity.valueMissing) {
            cityInput.setCustomValidity("Input a City");
            cityInput.reportValidity();
        }
        else {
            cityInput.setCustomValidity("");

            const requestedCity = cityInput.value;
            return getApiFahrenheit(requestedCity);
        }
    });
};
getWeather();

