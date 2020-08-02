async function getData() {
  let response = await fetch('https://swapi.dev/api/people/?page=1');
  let result = await response.json()
  let pageCards = document.querySelectorAll('div.flip-card-front');
  console.log(pageCards)
  for (let i=0; i<result['results'].length; i++) {
    pageCards[i].innerText = result['results'][i].name
  }
  return result
}
window.addEventListener('load', getData)

const main = document.querySelector('.main')
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
let clickedCard;

function clickButton(event) {
  console.log(event.target.parentElement)
  if (event.target.className === 'flip-card-front') {
    let parentElem = event.target.parentElement
    clickedCard = parentElem
    parentElem.classList.add('flipped')
    modal.style.display = "block";
  }
}

main.addEventListener('click', clickButton)


span.onclick = function() {
  clickedCard.classList.remove('flipped')
  modal.style.display = "none";

}
