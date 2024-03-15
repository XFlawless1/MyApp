const { test, expect } = require('@jest/globals');
const calculator = require('../app/calculator');
const x = 13;
const y = 5;
test('Add numbers using the add method', () => {
  expect(calculator.add(x, y)).toBe(18);
});