/* eslint-disable strict */

const mainTitleEl = document.querySelector('.main__title');
const spellsSectionEl = document.querySelector('.spell-section');

if (window.location.pathname === '/spells.html') {
  mainTitleEl.innerHTML = 'Forgot the spell you need? Look for it!';
} else {
  mainTitleEl.innerHTML = `What's your favorite Harry Potter character?`;
}

function spellCardClickHandler(event) {
  event.currentTarget.nextElementSibling.classList.toggle('spell-card__hidden');
}

function capitalizeFirstWordOfString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function createCardSpell(spell) {
  const spellCardEl = document.createElement('div');
  const spellHeaderEl = document.createElement('div');
  const spellTitleEl = document.createElement('h2');
  const spellTitle = document.createTextNode(spell.spell);
  spellTitleEl.appendChild(spellTitle);
  spellHeaderEl.appendChild(spellTitleEl);
  spellCardEl.appendChild(spellHeaderEl);

  const spellInfoEl = document.createElement('div');
  const spellTypeEl = document.createElement('p');
  const spellEffectEl = document.createElement('p');
  const spellType = document.createTextNode(spell.type);
  const spellEffect = document.createTextNode(capitalizeFirstWordOfString(spell.effect));

  spellTypeEl.appendChild(spellType);
  spellEffectEl.appendChild(spellEffect);
  spellInfoEl.appendChild(spellTypeEl);
  spellInfoEl.appendChild(spellEffect);
  spellCardEl.appendChild(spellInfoEl);

  spellsSectionEl.appendChild(spellCardEl);
  spellCardEl.classList.add('spell-card');
  spellHeaderEl.classList.add('spell-card__title');
  spellInfoEl.classList.add('spell-card__info');
  spellInfoEl.classList.add('spell-card__hidden');

  const arraySpells = document.querySelectorAll('.spell-card__title');

  for (const spell of arraySpells) {
    spell.addEventListener('click', spellCardClickHandler);
  }
}


fetch(`https://www.potterapi.com/v1/spells/?key=${key}`)
  .then(response => response.json())
  .then(function (spells) {
    for (const spell of spells) {
      createCardSpell(spell);
    }
    return spells;
  });

