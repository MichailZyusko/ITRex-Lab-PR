/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

/*
   Напишите функцию, которая замкнута на стартовое значение (число)
 и при каждом вызове добавляет к этому числу 2 и возвращает его.
   Если предыдущее число кратно 5, то оно делится на 5 и возвращается,
 а все последующие числа увеличиваются на 3.
   Если предыдущее числа кратно 7, то от него отнимается 7 и возвращается,
 а все последующие числа увеличиваются на 1.
*/

const initialValue = 10; // Начальное значение
const callNumber = 10; // Количество вызовов для проверки

function closure(x) {
  let inc = 2; // Начальное значение инкрементора
  return () => {
    console.log(x);
    if (x % 5 === 0 && x !== 0) {
      inc = 3;
      x /= 5;
      return x;
    } if (x % 7 === 0 && x !== 0) {
      inc = 1;
      x -= 7;
      return x;
    }
    x += inc;
    return x;
  };
}

const test = closure(initialValue); // Создаем функцию для теста

for (let i = 0; i < callNumber; i++) {
  test(); // Тестируем
}
