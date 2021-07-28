const StringFormatter = require('./stringFormatter');

module.exports = class NumberRemover extends StringFormatter {
  constructor() {
    super();
    this.mustRemove = /\d/g;
  }

  removeNonUniqueChars = (str) => str.replace(this.mustRemove, this.replacer)
};
