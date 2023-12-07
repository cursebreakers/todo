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

      function editItem(item) {
        console.log('Editing Project...')
        
        if (item instanceof Project) {
          // Prompt for new values for a Project
          const newName = prompt('Enter the updated name for the project:');
          if (newName) {
              item.name = newName;
          }
      } else if (item instanceof Todo) {
          // Prompt for new values for a Todo
          const newTitle = prompt('Enter the updated title for the todo:');
          if (newTitle) {
              item.title = newTitle;
          }

          const newDescription = prompt('Enter the updated description for the todo:');
          if (newDescription) {
              item.description = newDescription;
          }

          const newDueDate = prompt('Enter the updated due date for the todo:');
          if (newDueDate) {
              item.dueDate = newDueDate;
          }

          const newPriority = prompt('Enter the updated priority for the todo:');
          if (newPriority) {
              item.priority = newPriority;
          }

          const newNotes = prompt('Enter the updated notes for the todo:');
          if (newNotes) {
              item.notes = newNotes;
          }
      }

        saveProjects(); // Save projects after editing
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