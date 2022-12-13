const { test } = require('@jest/globals');
const { part1, part2 } = require('./day02');
const EXAMPLE_INPUT = `
A Y
B X
C Z`.trim();

const fs = require('fs');

test('Part 1 Example', () => {
  expect(part1(EXAMPLE_INPUT)).toBe(15);
});

test('Part 1', () => {
  const input = fs.readFileSync(`day02.txt`, 'utf-8');
  expect(part1(input)).toBe(14163);
});

test('Part 2 Example', () => {
  expect(part2(EXAMPLE_INPUT)).toBe(12);
});

test('Part 2', () => {
  const input = fs.readFileSync(`day02.txt`, 'utf-8');
  expect(part2(input)).toBe(12091);
});
