// testing-assignment/__tests__/toNumber.test.js
import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
  test('returns the same number for numbers', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test('preserves the sign of -0', () => {
    const result = toNumber(-0);
    expect(Object.is(result, -0)).toBe(true); // distinguishes -0 from +0
  });

  test('converts numeric strings (with and without whitespace)', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('   3.2  \n')).toBe(3.2);
    expect(toNumber('')).toBe(0); // +'' is 0
  });

  test('parses binary and octal string literals', () => {
    expect(toNumber('0b101')).toBe(5);  // binary
    expect(toNumber('0o10')).toBe(8);   // octal
  });

  test('handles hexadecimal: unsigned ok, signed is bad-hex -> NaN', () => {
    expect(toNumber('0x1f')).toBe(31); // falls through to +value
    expect(Number.isNaN(toNumber('+0x1'))).toBe(true); // bad signed hex
    expect(Number.isNaN(toNumber('-0xFF'))).toBe(true); // bad signed hex
  });

  test('handles non-string, non-number primitives', () => {
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
    expect(toNumber(null)).toBe(0);
    expect(Number.isNaN(toNumber(undefined))).toBe(true);
  });

  test('symbols convert to NaN', () => {
    expect(Number.isNaN(toNumber(Symbol('x')))).toBe(true);
  });

  describe('objects', () => {
    test('Number objects unwrap via valueOf', () => {
      // eslint-disable-next-line no-new-wrappers
      expect(toNumber(new Number(3))).toBe(3);
    });

    test('plain object -> valueOf returns object -> toString default -> NaN', () => {
      expect(Number.isNaN(toNumber({}))).toBe(true);
    });

    test('custom valueOf returning primitive', () => {
      const obj = { valueOf() { return 42; } };
      expect(toNumber(obj)).toBe(42);
    });

    test('valueOf returns object whose toString yields a number-like string', () => {
      const inner = { toString() { return '7'; } };
      const obj = { valueOf() { return inner; } };
      expect(toNumber(obj)).toBe(7);
    });
  });
});
