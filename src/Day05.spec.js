const { test } = require('@jest/globals');
const { part1, part2 } = require('./day05');
const EXAMPLE_INPUT = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const fs = require('fs');

test('Part 1 Example', () => {
  expect(part1(EXAMPLE_INPUT)).toBe('CMZ');
});

// test('Part 1', () => {
//   const input = fs.readFileSync(`Day04.txt`, 'utf-8');
//   expect(part1(input)).toBe(456);
// });

// test('Part 2 Example', () => {
//   expect(part2(EXAMPLE_INPUT)).toBe(4);
// });

// test('Part 2', () => {
//   const input = fs.readFileSync(`day04.txt`, 'utf-8');
//   expect(part2(input)).toBe(808);
// });
