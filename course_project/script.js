import { People } from './src/people.js'
import { Personage } from './src/personage.js'
import { STAR_WARS } from './consts/main.js'


window.addEventListener('DOMContentLoaded', async () => {

  const people = new People();
  let clickedCard;

  async function newPageList(page) {
    if (page === STAR_WARS.FIRST_PAGE_URL) {
      STAR_WARS.BUTTONS.PREVIOUS_BUTTON.setAttribute('disabled', 'disabled');
    }
    await people.getData(page);
    people.fillPage(STAR_WARS.PAGE_CARDS_DIV);
  }

  newPageList(STAR_WARS.FIRST_PAGE_URL).then();

  async function fillModal(name) {
    let person = people.getPerson(name);
    let personage = new Personage(...person);
    await personage.fillTable();
  }

  async function clickButton(event) {
    if (event.target.className === 'flip-card-front') {
      STAR_WARS.MAIN_DIV.classList.add('disabled')
      let parentElem = event.target.parentElement;
      clickedCard = parentElem;
      await fillModal(event.target.innerHTML);
      parentElem.classList.add('flipped');
      STAR_WARS.PERSONAGE_MODAL.style.display = "block";
    }
  }

  async function nextPageMove(event) {
    if (!people.data['previous']) {
      STAR_WARS.BUTTONS.PREVIOUS_BUTTON.removeAttribute('disabled');
    }
    event.target.setAttribute('disabled', 'disabled')
    let nextPage = people.data['next']
    if (nextPage) {
      STAR_WARS.MAIN_DIV.classList.add('disabled')
      await newPageList(nextPage)
      STAR_WARS.MAIN_DIV.classList.remove('disabled');
      if (people.data['next']) {
        event.target.removeAttribute('disabled')
      }
    }
  }

  async function prevPageMove(event) {
    if (!people.data['next']) {
      STAR_WARS.BUTTONS.NEXT_BUTTON.removeAttribute('disabled');
    }
    event.target.setAttribute('disabled', 'disabled')
    let prevPage = people.data['previous']
    if (prevPage) {
      STAR_WARS.MAIN_DIV.classList.add('disabled')
      await newPageList(prevPage)
      STAR_WARS.MAIN_DIV.classList.remove('disabled');
      if (people.data['previous']) {
        event.target.removeAttribute('disabled')
      }
    }
  }

  function backToList () {
    clickedCard.classList.remove('flipped');
    let tbody = document.querySelector('tbody');
    STAR_WARS.PERSONAGE_MODAL.style.display = "none";
    tbody.remove();
    STAR_WARS.MAIN_DIV.classList.remove('disabled');
  }

  STAR_WARS.MAIN_DIV.addEventListener('click', clickButton);
  STAR_WARS.BUTTONS.NEXT_BUTTON.addEventListener('click', nextPageMove);
  STAR_WARS.BUTTONS.PREVIOUS_BUTTON.addEventListener('click', prevPageMove)
  STAR_WARS.CLOSE_MODAL_BUTTON.addEventListener('click', backToList)

})
