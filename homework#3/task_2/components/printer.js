const { morseNum, romanNum } = require('./src/symbolStore');

module.exports = class Printer {
  constructor() {
    this.result = null;
  }

  logToMorse = () => this.result
    .toString()
    .split('')
    .map((item) => morseNum.get(item))
    .join(' ')

  logToRoman = () => {
    let num = this.result;
    let roman = '';

    if (num < 1 || num > 3999) {
      throw new Error('Please, input correct data');
    }

    Object.keys(romanNum).forEach((item) => {
      while (num >= romanNum[item]) {
        num -= romanNum[item];
        roman += item;
      }
    });

    return roman;
  }

  logToArabic = () => this.result;
};
