// dash.js
// Dashboard/UI Controller Module

import { projectManager } from './pmnger.js';
import { Project } from './project.js';
import { Todo } from './todo.js';

export function editItem(project) {
    console.log('Editing Item...');

    if (!project) {
        console.error('Error: No project provided for editing');
        return;
    }

    // Create a container for the editable fields
    const editContainer = document.createElement('div');

    // Function to create an editable field
    function createEditableField(label, value, callback) {
        const fieldContainer = document.createElement('div');
        const nameLabel = document.createElement('label');
        nameLabel.textContent = `${label}: `;
        
        let inputField;
    
        if (typeof value === 'string' || value instanceof String) {
            // If the value is a string, create a text input
            inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = value;
        } else if (typeof value === 'number' && !isNaN(value)) {
            // If the value is a number, create a number input
            inputField = document.createElement('input');
            inputField.type = 'number';
            inputField.value = value;
        } else {
            // If the value has another type, create a generic input
            inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = value;
        }
    
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.addEventListener('click', () => {
            callback(inputField.value);
        });
    
        fieldContainer.appendChild(nameLabel);
        fieldContainer.appendChild(inputField);
        fieldContainer.appendChild(saveButton);
        console.log('generating field item...');
    
        return fieldContainer;
    }

        if (project instanceof Project) {
            console.log('Project detected...');

            // Render editable fields for Project
            editContainer.appendChild(createEditableField('Name', project.name, (value) => {
                project.name = value;
                project.todos.forEach((todo) => {
                    // Update Todo details when the project name is edited
                    todo.projectName = value;
                });
                projectManager.saveProjects();
                loadDashboard();
            }));
        
            // Iterate through Todo items in the project
            project.todos.forEach((todo) => {
                editContainer.appendChild(createEditableField('Title', todo.title, (value) => {
                    todo.title = value;
                    projectManager.saveProjects();
                    loadDashboard();
                }));

                editContainer.appendChild(createEditableField('Description', todo.description, (value) => {
                todo.description = value;
                projectManager.saveProjects();
                loadDashboard();
            }));

            editContainer.appendChild(createEditableField('Due Date', todo.dueDate, (value) => {
                todo.dueDate = value;
                projectManager.saveProjects();
                loadDashboard();
            }));

            editContainer.appendChild(createEditableField('Priority', todo.priority, (value) => {
                todo.priority = value;
                projectManager.saveProjects();
                loadDashboard();
            }));

            editContainer.appendChild(createEditableField('Notes', todo.notes, (value) => {
                todo.notes = value;
                projectManager.saveProjects();
                loadDashboard();
            }));

            editContainer.appendChild(createEditableField('Checklist', todo.checklist.join(', '), (value) => {
                todo.checklist = value.split(',').map(item => item.trim());
                projectManager.saveProjects();
                loadDashboard();
            }));
            
        });
        
    }

    // Append the editContainer to the project container
    const projectContainer = document.getElementById('content');
    projectContainer.innerHTML = ''; // Clear existing content
    projectContainer.appendChild(editContainer);
    console.log('edit mode active...');
}

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

        const editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        editBtn.addEventListener('click', () => {
            editItem(existingProject);
        });

        content.appendChild(projectContainer);
        projectContainer.appendChild(editBtn);
    });
  
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
    console.log('Rendering Todo');

    let showDetails = false;

    // Container for todo details
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');

    // Create a toggle button to show/hide details
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = 'More';

    // Declare label variables outside the updateDetailsVisibility function
    const descriptionLabel = 'Description:';
    const priorityLabel = 'Priority:';
    const notesLabel = 'Notes:';
    const checklistLabel = 'Checklist:';
    const dueDateLabel = 'Due Date:';

    // Function to toggle the visibility of todo details
    const toggleDetails = () => {
        showDetails = !showDetails;
        updateDetailsVisibility();

        // Update the toggle button text
        toggleButton.innerHTML = showDetails ? 'Less' : 'More';
    };

    toggleButton.addEventListener('click', toggleDetails);

    const todoItem = document.createElement('div');

    // Initially set the Todo Title and Due Date outside the updateDetailsVisibility function
    todoItem.innerHTML = `
        <strong>Title:</strong> ${todo.title}<br>
        <strong>Due Date:</strong> ${todo.dueDate}<br>
    `;

    todoItem.appendChild(detailsContainer);
    todoItem.appendChild(toggleButton);


    // Function to update the visibility of todo details
    function updateDetailsVisibility() {
        console.log('showing/hiding details');

        detailsContainer.innerHTML = `
            ${showDetails ? `<strong>${descriptionLabel}</strong> ${todo.description}<br>` : ''}
            ${showDetails ? `<strong>${priorityLabel}</strong> ${todo.priority}<br>` : ''}
            ${showDetails ? `<strong>${notesLabel}</strong> ${todo.notes}<br>` : ''}
            ${showDetails ? `<strong>${checklistLabel}</strong> ${todo.checklist.join(', ')}<br>` : ''}
        `;
    }

    return todoItem;
}