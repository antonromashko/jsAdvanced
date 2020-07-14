const inputButton = document.querySelectorAll('input');
const removeDiv = (e) => {
  e.target.parentElement.classList.add('remove')
};

for (let i = 0; i < inputButton.length; i++) {
  inputButton[i].addEventListener('click', removeDiv)
}