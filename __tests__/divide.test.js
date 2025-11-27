import divide from '../src/divide.js';

describe('divide', () => {
  test('expect two positive numbers to be divided', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(1, 3)).toBe(0.33);
    })

  test('expect two negatives to return the positive division', () => {
    expect(divide(-12, -3)).toBe(4);
    })

  test('expect divide 0 to return 0', () => {
    expect(divide(0, 12)).toBe(0);
    })

  test('expect divide 0 to return 0', () => {
    expect(divide(7, 0)).toBeNaN();
    })

  test('expect undefined or null value to return 1', () => {
    expect(divide(undefined, 3)).toBe(1);
    expect(divide(12, null)).toBe(1);
  })
})