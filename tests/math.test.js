const { add, subtract } = require('../src/math');
const { add2, subtract2} = require('../src/math - Copy');

describe('Math functions', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      expect(add(5, -2)).toBe(3);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts a positive and a negative number', () => {
      expect(subtract(5, -2)).toBe(7);
    });
  });
  
  describe('subtract2', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract2(5, 3)).toBe(2);
    });
  });
});
