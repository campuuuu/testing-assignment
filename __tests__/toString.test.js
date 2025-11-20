import toString from '../src/toString.js';

test('number to a string value', () => {
  expect(toString(1)).toBe("1");
});


test('negative 0 to -0', () => {
  expect(toString(-0)).toBe("-0");
});