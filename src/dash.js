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
    function createEditableField(label, value, callback, options = null) {
        const fieldContainer = document.createElement('div');
        const nameLabel = document.createElement('label');
        nameLabel.textContent = `${label}: `;
        
        let inputField;
    
        if (options) {
            // If options are provided, create a dropdown select menu
            inputField = document.createElement('select');
    
            // Create option elements for each priority level
            options.forEach((option) => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                inputField.appendChild(optionElement);
            });
    
            // Set the selected option based on the current value
            inputField.value = value;
        } else if (typeof value === 'string' || value instanceof String) {
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

           // Add other Todo fields as needed
            editContainer.appendChild(createEditableField('Description', todo.description, (value) => {
                todo.description = value;
                projectManager.saveProjects();
                loadDashboard();
            }));

            editContainer.appendChild(createEditableField('Due Date', todo.dueDate, (value) => {
                const dueDateInput = document.createElement('input');
                dueDateInput.type = 'date';
                dueDateInput.value = value;
                projectManager.saveProjects();
                    loadDashboard();
            }));

            editContainer.appendChild(createEditableField('Priority', todo.priority, (value) => {
                todo.priority = value;
                projectManager.saveProjects();
                    loadDashboard();
                }, ['Lowest', 'Low', 'Normal', 'High', 'Highest'
            ]));

            editContainer.appendChild(createEditableField('Notes', todo.notes, (value) => {
                todo.notes = value;
                projectManager.saveProjects();
                loadDashboard();
            }));

            // Assuming checklist is an array, you can create a text input for it
            editContainer.appendChild(createEditableField('Checklist', todo.checklist.join(', '), (value) => {
                // Convert the comma-separated string back to an array
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
        editBtn.innerHTML = 'Update';
        editBtn.addEventListener('click', () => {
            editItem(existingProject);
        });

        content.appendChild(projectContainer);
        projectContainer.appendChild(editBtn);
    });
  
    // Event listener for creating a new project
    newProjectBtn.addEventListener('click', () => {
        console.log('Creating new project...');

        const newProjectForm = document.createElement('div');
        newProjectForm.classList.add('new-project-form');

        // Function to create an input field within the form
        function createInputField(label, type, options = null) {
            const inputContainer = document.createElement('div');
            const nameLabel = document.createElement('label');
            nameLabel.textContent = `${label}: `;

            let inputField;

            if (type === 'select' && options) {
                inputField = document.createElement('select');
                options.forEach((option) => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    inputField.appendChild(optionElement);
                });
            } else {
                // For other types, create an input field
                inputField = document.createElement('input');
                inputField.type = type;
            }

            inputContainer.appendChild(nameLabel);
            inputContainer.appendChild(inputField);

            console.log('Created input field:', inputField);

            return inputContainer;
        }


        // Create input fields for the new project form
        const projectNameField = createInputField('Project Name', 'text');
        const todoTitleField = createInputField('Todo Title', 'text');
        const todoDescriptionField = createInputField('Todo Description', 'text');
        const todoDueDateField = createInputField('Todo Due Date', 'date'); // You might want to use 'date' type for date input
        const todoPriorityField = createInputField('Todo Priority', 'select', ['Lowest', 'Low', 'Normal', 'High', 'Highest']);
        const todoNotesField = createInputField('Todo Notes', 'text');

        // Create a button to submit the new project form
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Create Project';

        submitButton.addEventListener('click', () => {
            // Get values from the form fields
            const projectName = projectNameField.querySelector('input').value;
            const todoTitle = todoTitleField.querySelector('input').value;
            const todoDescription = todoDescriptionField.querySelector('input').value;
            const todoDueDate = todoDueDateField.querySelector('input').value;
            const todoPriority = todoPriorityField.querySelector('select').value;
            const todoNotes = todoNotesField.querySelector('input').value;

            // Add the new todo to the project
            const newTodo = projectManager.createTodo(
                todoTitle,
                todoDescription,
                todoDueDate,
                todoPriority,
                todoNotes
            );

            // Creates new project with the collected details
            const newProject = projectManager.createProject(projectName);
            newProject.todos.push(newTodo);
            projectManager.saveProjects(); // Save projects after creating a new project
            loadDashboard();

            // Remove the form from the container
            newProjectForm.innerHTML = '';
        });

        // Append input fields and submit button to the form container
        newProjectForm.appendChild(projectNameField);
        newProjectForm.appendChild(todoTitleField);
        newProjectForm.appendChild(todoDescriptionField);
        newProjectForm.appendChild(todoDueDateField);
        newProjectForm.appendChild(todoPriorityField);
        newProjectForm.appendChild(todoNotesField);
        newProjectForm.appendChild(submitButton);

        // Append the form container to the content
        const content = document.getElementById('content');
        content.insertBefore(newProjectForm, newProjectBtn.nextSibling);
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
    deleteBtn.innerHTML = 'Remove';
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
        <strong>Priority:</strong> ${todo.priority}<br>
    `;

    todoItem.appendChild(detailsContainer);
    todoItem.appendChild(toggleButton);


    // Function to update the visibility of todo details
    function updateDetailsVisibility() {
        console.log('showing/hiding details');

        detailsContainer.innerHTML = `
            ${showDetails ? `<strong>${descriptionLabel}</strong> ${todo.description}<br>` : ''}
            ${showDetails ? `<strong>${notesLabel}</strong> ${todo.notes}<br>` : ''}
            ${showDetails ? `<strong>${checklistLabel}</strong> ${todo.checklist.join(', ')}<br>` : ''}
        `;
    }

    return todoItem;
}