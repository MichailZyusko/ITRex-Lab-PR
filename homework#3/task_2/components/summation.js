const Printer = require('./printer');

module.exports = class Summation extends Printer {
  calculate(num1, num2) {
    this.result = num1 + num2;
  }
};
