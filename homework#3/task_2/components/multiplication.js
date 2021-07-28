const Printer = require('./printer');

module.exports = class Multiplication extends Printer {
  constructor(num1, num2) {
    super();
    this.num1 = num1;
    this.num2 = num2;
    this.result = this.mult();
  }

  mult = () => this.num1 * this.num2;
};
