// Index.js file

import homePage from './home.js'
import infoPage from './info.js'

function pageEngine() {
    console.log('loading index.js...')
    const content = document.getElementById('content');
    const info = document.getElementById('info');
    const home = document.getElementById('home');

    home.addEventListener('click', () => {
        content.innerHTML = '';
        homePage();
    });

    info.addEventListener('click', () => {
        content.innerHTML = '';
        infoPage();
    });

    console.log('index.js loaded')
    homePage()
}

pageEngine()
alert('Hello!')
