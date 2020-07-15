const myBody = document.body;

const removeDiv = (e) => {
  if (e.target.tagName === 'INPUT') {
    e.target.parentElement.classList.add('remove');
  }
};

myBody.addEventListener('click', removeDiv);
