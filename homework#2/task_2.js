/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */

/*
 Задание 2
    В романе N глав. В i-той главе i страниц. Требуется издать роман в K томах так,
 чтобы объем самого «толстого» тома был минимален.
 В каждом томе главы располагаются по порядку своих номеров.

Требуется написать программу, которая найдет количество страниц в самом «толстом» томе.

## Input

pages: number[] // array with amount of pages for any chapter
K: number // amount of tom

## Output

amountOfPages: number; // amount of pages in the most biggest one

## Example

```jsx
 Ex. 1
generateVolumes([1 2 1], 2) // returns: 3

 Ex. 2
generateVolumes([1 2 1 1], 3) // returns: 2
*/

function generateVolumes(pages, volumes) {
  // Определяем главу с максимальным  количеством страниц
  let lower = Math.max(...pages) - 1;
  // Ищем сумму всех страниц в книге
  let upper = pages.reduce((acc, item) => acc + item);

  while (lower + 1 < upper) {
    // Ищем срединное значение
    const middle = Math.floor((lower + upper) / 2);
    // Инициализируем текущий том и последнюю главу
    let currentVolumes = 0;
    let lastChapterPages = 0;

    for (let i = 0; i < pages.length; i++) {
      if (lastChapterPages + pages[i] <= middle) {
        lastChapterPages += pages[i];
      } else {
        currentVolumes++;
        lastChapterPages = pages[i];
      }
    }

    // Если текущий том меньше чем количество всех томов
    if (++currentVolumes <= volumes) {
      upper = middle;
    } else {
      lower = middle;
    }
  }

  return upper;
}

function benchmark(f) {
  console.time('Test#1');
  for (let i = 0; i < 1e6; i++) {
    f([1, 2, 1], 2);
  }
  console.timeEnd('Test#1');

  console.log('=================');

  console.time('Test#2');
  for (let i = 0; i < 1e6; i++) {
    f([1, 2, 1, 1], 3);
  }
  console.timeEnd('Test#2');
}

benchmark(generateVolumes);

console.log(generateVolumes([1, 2, 1], 2)); // 3
console.log(generateVolumes([1, 2, 1, 1], 3)); // 2
