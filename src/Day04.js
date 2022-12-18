const { beforeAll } = require('@jest/globals');

module.exports.part1 = function (input) {
  const lines = input.split(/\r?\n/);
  var total = 0;
  lines.forEach((line) => {
    const [elf1, elf2] = line.split(',');
    const [min1, max1] = elf1.split('-').map(Number);
    const [min2, max2] = elf2.split('-').map(Number);
    if ((min1 >= min2 && max1 <= max2) || (min2 >= min1 && max2 <= max1)) {
      total++;
    }
  });
  return total;
};

module.exports.part2 = function (input) {
  const lines = input.split(/\r?\n/);
  var total = 0;
  lines.forEach((line) => {
    const [elf1, elf2] = line.split(',');
    const [min1, max1] = elf1.split('-').map(Number);
    const [min2, max2] = elf2.split('-').map(Number);
    if (
      (min1 >= min2 && min1 <= max2) ||
      (max1 >= min2 && max1 <= max2) ||
      (min2 >= min1 && min2 <= max1) ||
      (max2 >= min1 && max2 <= max1)
    ) {
      total++;
    }
  });
  return total;
};
