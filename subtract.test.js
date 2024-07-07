// subtract.test.js

const { subtract } = require('./mathFunctions');

describe('subtract function', () => {
  it('subtracts two positive numbers correctly', () => {
    expect(subtract(3, 2)).toBe(1);
  });

  it('subtracts a negative number from a positive number correctly', () => {
    expect(subtract(1, -2)).toBe(3);
  });

  it('throws an error if arguments are not numbers', () => {
    expect(() => subtract(1, 'a')).toThrow('Arguments must be numbers');
  });

  it('throws an error if one argument is missing', () => {
    expect(() => subtract(1)).toThrow('Arguments must be numbers');
  });
});
