const { beforeAll } = require('@jest/globals');

module.exports.part1 = function (input) {
  const lines = input.split(/\r?\n/);
  const stacks = new Array(9).fill().map((_) => []);
  const instructions = [];

  lines.forEach((line) => {
    if (line.startsWith('move')) {
      const [quantity, origin, destination] = line.match(/\d+/g);
      instructions.push({ quantity, origin, destination });
    } else if (line.includes('[')) {
      [1, 5, 9, 13, 17, 21, 25, 29, 34].map((c, s) => {
        if (line[c] && line[c] != ' ') stacks[s].unshift(line[c]);
      });
    }
  });

  console.log({ stacks, instructions });

  instructions.forEach((instruction) => {
    for (let i = 0; i < instruction.quantity; i++) {
      var holderVar = stacks[instruction.origin - 1].pop();
      stacks[instruction.destination].push(holderVar);
    }
  });

  var answer = [];

  stacks.forEach((stack) => {
    answer.push(stack.pop());
  });

  return answer.join();
};

module.exports.part2 = function (input) {
  const lines = input.split(/\r?\n/);
};