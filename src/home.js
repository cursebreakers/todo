// Home.js
// Home page

import { projectManager } from './pmnger.js';
import { toggleInfoOverlay } from './info.js';
import { loadDashboard } from './dash.js';

export function homePage() {
    console.log('loading home...')

    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
  
    // Tggle the Info page overlay and create access button
  const toggleInfoButton = document.createElement('button');
  toggleInfoButton.innerHTML = 'About';
  toggleInfoButton.addEventListener('click', toggleInfoOverlay);

  const accessBtn = document.createElement('button');
    accessBtn.innerHTML = 'Access';
    accessBtn.addEventListener('click', () => {
        loadApp(); // Load the app using the uiengine
    });

  content.appendChild(accessBtn);
  content.appendChild(toggleInfoButton);

  console.log('home page loaded')
}

export function loadApp() {
  console.log('loadApp functioning...')

  const content = document.getElementById('content');
  content.innerHTML = 'Loading...'; // Clear existing content

  // Call loadDashboard to render the dashboard
  loadDashboard(content);
  console.log('loadApp functioned')
}    

