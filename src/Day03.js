const { beforeAll } = require('@jest/globals');

const prioritiesMap = new Map(
  [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((c, ix) => [
    c,
    ix + 1,
  ])
);

module.exports.part1 = function (input) {
  const lines = input.split(/\r?\n/);
  var total = 0;
  lines.forEach((line) => {
    const lineArr = line.split('');
    const compartment1 = lineArr.slice(0, lineArr.length / 2);
    const compartment2 = lineArr.slice(lineArr.length / 2);
    var sharedItem = '';
    compartment1.forEach((item) => {
      if (compartment2.includes(item)) {
        sharedItem = item;
      }
    });
    var current = prioritiesMap.get(sharedItem);
    total += current;
  });
  return total;
};

module.exports.part2 = function (input) {
  const lines = input.split(/\r?\n/);
  var total = 0;
  for (let i = 0; i < lines.length - 2; i += 3) {
    const currentGroup = lines.slice(i, i + 3);
    var groupBadge = '';
    currentGroup[0].split('').forEach((item) => {
      if (
        currentGroup[1].split('').includes(item) &&
        currentGroup[2].split('').includes(item)
      ) {
        groupBadge = item;
      }
    });
    var current = prioritiesMap.get(groupBadge);
    total += current;
  }
  return total;
};
