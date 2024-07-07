// add.test.js

const { add } = require('./mathFunctions');

describe('add function', () => {
  it('adds two positive numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('adds a positive and a negative number correctly', () => {
    expect(add(1, -2)).toBe(-1);
  });

  it('throws an error if less than 2 arguments are provided', () => {
    expect(() => add(1)).toThrow('The add function requires exactly two parameters');
  });

  it('throws an error if more than 2 arguments are provided', () => {
    expect(() => add(1, 2, 3)).toThrow('The add function requires exactly two parameters');
  });

  it('throws an error if arguments are not numbers', () => {
    expect(() => add(1, 'a')).toThrow('Arguments must be numbers');
  });
  
  it('throws an error if arguments are not numbers', () => {
    expect(() => add('a',6)).toThrow('Arguments must be numbers');
  });
});
