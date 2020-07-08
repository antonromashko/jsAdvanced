const myProgressBar = document.getElementById('svg');
const myTextItem = document.querySelector('text');

const defaultParams = {
  startButton: 'Start',
  pauseButton: 'Pause',
  goOnButton: 'Go on',
  zeroOffset: '942px'
};

// const lastValue = 0; // reverse mode
// const firstValue = 30;

const firstValue = 0; // normal mode
const lastValue = 30;

let minimalOffset = 942;
let myInterval;
let step = minimalOffset / Math.max(lastValue, firstValue);

myTextItem.innerHTML = firstValue.toString();

function changeButtonTo(newButtonName, textVal, offset = false) {
  let currentButton = document.getElementsByTagName('input')[1];
  currentButton.id = newButtonName.toLowerCase();
  currentButton.value = newButtonName;
  myProgressBar.style.strokeDashoffset = defaultParams.zeroOffset;
  document.querySelector('text').innerHTML = textVal;
  if (offset) {
    minimalOffset = 942;
  }
}

function myTimer() {
  let currentValue = myTextItem.innerHTML;
  let nextValue;
  if (lastValue === 30) {
    nextValue = parseInt(currentValue) + 1;
  }
  else {
    nextValue = parseInt(currentValue) - 1;
  }
  if (nextValue === lastValue) {
    myTextItem.innerHTML = nextValue.toString();
    clearInterval(myInterval);
    changeButtonTo(defaultParams.startButton, firstValue);
  }
  myTextItem.innerHTML = nextValue.toString();
  let currentOffset = minimalOffset;
  minimalOffset = minimalOffset - step;
  myProgressBar.animate([
      {strokeDashoffset: currentOffset.toString()},
      {strokeDashoffset: minimalOffset.toString()}],
    {duration: 1000});
}

function endTimer() {
  clearInterval(myInterval);
  changeButtonTo(defaultParams.startButton, firstValue, true);
  myTextItem.innerHTML = firstValue.toString();
}

function runPauseButton(param) {
  if (param.id === defaultParams.pauseButton.toLowerCase()) {
    clearInterval(myInterval);
    myProgressBar.style.strokeDashoffset = minimalOffset.toString();
    param.value = defaultParams.goOnButton;
    param.id = defaultParams.goOnButton.toLowerCase().replace(' ', '-');
  } else {
    if (param.id === defaultParams.startButton.toLowerCase()) {
      minimalOffset = 942;
      myTextItem.innerHTML = firstValue.toString();
    }
    myInterval = setInterval(myTimer, 1000);
    param.value = defaultParams.pauseButton;
    param.id = defaultParams.pauseButton.toLowerCase();
    myProgressBar.style.strokeDashoffset = minimalOffset.toString();
  }
}
