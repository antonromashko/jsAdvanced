const validateRules = {
  userName: /\S/,
  email: /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i,
  zip: /\d{5}/
};

const init = () => {
  form1.onsubmit = (event) => {
    let invalid = false;
    for (let i of form1.elements) {
      if (i.type === "text" && i.onchange) {
        i.onchange();
        if (i.className === "invalid") invalid = true;
      }
    }
    if (invalid) {
      alert("Допущены ошибки при заполнении формы.");
      event.preventDefault();
    }
  }
}

const change = (elem) => {
  elem.className = validateRules[elem.name].test(elem.value) === false ? "invalid" : "valid"
}

window.addEventListener("load", init, false);