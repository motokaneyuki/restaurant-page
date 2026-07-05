import "./styles.css";
import initialPageLoad from "./page-load.js";
import menu from "./menu.js";

const body = document.querySelector('body');
const content = document.querySelector('#content'); 
const nav = document.querySelector('nav');

nav.addEventListener('click', (e) => {
    if (e.target.innerText === 'Home') {
        content.textContent = '';
        body.classList.remove('menuImg');
        initialPageLoad();
    } else if (e.target.innerText === 'Menu') {
        content.textContent = '';
        menu();
    }
})

initialPageLoad();
// menu();