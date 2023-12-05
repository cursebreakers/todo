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

/***/ "./src/dash.js":
/*!*********************!*\
  !*** ./src/dash.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectContainer: () => (/* binding */ createProjectContainer),\n/* harmony export */   loadDashboard: () => (/* binding */ loadDashboard),\n/* harmony export */   renderTodoItem: () => (/* binding */ renderTodoItem)\n/* harmony export */ });\n/* harmony import */ var _pmnger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pmnger.js */ \"./src/pmnger.js\");\n// dash.js\n// Dashboard Controller Module\n\n\n\nfunction loadDashboard(project) {\n    console.log('loadDashboard functioning...');\n\n    const content = document.getElementById('content');\n    content.innerHTML = ''; // Clear existing content\n\n    // Add UI elements specific to the dashboard\n    const pmngrHead = document.createElement('h2');\n    pmngrHead.innerHTML = 'Project Manager';\n    content.appendChild(pmngrHead);\n\n    const newProjectBtn = document.createElement('button');\n    newProjectBtn.innerHTML = 'New Project';\n    content.appendChild(newProjectBtn);\n    \n    // Render any existing projects from localStorage\n    _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.loadProjects(); // Load projects from localStorage\n\n    const existingProjects = _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.getProjects();\n\n    existingProjects.forEach((existingProject) => {\n        const projectContainer = createProjectContainer(existingProject);\n        content.appendChild(projectContainer);\n    });\n\n    // Event listeners for Dash UI\n    // Event listener for creating a new project\n    newProjectBtn.addEventListener('click', () => {\n        console.log('Creating new project...');\n\n        // Collect details for the new project\n        const projectName = prompt('Enter the name for the new project...');\n        if (projectName) {\n            console.log('project naming...');\n\n            // Collect details for the new todo\n            console.log('todo collecting...');\n            const todoTitle = prompt('Enter the title for the new todo:');\n            const todoDescription = prompt('Enter the description for the new todo:');\n            const todoDueDate = prompt('Enter the due date for the new todo:');\n            const todoPriority = prompt('Enter the priority for the new todo:');\n            const todoNotes = prompt('Enter any notes for the new todo:');\n\n            // Add the new todo to the project\n            console.log('updating project details...');\n            const newTodo = _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.createTodo(\n                todoTitle,\n                todoDescription,\n                todoDueDate,\n                todoPriority,\n                todoNotes\n            );\n\n            console.log('project created, reloading dashboard...');\n\n            // Creates new project with the collected details\n            const newProject = _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.createProject(projectName);\n            newProject.todos.push(newTodo);\n            _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.saveProjects(); // Save projects after creating a new project\n            loadDashboard();\n        }\n    });\n\n    console.log('loadDashboard functioned');\n\n}\n\nfunction createProjectContainer(project) {\n    console.log('Debug: project object', project);\n\n    if (!project || !project.name || !project.todos) {\n        console.error('Error: Invalid project object');\n        return;\n    }\n\n    const projectContainer = document.createElement('div');\n    projectContainer.classList.add('project-container');\n\n    const projectName = document.createElement('h3');\n    projectName.innerHTML = project.name;\n\n    // Add delete button to each project card\n    const deleteBtn = document.createElement('button');\n    deleteBtn.innerHTML = 'Delete Project';\n    deleteBtn.addEventListener('click', () => {\n        // Directly call deleteProject from projectManager\n        _pmnger_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.deleteProject(project);\n        // Reload the dashboard after deletion\n        loadDashboard();\n    });\n\n    projectContainer.appendChild(projectName);\n    projectContainer.appendChild(deleteBtn);\n\n    if (project.todos && Array.isArray(project.todos)) {\n        project.todos.forEach((todo) => {\n            projectContainer.appendChild(renderTodoItem(todo));\n        });\n    }\n\n    return projectContainer;\n}\n\nfunction renderTodoItem(todo) {\n    const todoItem = document.createElement('div');\n    todoItem.innerHTML = `Todo: ${todo.title}, Description: ${todo.description}`;\n    // Add more code to display other todo details as needed\n    return todoItem;\n}\n\n//# sourceURL=webpack://todo/./src/dash.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _pmnger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pmnger.js */ \"./src/pmnger.js\");\n/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.js */ \"./src/info.js\");\n/* harmony import */ var _uiengine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiengine.js */ \"./src/uiengine.js\");\n// Home.js\n// Home page\n\n\n\n\n\nfunction homePage() {\n    console.log('loading home...')\n\n    const content = document.getElementById('content');\n    content.innerHTML = ''; // Clear existing content\n  \n    // Tggle the Info page overlay and create access button\n  const toggleInfoButton = document.createElement('button');\n  toggleInfoButton.innerHTML = 'About';\n  toggleInfoButton.addEventListener('click', _info_js__WEBPACK_IMPORTED_MODULE_1__.toggleInfoOverlay);\n\n  const accessBtn = document.createElement('button');\n    accessBtn.innerHTML = 'Access';\n    accessBtn.addEventListener('click', () => {\n        (0,_uiengine_js__WEBPACK_IMPORTED_MODULE_2__.loadApp)(); // Load the app using the uiengine\n    });\n\n  content.appendChild(accessBtn);\n  content.appendChild(toggleInfoButton);\n\n  console.log('home page loaded')\n}\n\n\n\n//# sourceURL=webpack://todo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n// Index.js file\n\n\n\nfunction pageEngine() {\n    console.log('loading index.js...')\n    const content = document.getElementById('content');\n\n    console.log('index.js loaded')\n    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n}\n\npageEngine()\nalert('Hello!')\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleInfoOverlay: () => (/* binding */ toggleInfoOverlay)\n/* harmony export */ });\n// Info.js\n// Info overlay module\n\nfunction toggleInfoOverlay() {\n    console.log('Loading info...');\n    const infoPage = document.getElementById('info-page-overlay');\n  \n    if (!infoPage) {\n      // Create and append the Info page overlay\n      const overlay = document.createElement('div');\n      overlay.id = 'info-page-overlay';\n  \n      const closeBtn = document.createElement('button');\n      closeBtn.innerHTML = 'Close';\n      closeBtn.addEventListener('click', () => overlay.remove());\n  \n      overlay.appendChild(closeBtn);\n  \n      const infoContent = document.createElement('div');\n      infoContent.innerHTML = `\n      <h3>About the App</h3>\n      <p>This application helps you manage your tasks and projects efficiently.</p>\n      <p>Developed by Esau @ Cursebreakers for The Odin Project: JavaScript Course.</p>\n      <p>Feel free to explore and organize your tasks!</p>\n    `;\n  \n      overlay.appendChild(infoContent);\n  \n      document.body.appendChild(overlay);\n    } else {\n      // Remove the Info page overlay\n      infoPage.remove();\n      console.log('Hiding info...');\n    }\n  }\n\n//# sourceURL=webpack://todo/./src/info.js?");

/***/ }),

/***/ "./src/pmnger.js":
/*!***********************!*\
  !*** ./src/pmnger.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectManager: () => (/* binding */ projectManager)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n// Pmnger.js\n// Project manager module\n\n\n\n\nconst projectManager = (function () {\n    const projects = [];\n          \n    function createProject(name) {\n      const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(name);\n      projects.push(project);\n      saveProjects();\n      return project;\n    }\n\n    function createTodo(title, description, dueDate, priority, notes = '', checklist = []) {\n      return new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, dueDate, priority, notes, checklist);\n  }\n\n    function saveProjects() {\n      // Save projects to localStorage\n      localStorage.setItem('projects', JSON.stringify(projects));\n    }\n\n    function loadProjects() {\n        // Load projects from localStorage\n        const savedProjects = JSON.parse(localStorage.getItem('projects'));\n        if (savedProjects) {\n            // Clear existing projects before loading from localStorage\n            projects.length = 0;\n            \n            savedProjects.forEach((project) => {\n                projects.push(Object.assign(new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(), project));\n          });\n        }\n      }\n\n      function deleteProject(projectToDelete) {\n        const index = projects.findIndex((project) => project === projectToDelete);\n\n        if (index !== -1) {\n            projects.splice(index, 1);\n            saveProjects();\n        }\n    }\n\n    return {\n        createProject,\n        createTodo,\n        saveProjects,\n        loadProjects,\n        getProjects: () => projects,\n        deleteProject,\n    };\n})();\n\n//# sourceURL=webpack://todo/./src/pmnger.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n// Project.js\n// Project factory/class module\n\nclass Project {\nconstructor(name) {\n  this.name = name;\n  this.todos = [];\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _pmnger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pmnger.js */ \"./src/pmnger.js\");\n// Todo.js file\n// Subtask and project items module\n\n\n\nclass Todo {\n    constructor(title, description, dueDate, priority, notes = '', checklist = []) {\n      this.title = title;\n      this.description = description;\n      this.dueDate = dueDate;\n      this.priority = priority;\n      this.notes = notes;\n      this.checklist = checklist;\n    }\n  }\n\nconsole.log('todo engine functioning...')\n\n\n//# sourceURL=webpack://todo/./src/todo.js?");

/***/ }),

/***/ "./src/uiengine.js":
/*!*************************!*\
  !*** ./src/uiengine.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadApp: () => (/* binding */ loadApp)\n/* harmony export */ });\n/* harmony import */ var _pmnger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pmnger.js */ \"./src/pmnger.js\");\n/* harmony import */ var _dash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dash.js */ \"./src/dash.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n// uiengine.js\n// UI Engine Module\n\n\n\n\n\nfunction loadApp() {\n    console.log('loadApp functioning...')\n\n    const content = document.getElementById('content');\n    content.innerHTML = 'Loading...'; // Clear existing content\n\n    // Call loadDashboard to render the dashboard\n    (0,_dash_js__WEBPACK_IMPORTED_MODULE_1__.loadDashboard)(content);\n    console.log('loadApp functioned')\n}    \n\n\n//# sourceURL=webpack://todo/./src/uiengine.js?");

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