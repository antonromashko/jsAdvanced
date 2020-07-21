const movableDiv = document.getElementById('movable');
const stopButton = document.querySelector('[value="stop"]')
const roadWidth = document.body.scrollWidth
let moveRight;

const currentStep = () => {
  let leftPosition = movableDiv.getBoundingClientRect().left
  if (leftPosition < roadWidth) {
    movableDiv.style.left = (leftPosition + 1).toString() + 'px'
  } else {
    movableDiv.style.left = (-movableDiv.offsetWidth).toString() + 'px'
  }
}

movableDiv.addEventListener('click', () => {
  console.log(moveRight)
  if (!moveRight) {
    moveRight = setInterval(currentStep, 100)
  }
})

stopButton.addEventListener('click', () => {
  clearInterval(moveRight);
  moveRight = null
})