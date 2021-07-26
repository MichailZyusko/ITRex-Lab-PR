/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

/*
 Задание 5
    Компания из N человек собирается пойти в байдарочный поход,
 i-ый человек характеризуется своей массой Mi кг.
 На лодочной базе имеется в наличии неограниченное количество одинаковых байдарок.
 Каждая байдарка может вмещать одного или двух людей. Байдарки имеют грузоподъемность D кг.

    Какое наименьшее количество байдарок придется арендовать компании,
 чтобы всем отправиться в поход?

## Input

N: number[]; // array of people weights
D: number; // array of people weights

## Output

kayakAmount: number;

## Example

```jsx
 Ex. 1
findKayakAmount([50, 74, 60, 82], 135);

 Ex. 2
findKayakAmount([50, 120, 74, 60, 100, 82], 135);
*/

function deleteTrash(arr, res) {
  const resCopy = res.slice();
  while (resCopy.length) {
    arr.splice(arr.indexOf(resCopy[resCopy.length - 1]), 1);
    resCopy.pop();
  }
}

function findKayakAmount(arr, maxLoad) {
  const people = arr;
  people.sort((a, b) => b - a);
  if (people[0] > maxLoad) { // Проверка на реализуемость задачи
    throw new Error('Input correct data');
  }

  let capacity = maxLoad;
  let temp = [];
  const result = [];

  while (people.length) {
    for (const weight of people) {
      if (capacity - weight >= 0) { // Загружаем людей в лодку
        capacity -= weight;
        temp.push(weight);
      }
      if (temp.length === 2) { // В лодке мб только 2 человека
        break;
      }
    }
    result.push(temp);
    deleteTrash(people, temp); // Удаляем из массива людей, которые уже в лодке
    temp = [];
    capacity = maxLoad;
  }

  return result.length;
}

function benchmark(f) {
  console.time('Test#1');
  for (let i = 0; i < 1e6; i++) {
    f([50, 74, 60, 82], 135);
  }
  console.timeEnd('Test#1');

  console.log('================');

  console.time('Test#2');
  for (let i = 0; i < 1e6; i++) {
    f([60, 120, 74, 60, 100, 82], 135);
  }
  console.timeEnd('Test#2');
}

benchmark(findKayakAmount);

console.log(findKayakAmount([50, 74, 60, 82], 135)); // retutns 2
console.log(findKayakAmount([60, 120, 74, 60, 100, 82], 135)); // reurns 5
