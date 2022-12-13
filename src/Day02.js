const { beforeAll } = require('@jest/globals');

module.exports.part1 = function (input) {
  const lines = input.split(/\r?\n/);

  var score = 0;
  lines.forEach((line) => {
    const scoreDict = {
      'A X': 4,
      'A Y': 8,
      'A Z': 3,
      'B X': 1,
      'B Y': 5,
      'B Z': 9,
      'C X': 7,
      'C Y': 2,
      'C Z': 6,
    };

    score += scoreDict[line];
  });

  return score;
};

module.exports.part2 = function (input) {
  const lines = input.split(/\r?\n/);

  var score = 0;
  lines.forEach((line) => {
    const scoreDict = {
      'A X': 3,
      'A Y': 4,
      'A Z': 8,
      'B X': 1,
      'B Y': 5,
      'B Z': 9,
      'C X': 2,
      'C Y': 6,
      'C Z': 7,
    };

    score += scoreDict[line];
  });

  return score;
};
