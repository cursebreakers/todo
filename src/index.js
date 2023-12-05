// Index.js file

import homePage from './home.js'

function pageEngine() {
    console.log('loading index.js...')
    const content = document.getElementById('content');

    console.log('index.js loaded')
    homePage()
}

pageEngine()
alert('Hello!')
