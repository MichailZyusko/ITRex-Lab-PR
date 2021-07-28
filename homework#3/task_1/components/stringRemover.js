const StringFormatter = require('./stringFormatter');

module.exports = class StringRemover extends StringFormatter {
  constructor(regex, replacement) {
    super();
    this.regex = regex;
    this.replacement = replacement;
  }

  removeNonUniqueChars = (str) => str.replace(this.regex, this.replacement);
};
