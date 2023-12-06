// dash.js
// Dashboard Controller Module

import { projectManager } from './pmnger.js';

export function loadDashboard(project) {
    console.log('loadDashboard functioning...');

    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    // Add UI elements specific to the dashboard
    const pmngrHead = document.createElement('h2');
    pmngrHead.innerHTML = 'Project Manager';
    content.appendChild(pmngrHead);

    const newProjectBtn = document.createElement('button');
    newProjectBtn.innerHTML = 'New Project';
    content.appendChild(newProjectBtn);
    
    // Render any existing projects from localStorage
    projectManager.loadProjects(); // Load projects from localStorage

    const existingProjects = projectManager.getProjects();

    existingProjects.forEach((existingProject) => {
        const projectContainer = createProjectContainer(existingProject);
        content.appendChild(projectContainer);
    });

    // Event listeners for Dash UI
    // Event listener for creating a new project
    newProjectBtn.addEventListener('click', () => {
        console.log('Creating new project...');

        // Collect details for the new project
        const projectName = prompt('Enter the name for the new project...');
        if (projectName) {
            console.log('project naming...');

            // Collect details for the new todo
            console.log('todo collecting...');
            const todoTitle = prompt('Enter the title for the new todo:');
            const todoDescription = prompt('Enter the description for the new todo:');
            const todoDueDate = prompt('Enter the due date for the new todo:');
            const todoPriority = prompt('Enter the priority for the new todo:');
            const todoNotes = prompt('Enter any notes for the new todo:');

            // Add the new todo to the project
            console.log('updating project details...');
            const newTodo = projectManager.createTodo(
                todoTitle,
                todoDescription,
                todoDueDate,
                todoPriority,
                todoNotes
            );

            console.log('project created, reloading dashboard...');

            // Creates new project with the collected details
            const newProject = projectManager.createProject(projectName);
            newProject.todos.push(newTodo);
            projectManager.saveProjects(); // Save projects after creating a new project
            loadDashboard();
        }
    });

    console.log('loadDashboard functioned');

}

export function createProjectContainer(project) {
    console.log('Debug: project object', project);

    if (!project || !project.name || !project.todos) {
        console.error('Error: Invalid project object');
        return;
    }

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    const projectName = document.createElement('h3');
    projectName.innerHTML = project.name;

    // Add delete button to each project card
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete Project';
    deleteBtn.addEventListener('click', () => {
        // Directly call deleteProject from projectManager
        projectManager.deleteProject(project);
        // Reload the dashboard after deletion
        loadDashboard();
    });

    projectContainer.appendChild(projectName);
    projectContainer.appendChild(deleteBtn);

    if (project.todos && Array.isArray(project.todos)) {
        project.todos.forEach((todo) => {
            projectContainer.appendChild(renderTodoItem(todo));
        });
    }

    return projectContainer;
}

export function renderTodoItem(todo) {
    const todoItem = document.createElement('div');

    // Create a toggle button to show/hide details
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = 'More';
    let showDetails = false;

    // Function to toggle the visibility of todo details
    const toggleDetails = () => {
        showDetails = !showDetails;
        updateDetailsVisibility();

         // Update the toggle button text
        toggleButton.innerHTML = showDetails ? 'Less' : 'More';
    };

    toggleButton.addEventListener('click', toggleDetails);

    todoItem.appendChild(toggleButton);

    // Container for todo details
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');
    updateDetailsVisibility(); // Set initial visibility

    todoItem.appendChild(detailsContainer);

    return todoItem;

    // Function to update the visibility of todo details
    function updateDetailsVisibility() {
        const descriptionLabel = 'Description:';
        const priorityLabel = 'Priority:';
        const notesLabel = 'Notes:';
        const checklistLabel = 'Checklist:';
        const dueDateLabel = 'Due Date:';

        detailsContainer.innerHTML = `
            <strong>Title:</strong> ${todo.title}<br>
            <strong>${dueDateLabel}</strong> ${todo.dueDate}<br>
            ${showDetails ? `<strong>${descriptionLabel}</strong> ${todo.description}<br>` : ''}
            ${showDetails ? `<strong>${priorityLabel}</strong> ${todo.priority}<br>` : ''}
            ${showDetails ? `<strong>${notesLabel}</strong> ${todo.notes}<br>` : ''}
            ${showDetails ? `<strong>${checklistLabel}</strong> ${todo.checklist.join(', ')}<br>` : ''}
        `;
        
    }
}