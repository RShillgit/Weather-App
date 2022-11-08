import loadMain from './dom.js';
import { loadOther } from './dom.js';

export default function getApiFahrenheit(location) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4c9506d41b20a8d4634e2cee6fb61ac2&units=imperial`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        
        return loadMain(response), loadOther(response);
    })
    .catch(console.error);

};

function getApiCelsius(location) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4c9506d41b20a8d4634e2cee6fb61ac2&units=metric`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        
        return loadMain(response), loadOther(response);
    })
    .catch(console.error);
};

export {
    getApiCelsius,
}