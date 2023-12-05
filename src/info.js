// Info.js
// Info page spitter

export default function infoPage() {
    console.log('loading info...')
    const content = document.getElementById('content');
    const tagLine = document.createElement('h3');
    let detail = document.createElement('p');
    const due = document.createElement('p');

    tagLine.innerHTML = 'Made by:';
    detail.innerHTML = 'Esau @ Cursebreakers';
    due.innerHTML = 'For: The Odin Project: JavaScript Course';
    
    content.appendChild(tagLine)
    content.appendChild(detail)
    content.appendChild(due)

    
    console.log('info page loaded')
}
