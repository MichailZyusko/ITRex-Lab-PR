module.exports = class StringFormatter {
  constructor() {
    this.set = new Set();
  }

  replacer = (input) => {
    if (this.set.has(input)) {
      return '';
    }
    this.set.add(input);
    return input;
  };

  removeNonUniqueChars = (str) => [...(new Set(str.split('')))].join('');
};
