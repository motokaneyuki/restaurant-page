import "./styles.css";
import initialPageLoad from "./page-load.js";
import menu from "./menu.js";
import about from "./about.js";

const body = document.querySelector('body');
const content = document.querySelector('#content'); 
const nav = document.querySelector('nav');

nav.addEventListener('click', (e) => {
    if (e.target.innerText === 'Home') {
        content.textContent = '';
        body.classList.remove('menuImg');
        body.classList.remove('aboutImg');
        initialPageLoad();
    } else if (e.target.innerText === 'Menu') {
        body.classList.remove('aboutImg');
        content.textContent = '';
        menu();
    } else if (e.target.innerText === 'About') {
        body.classList.remove('menuImg');
        content.textContent = '';
        about();
    }
})

initialPageLoad();
// menu();