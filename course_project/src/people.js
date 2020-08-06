export class People {
  constructor() {
    this.data = null
    this.tableKeys = ['name', 'gender', 'birth_year', 'homeworld', 'films', 'species']
  }

  async getData(page) {
    let response = await fetch(page);
    this.data = await response.json();
    return this.data
  }

  getPerson(name) {
    if (this.data) {
      let person = this.data['results'].filter(card => card.name === name)[0];
      let tableFields = [];
      for (const key of this.tableKeys) {
        tableFields.push(person[key]);
      }
      return tableFields
    }
  }

  fillPage(cards) {
    if (this.data) {
      for (let i = 0; i < this.data['results'].length; i++) {
        cards[i].innerText = this.data['results'][i].name;
      }
    }
  }

  fillMainDiv() {
    let countElements = this.data.length;
    function filler(elem) {
      if (elem < 0) {
        return
      } else {
        let subRowDiv = document.createElement('div');
    subRowDiv.className = 'sub-row';
    for (let i = 0; i < 2; i++) {
      let subItemDiv = document.createElement('div');
      subItemDiv.className = 'sub-item';
      let flipCardInner = document.createElement('div');
      flipCardInner.className = 'flip-card-inner';
      let flipCardFront = document.createElement('div');
      let flipCardBack = document.createElement('div');
      flipCardFront.className = 'flip-card-front';
      flipCardBack.className = 'flip-card-back';
      flipCardInner.insertAdjacentElement('beforeend', flipCardFront);
      flipCardInner.insertAdjacentElement('beforeend', flipCardBack);
      subItemDiv.insertAdjacentElement('afterbegin', flipCardInner);
      subRowDiv.insertAdjacentElement('afterbegin', subItemDiv);
    }
      }
      filler(countElements/2 - 1)
    }
  }
}
