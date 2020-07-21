class Man {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log(this.name, 'walk');
  }

  eat() {
    console.log(this.name, 'eat');
  }

  drink() {
    console.log(this.name, 'drink');
  }
}

class Soldier extends Man {
  constructor(name) {
    super(name)
  }

  shoot() {
    console.log(this.name, 'shoot');
  }
}

class Doctor extends Man {
  constructor(name) {
    super(name)
  }

  cure() {
    console.log(this.name, 'cure');
  }
}

const man = new Man('Man')
const soldier = new Soldier('Soldier')
const doctor = new Doctor('Doctor')

console.group('Man')
man.walk()
man.eat()
man.drink()
console.groupEnd()
console.group('Soldier')
soldier.walk()
soldier.eat()
soldier.drink()
soldier.shoot()
console.groupEnd()
console.group('Doctor')
doctor.walk()
doctor.eat()
doctor.drink()
doctor.cure()
console.groupEnd()

