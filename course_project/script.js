import { PeoplePassport, Personage, ApiData } from './src/passport.js'


// async function getData(page) {
//   let response = await fetch(page);
//   return await response.json();
// }

window.addEventListener('DOMContentLoaded', async () => {
  const main = document.querySelector('.main')
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];
  let pageCards = document.querySelectorAll('div.flip-card-front');
  let clickedCard;
  let firstPage = 'https://swapi.dev/api/people/?page=1'
  const apiData = new ApiData()

  let data = await apiData.getData(firstPage)
  const people = new PeoplePassport(data)
  people.fillPage(pageCards)

  async function fillCard(name) {
    let person = people.getPerson(name);
    let personage = new Personage(...person)
    await personage.fillTable()
  }
  async function clickButton(event) {
  if (event.target.className === 'flip-card-front') {
    let parentElem = event.target.parentElement;
    clickedCard = parentElem;
    await fillCard(event.target.innerHTML);
    parentElem.classList.add('flipped');
    modal.style.display = "block";
  }
}

  main.addEventListener('click', clickButton)

  span.onclick = function() {
  clickedCard.classList.remove('flipped')
  let tbody = document.querySelector('tbody')
  modal.style.display = "none";
  tbody.remove()

}

} )

let pageData = {}

// previousButton.addEventListener('click', function() {
//   main.style.animationName = 'mainaway';
//   main.style.animationDuration = '2s';
//   second.classList.remove('second');
//   main.style.animationName = 'secondway';
//   main.style.animationDuration = '2s';
//   main.classList.add('second');
// })
