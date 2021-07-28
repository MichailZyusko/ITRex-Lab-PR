const StringFormatter = require('./stringFormatter');

module.exports = class NumberRemover extends StringFormatter {
  constructor() {
    super();
    this.set = new Set();
    this.mustRemove = /\d/g;
  }

  replacer = (input) => {
    if (this.set.has(input)) return '';
    this.set.add(input);
    return input;
  };

  removeNonUniqueChars = (str) => str.replace(this.mustRemove, this.replacer)
};
