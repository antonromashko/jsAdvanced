const inputElem = document.querySelector('[type="text"]');
const okButton = document.querySelector('[type="button"]');

okButton.addEventListener('click', () => {
  let clientDate = new Date(inputElem.value);
  alert(clientDate.getDay() === 0 ? 7: clientDate.getDay())
  inputElem.value = ''
})



