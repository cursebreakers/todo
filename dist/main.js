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

/***/ "./info.js":
/*!*****************!*\
  !*** ./info.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleInfoOverlay: () => (/* binding */ toggleInfoOverlay)\n/* harmony export */ });\n// Info.js\n// Info overlay module\n\nfunction toggleInfoOverlay() {\n    console.log('Loading info...');\n    const infoPage = document.getElementById('info-page-overlay');\n  \n    if (!infoPage) {\n      // Create and append the Info page overlay\n      const overlay = document.createElement('div');\n      overlay.id = 'info-page-overlay';\n  \n      const closeBtn = document.createElement('button');\n      closeBtn.innerHTML = 'Close';\n      closeBtn.addEventListener('click', () => overlay.remove());\n  \n      overlay.appendChild(closeBtn);\n  \n      const infoContent = document.createElement('div');\n      infoContent.innerHTML = `\n      <h3>About the App</h3>\n      <p>This application helps you manage your tasks and projects efficiently.</p>\n      <p>Developed by Esau @ Cursebreakers for The Odin Project: JavaScript Course.</p>\n      <p>Feel free to explore and organize your tasks!</p>\n    `;\n  \n      overlay.appendChild(infoContent);\n  \n      document.body.appendChild(overlay);\n    } else {\n      // Remove the Info page overlay\n      infoPage.remove();\n      console.log('Hiding info...');\n    }\n  }\n\n//# sourceURL=webpack://todo/./info.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _pmnger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pmnger.js */ \"./src/pmnger.js\");\n/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info.js */ \"./info.js\");\n// Home.js\n// Home page spitter\n\n\n\n\nfunction homePage() {\n    console.log('loading home...')\n\n    const content = document.getElementById('content');\n    content.innerHTML = ''; // Clear existing content\n  \n    const projects = _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.getProjects();\n  \n    // Render projects and todos\n    projects.forEach((project) => {\n      const projectContainer = document.createElement('div');\n      projectContainer.classList.add('project-container');\n  \n      const projectName = document.createElement('h3');\n      projectName.innerHTML = project.name;\n  \n      projectContainer.appendChild(projectName);\n  \n      // Render todos for the project\n      project.todos.forEach((todo) => {\n        const todoItem = document.createElement('div');\n        todoItem.classList.add('todo-item');\n  \n        const todoTitle = document.createElement('p');\n        todoTitle.innerHTML = todo.title;\n  \n        const todoDueDate = document.createElement('p');\n        todoDueDate.innerHTML = `Due: ${todo.dueDate}`;\n  \n        todoItem.appendChild(todoTitle);\n        todoItem.appendChild(todoDueDate);\n  \n        projectContainer.appendChild(todoItem);\n      });\n  \n      content.appendChild(projectContainer);\n    });\n\n    console.log('home page loaded')\n\n    // Add a button or event to toggle the Info page overlay\n  const toggleInfoButton = document.createElement('button');\n  toggleInfoButton.innerHTML = 'About';\n  toggleInfoButton.addEventListener('click', _info_js__WEBPACK_IMPORTED_MODULE_1__.toggleInfoOverlay);\n\n  content.appendChild(toggleInfoButton);\n}\n\n\n\n//# sourceURL=webpack://todo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n// Index.js file\n\n\n\nfunction pageEngine() {\n    console.log('loading index.js...')\n    const content = document.getElementById('content');\n\n    console.log('index.js loaded')\n    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n}\n\npageEngine()\nalert('Hello!')\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/pmnger.js":
/*!***********************!*\
  !*** ./src/pmnger.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectManager: () => (/* binding */ projectManager)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n// Pmnger.js\n// Project manager module\n\n\n\nconst projectManager = (function () {\n    const projects = [];\n          \n    function createProject(name) {\n      const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(name);\n      projects.push(project);\n      saveProjects();\n      return project;\n    }\n          \n    function saveProjects() {\n      // Save projects to localStorage\n      localStorage.setItem('projects', JSON.stringify(projects));\n    }\n          \n    function loadProjects() {\n        // Load projects from localStorage\n        const savedProjects = JSON.parse(localStorage.getItem('projects'));\n        if (savedProjects) {\n          savedProjects.forEach((project) => {\n            projects.push(Object.assign(new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(), project));\n          });\n        }\n      }\n          \n      return {\n        createProject,\n        saveProjects,\n        loadProjects,\n        getProjects: () => projects,\n      };\n    })();\n\n\n//# sourceURL=webpack://todo/./src/pmnger.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n// Project.js\n// Project factory/class module\n\nclass Project {\nconstructor(name) {\n  this.name = name;\n  this.todos = [];\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/project.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;