module.exports = class Printer {
  logToMorse = () => {
    const morseNum = new Map(
      [
        ['0', '–––––'], ['1', '•––––'], ['2', '••–––'],
        ['3', '•••––'], ['4', '••••–'], ['5', '•••••'],
        ['6', '–••••'], ['7', '––•••'], ['8', '–––••'],
        ['9', '––––•'], ['-', '–•••–'], ['.', '••••••'],
      ],
    );

    return this.result
      .toString()
      .split('')
      .map((item) => morseNum.get(item))
      .join(' ');
  }

  logToRoman = () => {
    const romanNum = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

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
