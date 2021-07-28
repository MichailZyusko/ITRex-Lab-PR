/*
Задание 1
  Написать класс StringFormatter, в котором реализуется метод removeNonUniqueChars
 удаления повторяющихся символов в строке. Написать классы, расширяющие класс StringFormatter,
 каждый из которых перезаписывает метод removeNonUniqueChars. Новые классы должны удалять
 из строки соответственно цифры, даты, строку по RexExp(заданную в конструкторе).

## Input

str: string;

## Output

str: string

## Example

 input
str: 'Hello, world!'

 output
str: 'Helo, wrd!'
*/

const DateRemover = require('./components/dateRemover');
const NumberRemover = require('./components/numberRemover');
const StringFormatter = require('./components/stringFormatter');
const StringRemover = require('./components/stringRemover');

const stringWithNoRepeatingChar = new StringFormatter();
const stringWithNoRepeatingNum = new NumberRemover();
const stringWithNoRepeatingDate = new DateRemover(); // dateFormat YYYY-MM-DD (':', '.', '-')
const stringWithNoRepeatingStr = new StringRemover(/ell/g); // remove all 'ello' in string

function test(objArray) {
  const input = 'Hello, world!1123 2019-10-30 2019-10-30';
  console.log('\n', input, '\n');
  objArray.forEach((item) => {
    console.table({
      [`${item.constructor.name}`]: item.removeNonUniqueChars(input),
    });
  });
}

test([
  stringWithNoRepeatingChar,
  stringWithNoRepeatingNum,
  stringWithNoRepeatingDate,
  stringWithNoRepeatingStr,
]);
