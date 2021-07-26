/* eslint-disable linebreak-style */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

/*
    Имеется ряд из N лампочек, которые пронумерованы от 1 до N.
 Изначально ни одна из лампочек не горит.
 Далее происходит K последовательных линейных инверсий этого ряда ламп.
 Под линейной инверсией понимается инверсия каждой P-й лампочки в ряде.
 Например, если P=3, то произойдет инверсия 3й, 6й, 9й и т.д. лампочек.

    Требуется определить: сколько горящих лампочек останется
 после реализации всех заданных линейных инверсий?

## Input

N: number // amount of bulbs
P: number[] // array of P's

## Output

amout: number // amount of burning light bulb

## Example

Ex. 1
bulbs(20, [2,3,8]); // returns 8

Ex. 2
bulbs(172, [19 2 7 13 40 23 16 1 45 9]) */

// Оптимальное по времени
function bulbsTime(n, array) {
  const arr = new Array(n);
  arr.fill(false);

  array.forEach((el) => { // Изменяем все кратные индексы на true
    for (let i = el; i <= n; i += el) {
      arr[i] = !arr[i];
    }
  });

  return arr.reduce((acc, item) => {
    if (item) {
      acc++;
    }
    return acc;
  }, 0);
}

// Оптимальное по памяти
function bulbsMemory(n, array) {
  const set = new Set();

  array.forEach((el) => { // Добавляем элементы  в множество
    for (let i = el; i <= n; i += el) {
      set.has(i) ? set.delete(i) : set.add(i);
    }
  });

  return set.size;
}

function benchmark(f) {
  {
    console.time('Test#1');
    const start = process.memoryUsage.rss();
    for (let i = 0; i < 1e6; i++) {
      f(20, [2, 3, 8]);
    }
    console.log(`MemoryUsage: ${Math.round((start - process.memoryUsage().heapUsed) / 1024 / 1024 * 100) / 100} MB`);
    console.timeEnd('Test#1');
  }
  console.log('=================');
  {
    console.time('Test#2');
    const start = process.memoryUsage.rss();
    for (let i = 0; i < 1e6; i++) {
      f(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9]);
    }
    console.log(`MemoryUsage: ${Math.round((start - process.memoryUsage().heapUsed) / 1024 / 1024 * 100) / 100} MB`);
    console.timeEnd('Test#2');
  }
}

// console.log('Time');
// benchmark(bulbsTime); // or benchmark(bulbsMemory);
// console.log();

console.log('Memory');
benchmark(bulbsMemory); // or benchmark(bulbsMemory);
console.log();

// В массиве могут быть только натуральные числа
// console.log('===========================');
// console.log(bulbsMemory(20, [2, 3, 8])); // returns 8
// console.log(bulbsMemory(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9]));// returns 99
