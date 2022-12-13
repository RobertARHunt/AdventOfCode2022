const { test } = require('@jest/globals');
const { part1, part2 } = require('./day03');
const EXAMPLE_INPUT = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`.trim();

const fs = require('fs');

test('Part 1 Example', () => {
  expect(part1(EXAMPLE_INPUT)).toBe(157);
});

test('Part 1', () => {
  const input = fs.readFileSync(`Day03.txt`, 'utf-8');
  expect(part1(input)).toBe(8298);
});

test('Part 2 Example', () => {
  expect(part2(EXAMPLE_INPUT)).toBe(70);
});

test('Part 2', () => {
  const input = fs.readFileSync(`day03.txt`, 'utf-8');
  expect(part2(input)).toBe(2708);
});
