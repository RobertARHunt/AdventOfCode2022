const { beforeAll } = require('@jest/globals');

module.exports.part1 = function (input) {
  const chars = input.split('');
  for (let i = 3; i < chars.length; i++) {
    currentChars = new Set([
      ...chars[i],
      chars[i - 1],
      chars[i - 2],
      chars[i - 3],
    ]);
    if (currentChars.size == 4) {
      return i + 1;
    }
  }
};

module.exports.part2 = function (input) {
  const chars = input.split('');
  for (let i = 13; i < chars.length; i++) {
    currentChars = new Set([
      ...chars[i],
      chars[i - 1],
      chars[i - 2],
      chars[i - 3],
      chars[i - 4],
      chars[i - 5],
      chars[i - 6],
      chars[i - 7],
      chars[i - 8],
      chars[i - 9],
      chars[i - 10],
      chars[i - 11],
      chars[i - 12],
      chars[i - 13],
    ]);
    if (currentChars.size == 14) {
      return i + 1;
    }
  }
};
