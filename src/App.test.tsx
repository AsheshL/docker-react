import { expect, test } from 'vitest';

function sum(a: number, b: number) {
  // run tests with push
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
