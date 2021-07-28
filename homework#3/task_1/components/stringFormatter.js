module.exports = class StringFormatter {
  removeNonUniqueChars = (str) => [...(new Set(str.split('')))].join('');
};
