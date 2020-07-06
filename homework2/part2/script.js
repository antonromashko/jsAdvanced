// Добавьте после дива с id=one еще один див с текстом two и id=two
// На клик по id=two добавьте перед ним див с id - two_first, а див с id=two измените на two_second

const one = document.getElementById('one');
const two = document.createElement('div');

two.id = 'two';
two.insertAdjacentText('afterbegin', two.id);
one.insertAdjacentElement('afterend', two);

two.onclick = function () {
  let twoFirst = document.createElement('div');
  twoFirst.id = 'two_first';
  twoFirst.insertAdjacentText('afterbegin', twoFirst.id);
  two.insertAdjacentElement('beforebegin', twoFirst);
  two.id = 'two_second';
  two.innerText = two.id
};
