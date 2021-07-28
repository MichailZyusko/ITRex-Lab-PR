const Printer = require('./printer');

module.exports = class Subtraction extends Printer {
  calculate(num1, num2) {
    this.result = num1 - num2;
  }
};
