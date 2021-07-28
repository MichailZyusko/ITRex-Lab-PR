const StringFormatter = require('./stringFormatter');

module.exports = class DateRemover extends StringFormatter {
  constructor() {
    super();
    this.set = new Set();
    this.mustRemove = /(?<year>[0-9]{4}).(?<month>[0-9]{2}).(?<day>[0-9]{2})/g;
  }

    replacer = (input) => {
      if (this.set.has(input)) return '';
      this.set.add(input);
      return input;
    };

  removeNonUniqueChars = (str) => str.replace(this.mustRemove, this.replacer);
};
