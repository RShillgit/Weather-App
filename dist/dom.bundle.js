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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMain),\n/* harmony export */   \"loadOther\": () => (/* binding */ loadOther)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n\n\nfunction loadMain(response) {\n\n    // Div that holds the main information\n    const importantInfo = document.querySelector('.importantInfo');\n\n    // Clear div initially\n    importantInfo.innerHTML = '';\n    console.log(response)\n\n    // Create Elements\n    // City\n    const city = document.createElement('p');\n    city.innerHTML = response.name;\n\n    // Temp\n    const temp = document.createElement('p');\n    temp.innerHTML = `Temp ${response.main.temp}\\u00B0`;\n\n    // Feels Like\n    const feelsLike = document.createElement('p');\n    feelsLike.innerHTML = `Feels Like ${response.main.feels_like}\\u00B0`;\n\n    // High\n    const tempHigh = document.createElement('p');\n    tempHigh.innerHTML = `High of ${response.main.temp_max}\\u00B0`;\n\n    // Low\n    const tempLow = document.createElement('p');\n    tempLow.innerHTML = `Low of ${response.main.temp_min}\\u00B0`;\n\n    // Humidity\n    const humidity = document.createElement('p');\n    humidity.innerHTML = `Humidity ${response.main.humidity}%`;\n\n    // Pressure\n    const pressure = document.createElement('p');\n    pressure.innerHTML = `Pressure ${response.main.pressure} inHg`;\n \n    // Append elements\n    importantInfo.appendChild(city);\n    importantInfo.appendChild(temp);\n    importantInfo.appendChild(feelsLike);\n    importantInfo.appendChild(tempHigh);\n    importantInfo.appendChild(tempLow);\n    importantInfo.appendChild(humidity);\n    importantInfo.appendChild(pressure);\n};\n\n// Loads the other information on the right side of the page\nfunction loadOther(response) {\n\n    // Div that holds other information\n    const otherInfo = document.querySelector('.otherInfo');\n\n    // Clear div initially \n    otherInfo.innerHTML = '';\n\n    // Create Elements\n    // UV Index\n    const uvIndex = document.createElement('p');\n    uvIndex.innerHTML = `UV Index `;\n\n    // Sunrise\n    const sunrise = document.createElement('p');\n    sunrise.innerHTML = `Sunrise `;\n\n    // Sunset\n    const sunset = document.createElement('p');\n    sunset.innerHTML = `Sunset `;\n\n    // Wind\n    const wind = document.createElement('p');\n    wind.innerHTML = `Wind ${response.wind.speed}mph at ${response.wind.deg}\\u00B0`;\n\n    // Weather\n    const weather = document.createElement('p');\n    weather.innerHTML = `Weather ${response.weather[0].description}`;\n\n    // Visibility\n    const visibility = document.createElement('p');\n    visibility.innerHTML = `Visibility ${(response.visibility / 1000)}mi`;\n\n    // Append Elements\n    otherInfo.appendChild(uvIndex);\n    otherInfo.appendChild(sunrise);\n    otherInfo.appendChild(sunset);\n    otherInfo.appendChild(wind);\n    otherInfo.appendChild(weather);\n    otherInfo.appendChild(visibility);\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertTime\": () => (/* binding */ convertTime)\n/* harmony export */ });\nfunction convertTime(timestamp) {\n\n    const d = new Date(timestamp);\n    let formattedDate = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;\n    const hours = d.getHours().toString().padStart(2, 0);\n    const minutes = d.getMinutes().toString().padStart(2, 0);\n    const formattedTime = `${hours}:${minutes}`;\n\n    return formattedDate = `${formattedDate} ${formattedTime}`;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/helpers.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dom.js");
/******/ 	
/******/ })()
;