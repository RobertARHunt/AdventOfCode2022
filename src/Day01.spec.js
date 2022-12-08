const { test } = require('@jest/globals');
const { part1, part2 } = require('./day01');
const EXAMPLE_INPUT = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`.trim();

const fs = require('fs');

test('Part 1 Example', () => {
  expect(part1(EXAMPLE_INPUT)).toBe(24000);
});

test('Part 1', () => {
  const input = fs.readFileSync(`day01.txt`, 'utf-8');
  expect(part1(input)).toBe(72240);
});

test('Part 2 Example', () => {
  expect(part2(EXAMPLE_INPUT)).toBe(45000);
});

test('Part 2', () => {
  const input = fs.readFileSync(`day01.txt`, 'utf-8');
  expect(part2(input)).toBe(210957);
});
