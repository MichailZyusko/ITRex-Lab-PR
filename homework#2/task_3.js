/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */

/*
    Нужно сделать N копий одного документа. В нашем распоряжении две копировальные машины,
   одна из которых копирует лист за х секунд, вторая – за y секунд.
   (Разрешается использовать как один ксерокс, так и оба одновременно.
   Можно копировать не только с оригинала, но и с копии.)
  Помогите ей выяснить, какое минимальное время для этого потребуется.

## Input

N: number; // amount of copies
x: number; // coping speed for 1 copier
y: number; // coping speed for 2 copier

## Output

seconds: number; // amount of seconds needed to do the job

## Examples

 Ex. 1
copy(4, 1, 1) // 3

 Ex. 2
copy(5, 1, 2) // 4
*/

function copy(n, xerox1, xerox2) {
  const min = Math.min(xerox1, xerox2);
  const max = Math.max(xerox1, xerox2);
  let time = 0;

  // Запускаем быстрый ксерокс и делаем 1 копию
  time += min;

  // Запускаем медленный ксерокс и делаем 1 копию
  let slow = max;

  // time идёт шагами по min(xerox1, xerox2)
  for (let i = 1; i < n; i++) {
    // Медленный ксерокс уже что-то напечатал
    slow -= min;

    // Если медленный ксерокс уже закончил
    if (slow <= 0) {
      i++; // То увеличиваем количество копий

      slow = max; // И отправляем ещё одну копию на печать
    }

    time += min;
  }

  return time;
}

function benchmark(f) {
  console.time('Test#1');
  for (let i = 0; i < 1e6; i++) {
    f(4, 1, 1);
  }
  console.timeEnd('Test#1');

  console.log('================');

  console.time('Test#2');
  for (let i = 0; i < 1e6; i++) {
    f(5, 1, 2);
  }
  console.timeEnd('Test#2');
}

benchmark(copy);

console.log(copy(4, 1, 1)); // 3
console.log(copy(5, 1, 2)); // 4
