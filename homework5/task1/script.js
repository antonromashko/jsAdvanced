const myHref = document.querySelector('a');
const myDiv = document.querySelector('div');
const myButton = document.querySelector('input');

const showDiv = () => {
  myDiv.classList.toggle('appear')
};

const cancel = () => {
  myHref.removeEventListener('click', showDiv)
};

myHref.addEventListener('click', showDiv);
myButton.addEventListener('click', cancel);
