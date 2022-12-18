const { test } = require('@jest/globals');
const { part1, part2 } = require('./day04');
const EXAMPLE_INPUT = `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`.trim();

const fs = require('fs');

test('Part 1 Example', () => {
  expect(part1(EXAMPLE_INPUT)).toBe(2);
});

test('Part 1', () => {
  const input = fs.readFileSync(`Day04.txt`, 'utf-8');
  expect(part1(input)).toBe(456);
});

test('Part 2 Example', () => {
  expect(part2(EXAMPLE_INPUT)).toBe(4);
});

test('Part 2', () => {
  const input = fs.readFileSync(`day04.txt`, 'utf-8');
  expect(part2(input)).toBe(808);
});
