const validateRules = {
  index: /^\d{5}$/,
  host: /^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/,
  money: /\$[\d]*\.?[\d]*/g,
  date: /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[12])\/[\d]{4}$/
};

function validateData() {
  let allGroups = document.querySelectorAll('ul');
  for (let i = 0; i <= allGroups.length - 1; i++) {
    let currentChildren = allGroups[i].getElementsByTagName('li');
    let pattern = validateRules[allGroups[i].id];
    for (let j = 0; j <= currentChildren.length - 1; j++) {
      let currentText = currentChildren[j].innerHTML.toString();
      if (allGroups[i].id === 'money') {
        let result = currentText.match(pattern);
        for (let e = 0; e < result.length; e++) {
          currentChildren[j].innerHTML = currentChildren[j].innerHTML.replace(result[e], `<span>${result[e]}</span>`);
        }
      } else {
        if (validateRules[allGroups[i].id].test(currentText)) {
          currentChildren[j].style.backgroundColor = 'lightgreen'
        } else {
          currentChildren[j].style.backgroundColor = 'orangered'
        }
      }
    }
  }
}
