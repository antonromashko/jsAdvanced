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
      let tableFields = []
      for (const key of this.tableKeys) {
        tableFields.push(person[key])
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
}
