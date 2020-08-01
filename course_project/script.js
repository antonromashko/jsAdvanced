async function getData() {
  let response = await fetch('https://swapi.dev/api/people/8/');
  let result = await response.json()
  return result
}

// console.log(getData())

const main = document.querySelector('.main')

function clickButton(event) {
  if (event.target.className === 'flip-card-front') {
    let parentElem = event.target.parentElement
    parentElem.style.transform = 'rotateY(180deg)';
    //parentElem.parentElement.style.transform = 'rotateY(180deg)';
    parentElem.style.backgroundColor = 'transparent'
    //parentElem.parentElement.style.backgroundColor = 'transparent'
  }
}

main.addEventListener('click', clickButton)