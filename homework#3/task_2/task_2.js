/* Задание 2
  Есть два числа. Опишите классы, в каждом из которых мы можем получить произведение,
 деление, сложение и вычитание числа. При этом результат нам нужен либо в азбуке Морзе,
 либо в римских цифрах либо в арабских цифрах.
*/

const Multiplication = require('./components/multiplication');
const Subtraction = require('./components/subtraction');
const Summation = require('./components/summation');
const Division = require('./components/division');

const mult = new Multiplication(50, 5);
const subt = new Subtraction(50, 5);
const summ = new Summation(50, 5);
const divi = new Division(50, 5);

function test(objArray) {
  objArray.forEach((item) => {
    console.log('\n', item.constructor.name);
    console.table({
      Arabic: item.logToArabic(),
      Roman: item.logToRoman(),
      Morse: item.logToMorse(),
    });
  });
}

test([mult, subt, summ, divi]);
