import toFinite from '../src/toFinite.js';

//todo
describe('toFinite', () => {
    test('expect small numbers to return as numbers', () => {
      expect(toFinite(4)).toBe(4);
      expect(toFinite(2.3)).toBe(2.3);
      expect(toFinite(-55)).toBe(-55);
      expect(toFinite(-0)).toBe(-0);
      expect(toFinite(0)).toBe(0);
    })


    test('expect min and max values return min and max', () => {
      expect(toFinite(Number.MIN_VALUE)).toBe(5e-324);
      expect(toFinite(Number.MAX_VALUE)).toBe(1.7976931348623157e+308);
    })

    test('expect infinity return as max value', () => {
      expect(toFinite(Infinity)).toBe(1.7976931348623157e+308);
    })

    test('expect string to return as number', () => {
      expect(toFinite("5.8")).toBe(5.8);
    })
});
