const validateRules = {
  index: /^\d{5}$/,
  host: /^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/,
  money: /\$[\d]*\.?[\d]*/g,
  date: /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[12])\/[\d]{4}$/
};
const myInput = document.getElementById('validate');
const allGroups = document.querySelectorAll('ul');

function validateData(val) {
  if (val < 0) {
    return;
  } else {
    let currentChildren = allGroups[val].getElementsByTagName('li');
    let pattern = validateRules[allGroups[val].id];
    function func(gr) {
      if (gr < 0) {
        return;
      } else {
        let currentText = currentChildren[gr].innerHTML.toString();
        func(gr - 1)
        if (allGroups[val].id === 'money') {
          let result = currentText.match(pattern);
          for (let e of result) {
            currentChildren[gr].innerHTML = currentChildren[gr].innerHTML.replace(e, `<span>${e}</span>`);
          }
        } else {
          if (validateRules[allGroups[val].id].test(currentText)) {
            currentChildren[gr].style.backgroundColor = 'lightgreen'
          } else {
            currentChildren[gr].style.backgroundColor = 'orangered'
          }
        }
      }
    }
    validateData(val - 1)
    func(currentChildren.length - 1)
  }
}

myInput.addEventListener('click', (val) => { validateData(allGroups.length - 1) } );