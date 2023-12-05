// uiengine.js
// UI Engine Module

import { projectManager } from './pmnger.js';
import { loadDashboard } from './dash.js';
import { Project } from './project.js';

export function loadApp() {
    console.log('loadApp functioning...')

    const content = document.getElementById('content');
    content.innerHTML = 'Loading...'; // Clear existing content

    // Call loadDashboard to render the dashboard
    loadDashboard(content);
    console.log('loadApp functioned')
}    
