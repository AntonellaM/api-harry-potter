/* eslint-disable strict */

const openMenuButton = document.querySelector('.trigger-button');
const closeMenuButton = document.querySelector('.close-button');
const navEl = document.querySelector('.nav');

function openMenuClickHandler() {
  navEl.classList.toggle('nav__open');
  closeMenuButton.classList.toggle('nav__open--button');
}

openMenuButton.addEventListener('click', openMenuClickHandler);
closeMenuButton.addEventListener('click', openMenuClickHandler);