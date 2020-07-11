const allContainers = document.getElementsByTagName('div');

function getContainerTextColor(lst) {
  let brightness = ((lst[0] * 299) + (lst[1] * 587) + (lst[2] * 114)) / 1000;
  return (brightness > 125) ? 'black' : 'white';
}

function getRandomColor(max) {
  let rgbList = [];
  for (let i = 0; i < 3; i++) {
    rgbList[i] = ~~(Math.random() * ~~max);
  }
  let containerColor = `rgb(${rgbList[0]}, ${rgbList[1]}, ${rgbList[2]})`;
  let containerTextColor = getContainerTextColor(rgbList);
  return [containerColor, containerTextColor]
}

for (let i = 0; i < allContainers.length; i++) {
  allContainers[i].onmouseover = function () {
    let allColors = new Set();
    for (let j = 0; j < allContainers.length; j++) {
      allColors.add(getComputedStyle(allContainers[j]).backgroundColor)
    }
    let newColors = getRandomColor(256);
    let containerColor = newColors[0];
    let containerTextColor = newColors[1];

    while (allColors.has(containerColor)) {
      console.log('Random existing color');
      containerColor = getRandomColor(256);
    }
    this.style.backgroundColor = containerColor;
    this.innerHTML = containerColor;
    this.style.color = containerTextColor;
  }
}
window.onbeforeunload = function () {
  return "Oops"
};