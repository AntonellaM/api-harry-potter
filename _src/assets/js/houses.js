/* eslint-disable strict */

const modalBackEl = document.querySelector('.modal__back');
const modalResultEl  = document.querySelector('.modal__result');
const modalFrontEl = document.querySelector('.modal__front');
const sortingHatEl = document.querySelector('.sorting_hat');
const tryAgainButton = document.querySelector('.modal__icon--repeat');
const closeModalButton = document.querySelector('.modal__icon');
const openModalButton = document.querySelector('.open-modal');

function printHouse(house) {

  modalResultEl.innerHTML = '';
  const houseResultEl = document.createElement('h2');
  const houseResult = document.createTextNode(house);
  const quoteEl = document.createElement('p');
  const imgEl = document.createElement('div');
  const url = `url('../../../assets/images/${house}.jpg')`;
  imgEl.setAttribute('style', `background-image: ${url}`);
  imgEl.classList.add('modal__photo');

  if (house === 'Gryffindor') {
    const quote = document.createTextNode('“Where dwell the brave at heart, their daring, nerve, and chivalry, set Gryffindors apart”');
    quoteEl.appendChild(quote);

  } else if (house === 'Hufflepuff') {
    const quote = document.createTextNode('“Where they are just and loyal, those patient Hufflepuffs are true, and unafraid of toil”');
    quoteEl.appendChild(quote);

  } else if (house === 'Ravenclaw') {
    const quote = document.createTextNode('“If you\'ve a ready mind, where those of wit and learning, will always find their kind.”');
    quoteEl.appendChild(quote);

  } else if (house === 'Slytherin') {
    const quote = document.createTextNode('"You\'ll make your real friends, these cunning folks use any means to achieve their ends.”');
    quoteEl.appendChild(quote);

  }

  houseResultEl.appendChild(houseResult);
  modalResultEl.appendChild(houseResultEl);
  modalResultEl.appendChild(quoteEl);
  modalResultEl.appendChild(imgEl);
  modalBackEl.appendChild(modalResultEl);

  const closeModalButton = document.querySelector('.modal__icon--hidden');
  closeModalButton.addEventListener('click', closeModalClickHandler);
}

function chooseHouseClickHandler() {
  modalFrontEl.classList.add('modal__hidden');
  modalBackEl.classList.remove('modal__hidden');

  fetch(`https://www.potterapi.com/v1/sortingHat/?key=${key}`)
    .then(response => response.json())
    .then(function (data) {
      printHouse(data);
    });
}

function openModalClickHandler() {
  modalFrontEl.classList.remove('modal__hidden');
  window.scrollTo(0, 0);
  openMenuClickHandler();
}

function closeModalClickHandler() {
  modalFrontEl.classList.add('modal__hidden');
  modalBackEl.classList.add('modal__hidden');
}

sortingHatEl.addEventListener('click', chooseHouseClickHandler);
tryAgainButton.addEventListener('click', chooseHouseClickHandler);
closeModalButton.addEventListener('click', closeModalClickHandler);
openModalButton.addEventListener('click', openModalClickHandler);