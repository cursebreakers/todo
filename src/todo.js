// Todo.js file
// Subtask and project items module

import { projectManager } from './pmnger.js';

export class Todo {
    constructor(title, description, dueDate, priority, notes = '', checklist = []) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.checklist = checklist;
    }
  }

console.log('todo engine functioning...')
