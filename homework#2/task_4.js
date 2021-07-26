/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */

/*
    Магический квадрат - это квадратная таблица N x N,
     заполненная N^2 числами от 1 до N^2 таким образом,
     что сумма чисел в каждой строке, каждом столбце и
     на обеих диагоналях одинакова. При этом числа в
     таблице не должны повторяться и каждое из чисел от
     1 до N2 должно в ней присутствовать.

Требуется написать программу, которая по заданному N строит магический квадрат.

## Input

N: number;

## Output

magicSquare: number[][];

## Example

 Ex. 1
genMagicSquare(1); // [1]

 Ex. 2
genMagicSquare(2); // Impossible

2 9 4
7 5 3
6 1 8
 Ex. 3
genMagicSquare(3);
  [
   [4, 9, 2],
   [3, 5, 7],
   [8, 1, 6]
  ]
*/

function fillArray(N) {
  return Array(N).fill(0).map(() => Array(N).fill(0));
}

function magicSquareOdd(n) {
  // Создаем пустой массивЫ
  const array = fillArray(n);

  // создадим координаты для ячеек матрицы
  let x = 0;
  let y = (n - 1) / 2;

  // Заполняем массив согласно правилу, взятого с:
  // http://www.1728.org/magicsq1.htm
  for (let i = 0; i < n * n; i++) {
    position(i + 1);
  }

  function position(value) {
    array[x][y] = value;
    // создание переменных для сохранения текущих значений x и y или текущих положений числа
    const tx = x--;
    const ty = y--;

    // Если вышли за пределы матрицы, то переходим на другую сторону
    if (x < 0) {
      x += n;
    }

    if (y < 0) {
      y += n;
    }

    // Заполняем числа согласно алгоритму
    if (array[x][y] !== 0) {
      x = tx + 1;

      if (x === n) {
        x = 0;
      }

      y = ty;
    }
  }

  return array;
}

/*
    A C
    D B
*/

function magicSquareEven(N) {
  const half = N / 2;
  const halfSquared = half ** 2;
  const array = fillArray(N);
  const tempArray = magicSquareOdd(half);

  // Заполняем квадрат четвертями
  // A см. 100 стр.
  for (let i = 0; i < half; i++) {
    for (let j = 0; j < half; j++) {
      array[i][j] = tempArray[i][j];
    }
  }
  // D см. 100 стр.
  for (let i = 0; i < half; i++) {
    for (let j = half; j < N; j++) {
      array[i][j] = tempArray[i][j - half] + 2 * halfSquared;
    }
  }
  // C см. 100 стр.
  for (let i = half; i < N; i++) {
    for (let j = 0; j < half; j++) {
      array[i][j] = tempArray[i - half][j] + 3 * halfSquared;
    }
  }
  // B см. 100 стр.
  for (let i = half; i < N; i++) {
    for (let j = half; j < N; j++) {
      array[i][j] = tempArray[i - half][j - half] + halfSquared;
    }
  }

  // Заменяем определнные элементы местами, так как сказано в алгоритме:
  // http://www.1728.org/magicsq3.htm
  let shift = 0;
  const x = 0;
  const y = 1;

  for (let i = 6; i < N; i++) {
    if (i % 4 && !(i % 2)) shift++;
  }

  for (
    let j = half - shift;
    j <= half + shift - 1;
    j++
  ) {
    for (let i = 0; i < tempArray.length; i++) {
      const key = array[i][j];
      array[i][j] = array[half + i][j];
      array[half + i][j] = key;
    }
  }

  for (let j = 0; j <= 1; j++) {
    if (!j) {
      const key = array[x][x];
      array[x][x] = array[half][x];
      array[half][x] = key;
    }
    if (j) {
      const key = array[half - y][x];
      array[half - y][x] = array[N - y][x];
      array[N - y][x] = key;
    }
  }

  for (let j = half + 1; j < N - 1; j++) {
    for (let i = 1; i < half - 1; i++) {
      const key = array[i][y];
      array[i][y] = array[half + i][y];
      array[half + i][y] = key;
    }
  }

  return array;
}

function magicSquareSuperEven(N) {
  // Создаем пустой массив
  const array = fillArray(N);
  let low = 1;
  let high = N * N;

  // Заполняем массив согласно правилу взятого с:
  // https://studbooks.net/2397795/matematika_himiya_fizika/postroenie_magicheskih_kvadratov_chetnogo_poryadka
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      array[i][j] = (i % 4 === j % 4 || (i + j) % 4 === 3) ? high-- : low++;
    }
  }

  return array;
}

function genMagicSquare(N) {
  // Рассматриваем частные случаи
  if (N === 1) return [1];
  if (N === 2) return 'Impossible';

  // В зависимости от типа четности строим квадрат
  if (N % 2) return magicSquareOdd(N);
  if (N % 4) return magicSquareEven(N);
  return magicSquareSuperEven(N);
}

console.time('Test');
for (let i = 1; i < 11; i++) {
  console.log(`\n${i}x${i}`);
  console.table(genMagicSquare(i));
}
console.timeEnd('Test');
