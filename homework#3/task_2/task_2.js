/* Задание 2
  Есть два числа. Опишите классы, в каждом из которых мы можем получить произведение,
 деление, сложение и вычитание числа. При этом результат нам нужен либо в азбуке Морзе,
 либо в римских цифрах либо в арабских цифрах.
*/

const Multiplication = require('./components/multiplication');
const Subtraction = require('./components/subtraction');
const Summation = require('./components/summation');
const Division = require('./components/division');

const mult = new Multiplication();
const subt = new Subtraction();
const summ = new Summation();
const divi = new Division();

mult.calculate(50, 5);
subt.calculate(50, 5);
summ.calculate(50, 5);
divi.calculate(50, 5);

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
