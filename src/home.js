// Home.js file

export default function homePage() {
    console.log('loading home.js...')
    const content = document.getElementById('content');
    const tagLine = document.createElement('h3');
    let detail = document.createElement('p');
    const due = document.createElement('p');

    tagLine.innerHTML = 'Random Task';
    detail.innerHTML = 'Task details';
    due.innerHTML = 'Due Today';
    
    content.appendChild(tagLine)
    content.appendChild(detail)
    content.appendChild(due)

    console.log('home.js loaded')
}