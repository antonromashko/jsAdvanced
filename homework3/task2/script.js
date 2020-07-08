const modalWrapper = document.querySelector('.modal');

function countElem(text) {
  let pattern = /\a/g;
  let counter = 0;
  while ((pattern.exec(text.toLowerCase())) != null) {
    counter++
  }
  console.log(counter);
  return counter
}

function toggleMessageWindow() {
  modalWrapper.classList.toggle('modal__visible');
}

function removePreviousUl() {
  if (document.getElementsByTagName('ul').length > 0) {
    let elem = document.getElementsByTagName('ul')[0];
    elem.remove()
  }
}

function closeModal() {
  toggleMessageWindow();
  removePreviousUl();
  document.querySelector('[type="text"]').value = '';
}

function startButton() {
  removePreviousUl();
  let inputValue = document.querySelector('[type="text"]').value;
  if (inputValue) {
    toggleMessageWindow();
    // counting a
    let quantity = countElem(inputValue).toString();
    document.getElementsByTagName('p')[0].innerHTML = `Quantity of "a" is: <strong>${quantity}<\strong>`;
    // creating ul
    let mainDiv = document.getElementById('container');
    let inputValueList = inputValue.split(' ').filter(elem => elem);
    let ulElement = document.createElement('ul');
    console.log(ulElement);
    for (let i = inputValueList.length - 1; i >= 0; i--) {
      let li;
      if (i === inputValueList.length - 1 | i === inputValueList.length - 2) {
        li = inputValueList[i].toLowerCase();
      } else if (i === 0) {
        li = inputValueList[i].toUpperCase();
      } else {
        li = inputValueList[i];
      }
      let liElement = document.createElement('li');
      liElement.innerHTML = li;
      ulElement.insertAdjacentElement("afterbegin", liElement);
    }
    mainDiv.insertAdjacentElement("afterend", ulElement);
  }
}
