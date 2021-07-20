/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* Bызвать функцию crasher так, чтобы из объекта a не удалялось поле bla */

function crasher(a) {
  delete a.bla;
}

const a = {
  bla: 'bla',
};

Object.defineProperty(a, 'bla', { configurable: false }); // Запрещаем удалять свойство объекта
crasher(a);

console.log(a);
