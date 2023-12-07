// Pmnger.js
// Project manager module

import { Project } from './project.js';
import { Todo } from './todo.js';
import { editItem } from './dash.js'

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
            // Clear existing projects before loading from localStorage
            projects.length = 0;
            
            savedProjects.forEach((project) => {
                projects.push(Object.assign(new Project(), project));
          });
        }
    }

      function deleteProject(projectToDelete) {
        const index = projects.findIndex((project) => project === projectToDelete);

        if (index !== -1) {
            projects.splice(index, 1);
            saveProjects();
        }
    }

    return {
        createProject,
        createTodo,
        saveProjects,
        loadProjects,
        getProjects: () => projects,
        deleteProject,
        editItem,
      };
  })();