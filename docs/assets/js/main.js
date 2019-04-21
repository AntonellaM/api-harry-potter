"use strict";const key="$2a$10$oqBKGTO3mGmTOr/JUo5bzuvJuf8Q.PFdGrya/OuKEPrcl.N2h7fnO",resultSectionEl=document.querySelector(".result-section");let cardEl;function createFrontCard(e){const t=e.name,n=t.split(" ")[0];cardEl=document.createElement("div");const l=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div");cardEl.classList.add("card"),l.classList.add("card__title"),d.classList.add("card__photo"),o.classList.add("card__info");const a=document.createElement("h2"),c=document.createTextNode(t);let r=`url('../../../assets/images/${n}.jpg'), url('../../../assets/images/${e.deathEater}.jpg'), url('../../../assets/images/${e.house}.jpg'), url('../../../assets/images/${e.bloodStatus}.jpg'), url('../../../assets/images/default.jpg')`;d.setAttribute("style",`background-image: ${r}`),resultSectionEl.appendChild(cardEl),cardEl.appendChild(l),cardEl.appendChild(d),l.appendChild(a),a.appendChild(c);const s=document.querySelectorAll(".card__photo");for(const e of s)e.addEventListener("click",photoShowInfoClickHandler)}function photoShowInfoClickHandler(e){e.currentTarget.classList.add("card__hidden"),e.currentTarget.nextElementSibling.classList.remove("card__hidden")}function infoShowPhotoClickHandler(e){e.currentTarget.classList.add("card__hidden"),e.currentTarget.previousElementSibling.classList.remove("card__hidden")}function createBackCard(e){const t=document.createElement("div");t.classList.add("card__back"),t.classList.add("card__hidden");const n=Object.values(e);for(let e=2;e<n.length;e++)if(0!==n[e]&&!0!==n[e]&&!1!==n[e]&&"unknown"!==n[e]){const l=document.createElement("li");l.classList.add("card__list");const d=document.createTextNode(n[e]);l.appendChild(d),t.appendChild(l),cardEl.appendChild(t)}const l=document.querySelectorAll(".card__back");for(const e of l)e.addEventListener("click",infoShowPhotoClickHandler)}fetch(`https://www.potterapi.com/v1/characters/?key=${key}`).then(e=>e.json()).then(function(e){for(const t of e)createFrontCard(t),createBackCard(t);return e});const searchInputEl=document.querySelector(".search__input");function searchKeyUpHandler(e){const t=document.querySelectorAll(".card__title"),n=document.querySelectorAll(".spell-card__title");console.log(n);const l=e.currentTarget.value.toLowerCase();for(const e of t){console.log(e.firstChild),e.firstChild.innerHTML.toLowerCase().includes(l)?e.parentElement.classList.remove("card__hidden"):e.parentElement.classList.add("card__hidden")}for(const e of n){console.log(e.firstChild),e.firstChild.innerHTML.toLowerCase().includes(l)?e.parentElement.classList.remove("spell-card__hidden"):e.parentElement.classList.add("spell-card__hidden")}}searchInputEl.addEventListener("keyup",searchKeyUpHandler);const openMenuButton=document.querySelector(".trigger-button"),closeMenuButton=document.querySelector(".close-button"),navEl=document.querySelector(".nav");function openMenuClickHandler(){navEl.classList.toggle("nav__open"),closeMenuButton.classList.toggle("nav__open--button")}openMenuButton.addEventListener("click",openMenuClickHandler),closeMenuButton.addEventListener("click",openMenuClickHandler);const modalBackEl=document.querySelector(".modal__back"),modalResultEl=document.querySelector(".modal__result"),modalFrontEl=document.querySelector(".modal__front"),sortingHatEl=document.querySelector(".sorting_hat"),tryAgainButton=document.querySelector(".modal__icon--repeat"),closeModalButton=document.querySelector(".modal__icon"),openModalButton=document.querySelector(".open-modal");function printHouse(e){modalResultEl.innerHTML="";const t=document.createElement("h2"),n=document.createTextNode(e),l=document.createElement("p"),d=document.createElement("div"),o=`url('../../../assets/images/${e}.jpg')`;if(d.setAttribute("style",`background-image: ${o}`),d.classList.add("modal__photo"),"Gryffindor"===e){const e=document.createTextNode("“Where dwell the brave at heart, their daring, nerve, and chivalry, set Gryffindors apart”");l.appendChild(e)}else if("Hufflepuff"===e){const e=document.createTextNode("“Where they are just and loyal, those patient Hufflepuffs are true, and unafraid of toil”");l.appendChild(e)}else if("Ravenclaw"===e){const e=document.createTextNode("“If you've a ready mind, where those of wit and learning, will always find their kind.”");l.appendChild(e)}else if("Slytherin"===e){const e=document.createTextNode("\"You'll make your real friends, these cunning folks use any means to achieve their ends.”");l.appendChild(e)}t.appendChild(n),modalResultEl.appendChild(t),modalResultEl.appendChild(l),modalResultEl.appendChild(d),modalBackEl.appendChild(modalResultEl),document.querySelector(".modal__icon--hidden").addEventListener("click",closeModalClickHandler)}function chooseHouseClickHandler(){modalFrontEl.classList.add("modal__hidden"),modalBackEl.classList.remove("modal__hidden"),fetch(`https://www.potterapi.com/v1/sortingHat/?key=${key}`).then(e=>e.json()).then(function(e){printHouse(e)})}function openModalClickHandler(){modalFrontEl.classList.remove("modal__hidden"),window.scrollTo(0,0),openMenuClickHandler()}function closeModalClickHandler(){modalFrontEl.classList.add("modal__hidden"),modalBackEl.classList.add("modal__hidden")}sortingHatEl.addEventListener("click",chooseHouseClickHandler),tryAgainButton.addEventListener("click",chooseHouseClickHandler),closeModalButton.addEventListener("click",closeModalClickHandler),openModalButton.addEventListener("click",openModalClickHandler);const mainTitleEl=document.querySelector(".main__title"),spellsSectionEl=document.querySelector(".spell-section");function spellCardClickHandler(e){e.currentTarget.nextElementSibling.classList.toggle("spell-card__hidden")}function capitalizeFirstWordOfString(e){return e.charAt(0).toUpperCase()+e.slice(1)}function createCardSpell(e){const t=document.createElement("div"),n=document.createElement("div"),l=document.createElement("h2"),d=document.createTextNode(e.spell);l.appendChild(d),n.appendChild(l),t.appendChild(n);const o=document.createElement("div"),a=document.createElement("p"),c=document.createElement("p"),r=document.createTextNode(e.type),s=document.createTextNode(capitalizeFirstWordOfString(e.effect));a.appendChild(r),c.appendChild(s),o.appendChild(a),o.appendChild(s),t.appendChild(o),spellsSectionEl.appendChild(t),t.classList.add("spell-card"),n.classList.add("spell-card__title"),o.classList.add("spell-card__info"),o.classList.add("spell-card__hidden");const i=document.querySelectorAll(".spell-card__title");for(const e of i)e.addEventListener("click",spellCardClickHandler)}"/spells.html"===window.location.pathname?mainTitleEl.innerHTML="Forgot the spell you need? Look for it!":mainTitleEl.innerHTML="What's your favorite Harry Potter character?",fetch(`https://www.potterapi.com/v1/spells/?key=${key}`).then(e=>e.json()).then(function(e){for(const t of e)createCardSpell(t);return e});