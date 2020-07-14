window.addEventListener('load', pageLoadedHandler);

function pageLoadedHandler() {
  const container = document.querySelector('.container');
  const containerRect = container.getBoundingClientRect();
  const duck = document.querySelector('#duck');
  const counter = document.querySelector('#counter');
  const gameOver = document.querySelector('#game-over');
  const restart = document.querySelector('#restart');
  const delay = 2000;

  container.addEventListener('click', shootTheDuck);
  restart.addEventListener('click', shootTheDuck);

  function shootTheDuck(e) {
    if (e.target.parentElement.id === 'duck') {
      counter.innerHTML = parseInt(counter.innerHTML) + 1
    } else if (e.target.id === 'restart') {
      gameOver.classList.remove('appear');
    } else {
      gameOver.classList.add('appear');
      counter.innerHTML = '0';
    }
  }

  function getRandCoords(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  function moveDuck() {
    duck.style.top = getRandCoords(1, containerRect.height) + 'px';
    duck.style.left = getRandCoords(1, containerRect.width) + 'px';
  }

  setInterval(moveDuck, delay)
}