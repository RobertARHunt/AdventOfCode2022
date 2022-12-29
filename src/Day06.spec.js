const { test } = require('@jest/globals');
const { part1, part2 } = require('./day06');
const EXAMPLE_INPUT = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;

const fs = require('fs');

test('Part 1 Example', () => {
  expect(part1(EXAMPLE_INPUT)).toBe(7);
});

test('Part 1', () => {
  const input = fs.readFileSync(`Day06.txt`, 'utf-8');
  expect(part1(input)).toBe(1578);
});

test('Part 2 Example', () => {
  expect(part2(EXAMPLE_INPUT)).toBe(19);
});

test('Part 2', () => {
  const input = fs.readFileSync(`day06.txt`, 'utf-8');
  expect(part2(input)).toBe(2178);
});
