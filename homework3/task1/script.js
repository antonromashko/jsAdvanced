const lastValue = 30;
const myProgressBar = document.getElementById('svg');
const myTextItem = document.querySelector('text');
let zeroOffset = 942;
let myInterval;
let step = zeroOffset/lastValue;

function myTimer() {
  let currentValue = myTextItem.innerHTML.split(':')[1];
  if(currentValue.startsWith('0')) {
    currentValue = currentValue[1]
  }
  let nextValue = parseInt(currentValue) + 1;
  if (nextValue === lastValue) {
    myTextItem.innerHTML = `00:${nextValue.toString()}`;
    clearInterval(myInterval);
  let pauseButton = document.getElementsByTagName('input')[1];
  pauseButton.id = 'start';
  pauseButton.value = 'Start';
  myProgressBar.style.strokeDashoffset = '942px';
document.querySelector('text').innerHTML = '00:00';
  }
  if (nextValue < 10) {
    nextValue = `0${nextValue.toString()}`;
  }
  else {
    nextValue = nextValue.toString();
  }
  myTextItem.innerHTML = `00:${nextValue}`;
  let currentOffset = zeroOffset;
  zeroOffset = zeroOffset - step;
  myProgressBar.animate([
    { strokeDashoffset: currentOffset.toString() },
    { strokeDashoffset: zeroOffset.toString() }],
    {duration: 1000});
  console.log(zeroOffset);
  return true
}

function endTimer() {
  clearInterval(myInterval);
  let pauseButton = document.getElementsByTagName('input')[1];
  pauseButton.id = 'start';
  pauseButton.value = 'Start';
  myProgressBar.style.strokeDashoffset = '942px';
  zeroOffset = 942;
  document.querySelector('text').innerHTML = '00:00';
}

function startTimer(param) {
   if (param.id === 'pause') {
     clearInterval(myInterval);
     myProgressBar.style.strokeDashoffset = zeroOffset.toString();
     param.value = 'Go on';
     param.id = 'go-on';
   }
   else if (param.id === 'go-on') {
     myInterval = setInterval(myTimer, 1000);
     myProgressBar.style.strokeDashoffset = zeroOffset.toString();
     param.value = 'Pause';
     param.id = 'pause';
   }
   else {
     param.value = 'Pause';
     param.id = 'pause';
     myInterval = setInterval(myTimer, 1000);
   }
}
