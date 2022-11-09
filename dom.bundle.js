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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMain),\n/* harmony export */   \"loadOther\": () => (/* binding */ loadOther)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _images_temp_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/temp.svg */ \"./src/images/temp.svg\");\n/* harmony import */ var _images_humidity_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/humidity.svg */ \"./src/images/humidity.svg\");\n/* harmony import */ var _images_air_pressure_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/air-pressure.svg */ \"./src/images/air-pressure.svg\");\n/* harmony import */ var _images_sunrise_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/sunrise.svg */ \"./src/images/sunrise.svg\");\n/* harmony import */ var _images_sunset_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/sunset.svg */ \"./src/images/sunset.svg\");\n/* harmony import */ var _images_wind_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/wind.svg */ \"./src/images/wind.svg\");\n\n\n\n\n\n\n\n\n\nfunction loadMain(response) {\n\n    // Div that holds the main information\n    const importantInfo = document.querySelector('.importantInfo');\n\n    // Clear div initially\n    importantInfo.innerHTML = '';\n\n    // Create Elements\n    // City\n    const city = document.createElement('p');\n    city.setAttribute('id', 'cityName');\n    city.innerHTML = response.name;\n\n    // Temp\n    const tempDiv = document.createElement('div');\n    const tempImage = document.createElement('img');\n    tempImage.src = _images_temp_svg__WEBPACK_IMPORTED_MODULE_1__;\n    const tempText = document.createElement('p');\n    tempText.innerHTML = `${response.main.temp}\\u00B0`;\n    tempDiv.appendChild(tempImage);\n    tempDiv.appendChild(tempText);\n\n    // Feels Like\n    const feelsLikeDiv = document.createElement('div');\n    const feelsLikeImage = document.createElement('img');\n    feelsLikeImage.src = _images_temp_svg__WEBPACK_IMPORTED_MODULE_1__;\n    const feelsLikeText = document.createElement('p');\n    feelsLikeText.innerHTML = `Feels Like ${response.main.feels_like}\\u00B0`;\n    feelsLikeDiv.appendChild(feelsLikeImage);\n    feelsLikeDiv.appendChild(feelsLikeText);\n\n    // High\n    const tempHighDiv = document.createElement('div');\n    const tempHighImage = document.createElement('img');\n    tempHighImage.src = _images_temp_svg__WEBPACK_IMPORTED_MODULE_1__;\n    const tempHighText = document.createElement('p');\n    tempHighText.innerHTML = `High of ${response.main.temp_max}\\u00B0`;\n    tempHighDiv.appendChild(tempHighImage);\n    tempHighDiv.appendChild(tempHighText);\n\n    // Low\n    const tempLowDiv = document.createElement('div');\n    const tempLowImage = document.createElement('img');\n    tempLowImage.src = _images_temp_svg__WEBPACK_IMPORTED_MODULE_1__;\n    const tempLowText = document.createElement('p');\n    tempLowText.innerHTML = `Low of ${response.main.temp_min}\\u00B0`;\n    tempLowDiv.appendChild(tempLowImage);\n    tempLowDiv.appendChild(tempLowText);\n\n    // Humidity\n    const humidityDiv = document.createElement('div');\n    const humidityImage = document.createElement('img');\n    humidityImage.src = _images_humidity_svg__WEBPACK_IMPORTED_MODULE_2__;\n    const humidityText = document.createElement('p');\n    humidityText.innerHTML = `${response.main.humidity}%`;\n    humidityDiv.appendChild(humidityImage);\n    humidityDiv.appendChild(humidityText);\n\n    // Pressure\n    const pressureDiv = document.createElement('div')\n    const pressureImage = document.createElement('img');\n    pressureImage.src = _images_air_pressure_svg__WEBPACK_IMPORTED_MODULE_3__;\n    const pressureText = document.createElement('p');\n    pressureText.innerHTML = `${response.main.pressure} inHg`;\n    pressureDiv.appendChild(pressureImage);\n    pressureDiv.appendChild(pressureText);\n\n    // Append elements\n    importantInfo.appendChild(city);\n    importantInfo.appendChild(tempDiv);\n    importantInfo.appendChild(feelsLikeDiv);\n    importantInfo.appendChild(tempHighDiv);\n    importantInfo.appendChild(tempLowDiv);\n    importantInfo.appendChild(humidityDiv);\n    importantInfo.appendChild(pressureDiv);\n};\n\n// Loads the other information on the right side of the page\nasync function loadOther(response, unit) {\n\n    // Div that holds other information\n    const otherInfo = document.querySelector('.otherInfo');\n\n    // Clear div initially \n    otherInfo.innerHTML = '';\n\n    // Create Elements\n    // Sunrise\n    const sunriseDiv = document.createElement('div');\n    const sunriseImage = document.createElement('img');\n    sunriseImage.src = _images_sunrise_svg__WEBPACK_IMPORTED_MODULE_4__;\n    const sunriseText = document.createElement('p');\n    const sunriseTime = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.convertTime)(response.sys.sunrise, response.coord.lat, response.coord.lon);\n    sunriseText.innerHTML = `${sunriseTime}AM`;\n    sunriseDiv.appendChild(sunriseImage);\n    sunriseDiv.appendChild(sunriseText);\n\n    // Sunset\n    const sunsetDiv = document.createElement('div');\n    const sunsetImage = document.createElement('img');\n    sunsetImage.src = _images_sunset_svg__WEBPACK_IMPORTED_MODULE_5__;\n    const sunsetText = document.createElement('p');\n    const sunsetTime = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.convertTime)(response.sys.sunset, response.coord.lat, response.coord.lon);\n    sunsetText.innerHTML = `${sunsetTime}PM`;\n    sunsetDiv.appendChild(sunsetImage);\n    sunsetDiv.appendChild(sunsetText);\n\n    // Wind\n    const windDiv = document.createElement('div');\n    const windImage = document.createElement('img');\n    windImage.src = _images_wind_svg__WEBPACK_IMPORTED_MODULE_6__;\n    const windText = document.createElement('p');\n    if (unit == 'imperial') {\n        windText.innerHTML = `Wind ${response.wind.speed}mph at ${response.wind.deg}\\u00B0`;\n    }\n    else {\n        windText.innerHTML = `Wind ${response.wind.speed}km/h at ${response.wind.deg}\\u00B0`;\n    }\n    windDiv.appendChild(windImage);\n    windDiv.appendChild(windText);\n\n\n    // Weather\n    const weatherDiv = document.createElement('div');\n    const weatherText = document.createElement('p');\n    weatherText.innerHTML = `${response.weather[0].description}`;\n    weatherDiv.appendChild(weatherText);\n\n    // Visibility\n    const visibilityDiv = document.createElement('div');\n    const visibilityText = document.createElement('p');\n    if (unit == 'imperial') {\n        visibilityText.innerHTML = `Visibility ${(response.visibility / 1000)}mi`;\n    }\n    else {\n        visibilityText.innerHTML = `Visibility ${(response.visibility / 1000)}km`;\n    }\n    visibilityDiv.appendChild(visibilityText);\n\n    // Append Elements\n    otherInfo.appendChild(sunriseDiv);\n    otherInfo.appendChild(sunsetDiv);\n    otherInfo.appendChild(windDiv);\n    otherInfo.appendChild(weatherDiv);\n    otherInfo.appendChild(visibilityDiv);\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertTime\": () => (/* binding */ convertTime)\n/* harmony export */ });\nasync function convertTime(timestamp, lat, lon) {\n\n    let time = \"\";\n\n    // API that gets timzeone using latitude and longitude\n    const response = await fetch(`https://api.wheretheiss.at/v1/coordinates/${lat},${lon}`, {mode: 'cors'})\n    const timezoneData = await response.json();\n\n    // Timezone from the api\n    const timezone = timezoneData.timezone_id;\n\n    // Converts date to timezone-specific date\n    function convertTZ(date) {\n        return new Date((typeof date === \"string\" ? new Date(date) : date).toLocaleString(\"en-US\", {timeZone: timezone}));   \n    }\n\n    // Date\n    const date = new Date(timestamp * 1000);\n\n    // Timezone Specific Date\n    const convertedDate = convertTZ(date);\n\n    let hours = convertedDate.getHours();\n\n    // Convert from military to regular time\n    if (hours > 12) hours -= 12;\n\n    // If minitues are single digits, and a zero in the beginning\n    let minutes = convertedDate.getMinutes();\n    if (minutes < 10) {minutes = `0${minutes}`};\n    \n    // Format as hh:mm\n    time = `${hours}:${minutes}`;\n\n    return time;\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/helpers.js?");

/***/ }),

/***/ "./src/images/air-pressure.svg":
/*!*************************************!*\
  !*** ./src/images/air-pressure.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd4cd37600d78b3ae07d.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/air-pressure.svg?");

/***/ }),

/***/ "./src/images/humidity.svg":
/*!*********************************!*\
  !*** ./src/images/humidity.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c7aa443ddb9d5f97854.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/humidity.svg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dom.js");
/******/ 	
/******/ })()
;