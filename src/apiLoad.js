import loadMain from './dom.js';
import { loadOther, renderLogo } from './dom.js';

export default function getApiFahrenheit(location) {

    // TEST
    const cityInput = document.getElementById('city');

    // Units Used
    const unit = 'imperial';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4c9506d41b20a8d4634e2cee6fb61ac2&units=imperial`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {

        if (response.cod == '404') {
            cityInput.setCustomValidity(`${location} is not a valid city.`);
            cityInput.reportValidity();
            return
        }
        else {
            return (loadMain(response), loadOther(response, unit), renderLogo(response));
        }
    })
};

function getApiCelsius(location) {

    // Units Used
    const unit = 'metric';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4c9506d41b20a8d4634e2cee6fb61ac2&units=metric`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        
        return loadMain(response), loadOther(response, unit);
    })
    .catch(console.error);
};

export {
    getApiCelsius,
}