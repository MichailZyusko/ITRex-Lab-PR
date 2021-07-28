const StringFormatter = require('./stringFormatter');

module.exports = class StringRemover extends StringFormatter {
  constructor(regEx) {
    super();
    this.regEx = regEx;
  }

  removeNonUniqueChars = (str) => str.replace(this.regEx, '');
};
