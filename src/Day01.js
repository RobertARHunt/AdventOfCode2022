module.exports.part1 = function (input) {
  const lines = (input + '\n').split('\n').map(Number);

  var currentLargest = 0;
  var currentElfValue = 0;
  lines.forEach((line) => {
    if (line == 0) {
      if (currentElfValue > currentLargest) {
        currentLargest = currentElfValue;
      }
      currentElfValue = 0;
    } else {
      currentElfValue += line;
    }
  });

  return currentLargest;
};

module.exports.part2 = function (input) {
  const lines = (input + '\n').split('\n').map(Number);

  var currentThirdLargest = 0;
  var currentSecondLargest = 0;
  var currentLargest = 0;
  var currentElfValue = 0;
  lines.forEach((line) => {
    if (line == 0) {
      if (currentElfValue > currentLargest) {
        currentThirdLargest = currentSecondLargest;
        currentSecondLargest = currentLargest;
        currentLargest = currentElfValue;
      } else if (currentElfValue > currentSecondLargest) {
        currentThirdLargest = currentSecondLargest;
        currentSecondLargest = currentElfValue;
      } else if (currentElfValue > currentThirdLargest) {
        currentThirdLargest = currentElfValue;
      }
      currentElfValue = 0;
    } else {
      currentElfValue += line;
    }
  });

  console.log({ currentThirdLargest, currentSecondLargest, currentLargest });
  return currentThirdLargest + currentSecondLargest + currentLargest;
};
