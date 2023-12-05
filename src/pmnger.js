// Pmnger.js
// Project manager module

import { Project } from './project.js';

export const projectManager = (function () {
    const projects = [];
          
    function createProject(name) {
      const project = new Project(name);
      projects.push(project);
      saveProjects();
      return project;
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
        saveProjects,
        loadProjects,
        getProjects: () => projects,
      };
    })();
