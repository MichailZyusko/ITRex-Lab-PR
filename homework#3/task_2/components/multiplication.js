const Printer = require('./printer');

module.exports = class Multiplication extends Printer {
  calculate(num1, num2) {
    this.result = num1 * num2;
  }
};
