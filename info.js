// Info.js
// Info overlay module

export function toggleInfoOverlay() {
    console.log('Loading info...');
    const infoPage = document.getElementById('info-page-overlay');
  
    if (!infoPage) {
      // Create and append the Info page overlay
      const overlay = document.createElement('div');
      overlay.id = 'info-page-overlay';
  
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = 'Close';
      closeBtn.addEventListener('click', () => overlay.remove());
  
      overlay.appendChild(closeBtn);
  
      const infoContent = document.createElement('div');
      infoContent.innerHTML = `
      <h3>About the App</h3>
      <p>This application helps you manage your tasks and projects efficiently.</p>
      <p>Developed by Esau @ Cursebreakers for The Odin Project: JavaScript Course.</p>
      <p>Feel free to explore and organize your tasks!</p>
    `;
  
      overlay.appendChild(infoContent);
  
      document.body.appendChild(overlay);
    } else {
      // Remove the Info page overlay
      infoPage.remove();
      console.log('Hiding info...');
    }
  }