// Pmnger.js
// Project manager module

import { Project } from './project.js';
import { Todo } from './todo.js';

export const projectManager = (function () {
    const projects = [];
          
    function createProject(name) {
      const project = new Project(name);
      projects.push(project);
      saveProjects();
      return project;
    }

    function createTodo(title, description, dueDate, priority, notes = '', checklist = []) {
      return new Todo(title, description, dueDate, priority, notes, checklist);
  }

    function saveProjects() {
      // Save projects to localStorage
      localStorage.setItem('projects', JSON.stringify(projects));
    }

    function loadProjects() {
        // Load projects from localStorage
        const savedProjects = JSON.parse(localStorage.getItem('projects'));
        if (savedProjects) {
          savedProjects.forEach((project) => {
            projects.push(Object.assign(new Project(), project));
          });
        }
      }
          
      return {
        createProject,
        createTodo, // Make sure this line is present
        saveProjects,
        loadProjects,
        getProjects: () => projects,
      };
    })();
