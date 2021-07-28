const StringFormatter = require('./stringFormatter');

module.exports = class DateRemover extends StringFormatter {
  constructor() {
    super();
    this.mustRemove = /(?<year>[0-9]{4}).(?<month>[0-9]{2}).(?<day>[0-9]{2})/g;
  }

  removeNonUniqueChars = (str) => str.replace(this.mustRemove, this.replacer);
};
