// multiply.test.js

const { multiply } = require('./mathFunctions');

describe('multiply function', () => {
  it('multiplies two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('multiplies a positive and a negative number correctly', () => {
    expect(multiply(2, -3)).toBe(-6);
  });

  it('multiplies any number by 0 to get 0', () => {
    expect(multiply(2, 0)).toBe(0);
    expect(multiply(-5, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it('throws an error if less than 2 arguments are provided', () => {
    expect(() => multiply(2)).toThrow('The multiply function requires exactly two parameters');
  });

  it('throws an error if more than 2 arguments are provided', () => {
    expect(() => multiply(2, 3, 4)).toThrow('The multiply function requires exactly two parameters');
  });

  it('throws an error if arguments are not numbers', () => {
    expect(() => multiply(2, 'a')).toThrow('Arguments must be numbers');
  });

  it('throws an error if arguments are not numbers', () => {
    expect(() => multiply('a',6)).toThrow('Arguments must be numbers');
  });
});
