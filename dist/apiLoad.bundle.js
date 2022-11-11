/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiLoad.js":
/*!************************!*\
  !*** ./src/apiLoad.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getApiFahrenheit),\n/* harmony export */   \"getApiCelsius\": () => (/* binding */ getApiCelsius)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\nfunction getApiFahrenheit(location) {\n\n    // TEST\n    const cityInput = document.getElementById('city');\n\n    // Units Used\n    const unit = 'imperial';\n\n    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4c9506d41b20a8d4634e2cee6fb61ac2&units=imperial`, {mode: 'cors'})\n    .then(function(response) {\n        return response.json();\n    })\n    .then(function(response) {\n\n        if (response.cod == '404') {\n            cityInput.setCustomValidity(`${location} is not a valid city.`);\n            cityInput.reportValidity();\n            return\n        }\n        else {\n            return ((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response), (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.loadOther)(response, unit), (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderLogo)(response));\n        }\n    })\n};\n\nfunction getApiCelsius(location) {\n\n    // Units Used\n    const unit = 'metric';\n\n    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4c9506d41b20a8d4634e2cee6fb61ac2&units=metric`, {mode: 'cors'})\n    .then(function(response) {\n        return response.json();\n    })\n    .then(function(response) {\n        \n        return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response), (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.loadOther)(response, unit);\n    })\n    .catch(console.error);\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/apiLoad.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMain),\n/* harmony export */   \"loadOther\": () => (/* binding */ loadOther),\n/* harmony export */   \"renderLogo\": () => (/* binding */ renderLogo)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _images_temp_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/temp.svg */ \"./src/images/temp.svg\");\n/* harmony import */ var _images_humidity_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/humidity.svg */ \"./src/images/humidity.svg\");\n/* harmony import */ var _images_air_pressure_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/air-pressure.svg */ \"./src/images/air-pressure.svg\");\n/* harmony import */ var _images_sunrise_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/sunrise.svg */ \"./src/images/sunrise.svg\");\n/* harmony import */ var _images_sunset_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/sunset.svg */ \"./src/images/sunset.svg\");\n/* harmony import */ var _images_wind_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/wind.svg */ \"./src/images/wind.svg\");\n/* harmony import */ var _images_clearSkyDay_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/clearSkyDay.png */ \"./src/images/clearSkyDay.png\");\n/* harmony import */ var _images_clearSkyNight_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/clearSkyNight.png */ \"./src/images/clearSkyNight.png\");\n/* harmony import */ var _images_fewCloudsDay_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/fewCloudsDay.png */ \"./src/images/fewCloudsDay.png\");\n/* harmony import */ var _images_fewCloudsNight_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/fewCloudsNight.png */ \"./src/images/fewCloudsNight.png\");\n/* harmony import */ var _images_scatteredClouds_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/scatteredClouds.png */ \"./src/images/scatteredClouds.png\");\n/* harmony import */ var _images_brokenClouds_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/brokenClouds.png */ \"./src/images/brokenClouds.png\");\n/* harmony import */ var _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/showerRain.png */ \"./src/images/showerRain.png\");\n/* harmony import */ var _images_rainDay_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/rainDay.png */ \"./src/images/rainDay.png\");\n/* harmony import */ var _images_rainNight_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/rainNight.png */ \"./src/images/rainNight.png\");\n/* harmony import */ var _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/thunderstorm.png */ \"./src/images/thunderstorm.png\");\n/* harmony import */ var _images_snow_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/snow.png */ \"./src/images/snow.png\");\n/* harmony import */ var _images_mist_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/mist.png */ \"./src/images/mist.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction loadMain(response) {\n\n    // Div that holds the main information\n    const importantInfo = document.querySelector('.importantInfo');\n\n    // Clear div initially\n    importantInfo.innerHTML = '';\n\n    // Create Elements\n    // City\n    const city = document.createElement('p');\n    city.setAttribute('id', 'cityName');\n    city.innerHTML = response.name;\n\n    // Temp\n    const tempDiv = document.createElement('div');\n    const tempImage = document.createElement('img');\n    tempImage.src = _images_temp_svg__WEBPACK_IMPORTED_MODULE_1__;\n    const tempText = document.createElement('p');\n    tempText.innerHTML = `${response.main.temp}\\u00B0`;\n    tempDiv.appendChild(tempImage);\n    tempDiv.appendChild(tempText);\n\n    // Feels Like\n    const feelsLikeDiv = document.createElement('div');\n    const feelsLikeImage = document.createElement('img');\n    feelsLikeImage.src = _images_temp_svg__WEBPACK_IMPORTED_MODULE_1__;\n    const feelsLikeText = document.createElement('p');\n    feelsLikeText.innerHTML = `Feels Like ${response.main.feels_like}\\u00B0`;\n    feelsLikeDiv.appendChild(feelsLikeImage);\n    feelsLikeDiv.appendChild(feelsLikeText);\n\n    // High\n    const tempHighDiv = document.createElement('div');\n    const tempHighImage = document.createElement('img');\n    tempHighImage.src = _images_temp_svg__WEBPACK_IMPORTED_MODULE_1__;\n    const tempHighText = document.createElement('p');\n    tempHighText.innerHTML = `High of ${response.main.temp_max}\\u00B0`;\n    tempHighDiv.appendChild(tempHighImage);\n    tempHighDiv.appendChild(tempHighText);\n\n    // Low\n    const tempLowDiv = document.createElement('div');\n    const tempLowImage = document.createElement('img');\n    tempLowImage.src = _images_temp_svg__WEBPACK_IMPORTED_MODULE_1__;\n    const tempLowText = document.createElement('p');\n    tempLowText.innerHTML = `Low of ${response.main.temp_min}\\u00B0`;\n    tempLowDiv.appendChild(tempLowImage);\n    tempLowDiv.appendChild(tempLowText);\n\n    // Humidity\n    const humidityDiv = document.createElement('div');\n    const humidityImage = document.createElement('img');\n    humidityImage.src = _images_humidity_svg__WEBPACK_IMPORTED_MODULE_2__;\n    const humidityText = document.createElement('p');\n    humidityText.innerHTML = `${response.main.humidity}%`;\n    humidityDiv.appendChild(humidityImage);\n    humidityDiv.appendChild(humidityText);\n\n    // Pressure\n    const pressureDiv = document.createElement('div')\n    const pressureImage = document.createElement('img');\n    pressureImage.src = _images_air_pressure_svg__WEBPACK_IMPORTED_MODULE_3__;\n    const pressureText = document.createElement('p');\n    pressureText.innerHTML = `${response.main.pressure} inHg`;\n    pressureDiv.appendChild(pressureImage);\n    pressureDiv.appendChild(pressureText);\n\n    // Append elements\n    importantInfo.appendChild(city);\n    importantInfo.appendChild(tempDiv);\n    importantInfo.appendChild(feelsLikeDiv);\n    importantInfo.appendChild(tempHighDiv);\n    importantInfo.appendChild(tempLowDiv);\n    importantInfo.appendChild(humidityDiv);\n    importantInfo.appendChild(pressureDiv);\n};\n\n// Loads the other information on the right side of the page\nasync function loadOther(response, unit) {\n\n    // Div that holds other information\n    const otherInfo = document.querySelector('.otherInfo');\n\n    // Clear div initially \n    otherInfo.innerHTML = '';\n\n    // Create Elements\n    // Sunrise\n    const sunriseDiv = document.createElement('div');\n    const sunriseImage = document.createElement('img');\n    sunriseImage.src = _images_sunrise_svg__WEBPACK_IMPORTED_MODULE_4__;\n    const sunriseText = document.createElement('p');\n    const sunriseTime = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.convertTime)(response.sys.sunrise, response.coord.lat, response.coord.lon, 'regular');\n    sunriseText.innerHTML = `${sunriseTime}AM`;\n    sunriseDiv.appendChild(sunriseImage);\n    sunriseDiv.appendChild(sunriseText);\n\n    // Sunset\n    const sunsetDiv = document.createElement('div');\n    const sunsetImage = document.createElement('img');\n    sunsetImage.src = _images_sunset_svg__WEBPACK_IMPORTED_MODULE_5__;\n    const sunsetText = document.createElement('p');\n    const sunsetTime = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.convertTime)(response.sys.sunset, response.coord.lat, response.coord.lon, 'regular');\n    sunsetText.innerHTML = `${sunsetTime}PM`;\n    sunsetDiv.appendChild(sunsetImage);\n    sunsetDiv.appendChild(sunsetText);\n\n    // Wind\n    const windDiv = document.createElement('div');\n    const windImage = document.createElement('img');\n    windImage.src = _images_wind_svg__WEBPACK_IMPORTED_MODULE_6__;\n    const windText = document.createElement('p');\n    if (unit == 'imperial') {\n        windText.innerHTML = `Wind ${response.wind.speed}mph at ${response.wind.deg}\\u00B0`;\n    }\n    else {\n        windText.innerHTML = `Wind ${response.wind.speed}km/h at ${response.wind.deg}\\u00B0`;\n    }\n    windDiv.appendChild(windImage);\n    windDiv.appendChild(windText);\n\n    // Weather\n    const weatherDiv = document.createElement('div');\n    const weatherText = document.createElement('p');\n    weatherText.classList = 'description';\n    weatherText.innerHTML = `${response.weather[0].description}`;\n    weatherDiv.appendChild(weatherText);\n\n    // Visibility\n    const visibilityDiv = document.createElement('div');\n    const visibilityText = document.createElement('p');\n    if (unit == 'imperial') {\n        visibilityText.innerHTML = `Visibility ${(response.visibility / 1000)}mi`;\n    }\n    else {\n        visibilityText.innerHTML = `Visibility ${(response.visibility / 1000)}km`;\n    }\n    visibilityDiv.appendChild(visibilityText);\n\n    // Append Elements\n    otherInfo.appendChild(sunriseDiv);\n    otherInfo.appendChild(sunsetDiv);\n    otherInfo.appendChild(windDiv);\n    otherInfo.appendChild(weatherDiv);\n    otherInfo.appendChild(visibilityDiv);\n};\n\nasync function renderLogo(apiResponse) {\n\n    const logoImage = document.getElementById('logo');\n\n    // Initialize daytime variable which will be set to true or false\n    let dayTime;\n\n    // Initialize logo variable which will be set to an image\n    let logo;\n\n    // Get day time, sunrise, and sunset in military time\n    let militaryTimeOfDay = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.convertTime)(apiResponse.dt, apiResponse.coord.lat, apiResponse.coord.lon, 'military');\n    let militarySunrise = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.convertTime)(apiResponse.sys.sunrise, apiResponse.coord.lat, apiResponse.coord.lon, 'military');\n    let militarySunset = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.convertTime)(apiResponse.sys.sunset, apiResponse.coord.lat, apiResponse.coord.lon, 'military');\n    \n    // Remove colon separating hours and minutes\n    militaryTimeOfDay = militaryTimeOfDay.replace(':', '');\n    militarySunrise = militarySunrise.replace(':', '');\n    militarySunset = militarySunset.replace(':', '');\n\n    // Convert times to numbers\n    militaryTimeOfDay = Number(militaryTimeOfDay);\n    militarySunrise = Number(militarySunrise);\n    militarySunset = Number(militarySunset)\n\n    // Time is before sunrise\n    if (militaryTimeOfDay < militarySunrise ) {dayTime = false;}\n    // Time is after sunset\n    else if (militaryTimeOfDay > militarySunset) {dayTime = false;}\n    // Day Time\n    else {dayTime = true;};\n\n    // Array that holds description and the DAY TIME image associated\n    let weatherConditionsDay = [\n        {'clear sky': _images_clearSkyDay_png__WEBPACK_IMPORTED_MODULE_7__},\n        {'few clouds': _images_fewCloudsDay_png__WEBPACK_IMPORTED_MODULE_9__},\n        {'scattered clouds': _images_scatteredClouds_png__WEBPACK_IMPORTED_MODULE_11__},\n        {'overcast clouds': _images_scatteredClouds_png__WEBPACK_IMPORTED_MODULE_11__},\n        {'broken clouds': _images_brokenClouds_png__WEBPACK_IMPORTED_MODULE_12__},\n        {'shower rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'light intensity drizzle': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'drizzle': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'heavy intensity drizzle': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'light intensity drizzle rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'drizzle rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'heavy intensity drizzle rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'shower rain and drizzle': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'heavy shower rain and drizzle': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'shower drizzle': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'light intensity shower rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'heavy intensity shower rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'ragged shower rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'rain': _images_rainDay_png__WEBPACK_IMPORTED_MODULE_14__},\n        {'light rain': _images_rainDay_png__WEBPACK_IMPORTED_MODULE_14__},\n        {'moderate rain': _images_rainDay_png__WEBPACK_IMPORTED_MODULE_14__},\n        {'heavy intensity rain': _images_rainDay_png__WEBPACK_IMPORTED_MODULE_14__},\n        {'very heavy rain': _images_rainDay_png__WEBPACK_IMPORTED_MODULE_14__},\n        {'extreme rain': _images_rainDay_png__WEBPACK_IMPORTED_MODULE_14__},\n        {'thunderstorm': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'thunderstorm with light rain': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'thunderstorm with rain': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'thunderstorm with heavy rain': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'light thunderstorm': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'heavy thunderstorm': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'ragged thunderstorm': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'thunderstorm with light drizzle': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'thunderstorm with drizzle': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'thunderstorm with heavy drizzle': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'freezing rain': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'light snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'heavy snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'sleet': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'light shower sleet': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'shower sleet': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'light rain and snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'rain and snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'light shower snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'shower snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'heavy shower snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'mist': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'smoke': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'haze': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'sand/ dust whirls': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'fog': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'sand': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'dust': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'volcanic ash': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'squalls': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'tornado': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n    ];\n    // Array that holds description and the NIGHT TIME image associated\n    let weatherConditionsNight = [\n        {'clear sky': _images_clearSkyNight_png__WEBPACK_IMPORTED_MODULE_8__},\n        {'few clouds': _images_fewCloudsNight_png__WEBPACK_IMPORTED_MODULE_10__},\n        {'scattered clouds': _images_scatteredClouds_png__WEBPACK_IMPORTED_MODULE_11__},\n        {'overcast clouds': _images_scatteredClouds_png__WEBPACK_IMPORTED_MODULE_11__},\n        {'broken clouds': _images_brokenClouds_png__WEBPACK_IMPORTED_MODULE_12__},\n        {'shower rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'light intensity drizzle': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'drizzle': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'heavy intensity drizzle': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'light intensity drizzle rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'drizzle rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'heavy intensity drizzle rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'shower rain and drizzle': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'heavy shower rain and drizzle': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'shower drizzle': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'light intensity shower rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'heavy intensity shower rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'ragged shower rain': _images_showerRain_png__WEBPACK_IMPORTED_MODULE_13__},\n        {'rain': _images_rainNight_png__WEBPACK_IMPORTED_MODULE_15__},\n        {'light rain': _images_rainDay_png__WEBPACK_IMPORTED_MODULE_14__},\n        {'moderate rain': _images_rainDay_png__WEBPACK_IMPORTED_MODULE_14__},\n        {'heavy intensity rain': _images_rainDay_png__WEBPACK_IMPORTED_MODULE_14__},\n        {'very heavy rain': _images_rainDay_png__WEBPACK_IMPORTED_MODULE_14__},\n        {'extreme rain': _images_rainDay_png__WEBPACK_IMPORTED_MODULE_14__},\n        {'thunderstorm': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'thunderstorm with light rain': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'thunderstorm with rain': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'thunderstorm with heavy rain': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'light thunderstorm': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'heavy thunderstorm': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'ragged thunderstorm': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'thunderstorm with light drizzle': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'thunderstorm with drizzle': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'thunderstorm with heavy drizzle': _images_thunderstorm_png__WEBPACK_IMPORTED_MODULE_16__},\n        {'snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'freezing rain': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'light snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'heavy snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'sleet': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'light shower sleet': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'shower sleet': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'light rain and snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'rain and snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'light shower snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'shower snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'heavy shower snow': _images_snow_png__WEBPACK_IMPORTED_MODULE_17__},\n        {'mist': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'smoke': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'haze': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'sand/ dust whirls': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'fog': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'sand': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'dust': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'volcanic ash': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'squalls': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n        {'tornado': _images_mist_png__WEBPACK_IMPORTED_MODULE_18__},\n    ];\n\n    // The description for the current city\n    const weatherDescription = apiResponse.weather[0].description;\n\n    // If it is daytime loop through daytime array, find the correct description and make logo its image\n    if (dayTime === true) {\n        for (let i = 0; i < weatherConditionsDay.length; i++) {\n\n            if(weatherConditionsDay[i][weatherDescription]) {\n                logo = weatherConditionsDay[i][weatherDescription]\n                return logoImage.src = logo;\n            }\n        }\n    }\n    // If it is night time, do the same using weatherConditionsNight array\n    else {\n        for (let i = 0; i < weatherConditionsNight.length; i++) {\n            if(weatherConditionsNight[i][weatherDescription]) {\n                logo = weatherConditionsNight[i][weatherDescription]\n                return logoImage.src = logo;\n            }\n        }\n    };\n\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertTime\": () => (/* binding */ convertTime)\n/* harmony export */ });\nasync function convertTime(timestamp, lat, lon, timeUnit) {\n\n    let time = \"\";\n\n    // API that gets timzeone using latitude and longitude\n    const response = await fetch(`https://api.wheretheiss.at/v1/coordinates/${lat},${lon}`, {mode: 'cors'})\n    const timezoneData = await response.json();\n\n    // Timezone from the api\n    const timezone = timezoneData.timezone_id;\n\n    // Converts date to timezone-specific date\n    function convertTZ(date) {\n        return new Date((typeof date === \"string\" ? new Date(date) : date).toLocaleString(\"en-US\", {timeZone: timezone}));   \n    }\n\n    // Date\n    const date = new Date(timestamp * 1000);\n\n    // Timezone Specific Date\n    const convertedDate = convertTZ(date);\n\n    let hours = convertedDate.getHours();\n\n    // Convert from military to regular time\n    if (timeUnit === 'regular') {\n        if (hours > 12) hours -= 12;\n    };\n\n    // If minitues are single digits, and a zero in the beginning\n    let minutes = convertedDate.getMinutes();\n    if (minutes < 10) {minutes = `0${minutes}`};\n    \n    // Format as hh:mm\n    time = `${hours}:${minutes}`;\n\n    return time;\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/helpers.js?");

/***/ }),

/***/ "./src/images/air-pressure.svg":
/*!*************************************!*\
  !*** ./src/images/air-pressure.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd4cd37600d78b3ae07d.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/air-pressure.svg?");

/***/ }),

/***/ "./src/images/brokenClouds.png":
/*!*************************************!*\
  !*** ./src/images/brokenClouds.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6663ab6322a5eaec1d6.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/brokenClouds.png?");

/***/ }),

/***/ "./src/images/clearSkyDay.png":
/*!************************************!*\
  !*** ./src/images/clearSkyDay.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"21d0166d556b45f9d0fb.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/clearSkyDay.png?");

/***/ }),

/***/ "./src/images/clearSkyNight.png":
/*!**************************************!*\
  !*** ./src/images/clearSkyNight.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2dea4f0c50e2c8b7319a.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/clearSkyNight.png?");

/***/ }),

/***/ "./src/images/fewCloudsDay.png":
/*!*************************************!*\
  !*** ./src/images/fewCloudsDay.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7eb74c4e0a99eebd4f9f.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/fewCloudsDay.png?");

/***/ }),

/***/ "./src/images/fewCloudsNight.png":
/*!***************************************!*\
  !*** ./src/images/fewCloudsNight.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3b2e3426e30cdc516b3d.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/fewCloudsNight.png?");

/***/ }),

/***/ "./src/images/humidity.svg":
/*!*********************************!*\
  !*** ./src/images/humidity.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c7aa443ddb9d5f97854.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/humidity.svg?");

/***/ }),

/***/ "./src/images/mist.png":
/*!*****************************!*\
  !*** ./src/images/mist.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"85ba87958a828a21ba4b.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/mist.png?");

/***/ }),

/***/ "./src/images/rainDay.png":
/*!********************************!*\
  !*** ./src/images/rainDay.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eaa6309e7e00f8a46060.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/rainDay.png?");

/***/ }),

/***/ "./src/images/rainNight.png":
/*!**********************************!*\
  !*** ./src/images/rainNight.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ce578ca0edbed3e8867.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/rainNight.png?");

/***/ }),

/***/ "./src/images/scatteredClouds.png":
/*!****************************************!*\
  !*** ./src/images/scatteredClouds.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"826d0111ad3d4fb9d6ef.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/scatteredClouds.png?");

/***/ }),

/***/ "./src/images/showerRain.png":
/*!***********************************!*\
  !*** ./src/images/showerRain.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e78c8c56627e697f1174.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/showerRain.png?");

/***/ }),

/***/ "./src/images/snow.png":
/*!*****************************!*\
  !*** ./src/images/snow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b3004cf8bc60dbb89df3.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/snow.png?");

/***/ }),

/***/ "./src/images/sunrise.svg":
/*!********************************!*\
  !*** ./src/images/sunrise.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"70fcd41de2e3d2890fac.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/sunrise.svg?");

/***/ }),

/***/ "./src/images/sunset.svg":
/*!*******************************!*\
  !*** ./src/images/sunset.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ff754f835f10af5afa4f.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/sunset.svg?");

/***/ }),

/***/ "./src/images/temp.svg":
/*!*****************************!*\
  !*** ./src/images/temp.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"85f00cdbe1cdb848e69f.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/temp.svg?");

/***/ }),

/***/ "./src/images/thunderstorm.png":
/*!*************************************!*\
  !*** ./src/images/thunderstorm.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fb274bd2c737e393f248.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/thunderstorm.png?");

/***/ }),

/***/ "./src/images/wind.svg":
/*!*****************************!*\
  !*** ./src/images/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd7b1ec9b2c75dc8f0c7.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/wind.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/apiLoad.js");
/******/ 	
/******/ })()
;