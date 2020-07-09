const validateButton = document.getElementById('validate');

validateButton.onclick = validateData();

const validateRules = {
  index: /^\d{5}$/,
  host: /\a/,
  money: /\a/,
  date: /\0?[1-9]|[12][0-9]|3[01]\/(0?[1-9]|1[12])\/[\d]{4}/
};

function validateData() {

}