/* eslint-disable strict */

const key = '$2a$10$oqBKGTO3mGmTOr/JUo5bzuvJuf8Q.PFdGrya/OuKEPrcl.N2h7fnO';
const resultSectionEl = document.querySelector('.result-section');
let cardEl;

function createFrontCard(person) {
  const fullName = person.name;
  const firstName = fullName.split(' ')[0];

  cardEl = document.createElement('div');
  const cardTitleEl = document.createElement('div');
  const cardPhotoEl = document.createElement('div');
  const cardInfoEl = document.createElement('div');

  cardEl.classList.add('card');
  cardTitleEl.classList.add('card__title');
  cardPhotoEl.classList.add('card__photo');
  cardInfoEl.classList.add('card__info');

  const titleEl = document.createElement('h2');
  const title = document.createTextNode(fullName);

  let url = `url('assets/images/${firstName}.jpg'), url('assets/images/${person.deathEater}.jpg'), url('assets/images/${person.house}.jpg'), url('assets/images/${person.bloodStatus}.jpg'), url('assets/images/default.jpg')`;
  cardPhotoEl.setAttribute('style', `background-image: ${url}`);

  resultSectionEl.appendChild(cardEl);
  cardEl.appendChild(cardTitleEl);
  cardEl.appendChild(cardPhotoEl);
  cardTitleEl.appendChild(titleEl); 
  titleEl.appendChild(title);

  const arrayPhotos = document.querySelectorAll('.card__photo');
  for (const photo of arrayPhotos) {
    photo.addEventListener('click', photoShowInfoClickHandler);
  }
}

function photoShowInfoClickHandler(event) {
  event.currentTarget.classList.add('card__hidden');
  event.currentTarget.nextElementSibling.classList.remove('card__hidden');
}

function infoShowPhotoClickHandler(event) {
  event.currentTarget.classList.add('card__hidden');
  event.currentTarget.previousElementSibling.classList.remove('card__hidden');
}

function createBackCard(person) {
  const cardBackEl = document.createElement('div');
  cardBackEl.classList.add('card__back');
  cardBackEl.classList.add('card__hidden');
  const arrayValues = Object.values(person);

  for (let i = 2; i < arrayValues.length; i++) {
    if (arrayValues[i] !== 0 && arrayValues[i] !== true && arrayValues[i] !== false && arrayValues[i] !== 'unknown') {
      const newLiEl = document.createElement('li');
      newLiEl.classList.add('card__list');
      const valueText = document.createTextNode(arrayValues[i]);
      newLiEl.appendChild(valueText);
      cardBackEl.appendChild(newLiEl);
      cardEl.appendChild(cardBackEl);
    }
  }

  const arrayInfo = document.querySelectorAll('.card__back');
  for (const info of arrayInfo) {
    info.addEventListener('click', infoShowPhotoClickHandler);
  }
}

fetch(`https://www.potterapi.com/v1/characters/?key=${key}`)
  .then(response => response.json())
  .then(function (characters) {
    for (const character of characters) {
      createFrontCard(character);
      createBackCard(character);
    }
    return characters;
  });

const searchInputEl = document.querySelector('.search__input');

function searchKeyUpHandler(event) {
  const nameEl = document.querySelectorAll('.card__title');
  const spellEl = document.querySelectorAll('.spell-card__title');
  console.log(spellEl);
  const search = event.currentTarget.value.toLowerCase();
  for (const name of nameEl) {
    console.log(name.firstChild);
    const nameContent = name.firstChild.innerHTML.toLowerCase();
    if (nameContent.includes(search)) {
      name.parentElement.classList.remove('card__hidden');
    } else {
      name.parentElement.classList.add('card__hidden');
    }
  }

  for (const spell of spellEl) {
    console.log(spell.firstChild);
    const spellContent = spell.firstChild.innerHTML.toLowerCase();
    if (spellContent.includes(search)) {
      spell.parentElement.classList.remove('spell-card__hidden');
    } else {
      spell.parentElement.classList.add('spell-card__hidden');
    }
  }
}

searchInputEl.addEventListener('keyup', searchKeyUpHandler);