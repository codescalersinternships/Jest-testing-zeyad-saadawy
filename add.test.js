// add.test.js

const { add } = require('./mathFunctions');

describe('add function', () => {
  it('adds two positive numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('adds a positive and a negative number correctly', () => {
    expect(add(1, -2)).toBe(-1);
  });

  it('throws an error if arguments are not numbers', () => {
    expect(() => add(1, 'a')).toThrow('Arguments must be numbers');
  });

  it('throws an error if one argument is missing', () => {
    expect(() => add(1)).toThrow('Arguments must be numbers');
  });
});
