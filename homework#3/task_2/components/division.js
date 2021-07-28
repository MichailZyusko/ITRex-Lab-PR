const Printer = require('./printer');

module.exports = class Division extends Printer {
  constructor(num1, num2) {
    super();
    this.num1 = num1;
    this.num2 = num2;
    this.result = this.divi();
  }

  divi = () => this.num1 / this.num2;
};
