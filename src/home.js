// Home.js
// Home page spitter

import { projectManager } from './pmnger.js';
import { toggleInfoOverlay } from '../info.js';

export default function homePage() {
    console.log('loading home...')

    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
  
    const projects = projectManager.getProjects();
  
    // Render projects and todos
    projects.forEach((project) => {
      const projectContainer = document.createElement('div');
      projectContainer.classList.add('project-container');
  
      const projectName = document.createElement('h3');
      projectName.innerHTML = project.name;
  
      projectContainer.appendChild(projectName);
  
      // Render todos for the project
      project.todos.forEach((todo) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
  
        const todoTitle = document.createElement('p');
        todoTitle.innerHTML = todo.title;
  
        const todoDueDate = document.createElement('p');
        todoDueDate.innerHTML = `Due: ${todo.dueDate}`;
  
        todoItem.appendChild(todoTitle);
        todoItem.appendChild(todoDueDate);
  
        projectContainer.appendChild(todoItem);
      });
  
      content.appendChild(projectContainer);
    });

    console.log('home page loaded')

    // Add a button or event to toggle the Info page overlay
  const toggleInfoButton = document.createElement('button');
  toggleInfoButton.innerHTML = 'About';
  toggleInfoButton.addEventListener('click', toggleInfoOverlay);

  content.appendChild(toggleInfoButton);
}

