import toString from '../src/toString.js';

//-2 -> '-2'
test('number to a string value', () => {
  expect(toString(-2)).toBe("-2");
});

//-0 -> '-0'
test('negative 0 to -0', () => {
  expect(toString(-0)).toBe("-0");
});

//3.2 -> '3.2'
test('number to a string value', () => {
  expect(toString(3.2)).toBe("3.2");
});

//'abc' -> 'abc'
test('number to a string value', () => {
  expect(toString("abc")).toBe("abc");
});

//[1,2,3] -> '1,2,3'
test('list to a string value', () => {
  expect(toString([1,2,3])).toBe('1,2,3');
});

//[] -> ''
test('empty list returns empty string', () => {
  expect(toString([])).toBe('');
});

//['a','b','c'] -> 'a,b,c'
test('list with chars returns a string', () => {
  expect(toString(['a','b','c'])).toBe("a,b,c");
});

//[1,2,[3]] -> '1,2,3'
test('nested list returns a string', () => {
  expect(toString([1,2,[3]])).toBe("1,2,3");
  //[[1,2,[3],[4]],5] -> '1,2,3,4,5'
  expect(toString([[1,2,[3],[4]],5])).toBe("1,2,3,4,5");
});


//'     ' -> '     '
// Keep the spaces
test('expect string with spaces to return the same string', () => {
  expect(toString(['     '])).toBe('     ');
});

//null -> '' 
//undefined -> ''
test('expect null and undefined to return an empty string', () => {
  expect(toString(null)).toBe("");
  expect(toString(undefined)).toBe("");
});


//symbol -> 'symbol'
//Check this
test('expect null and undefined to return an empty string', () => {
  const sym = Symbol("xyz");
  expect(toString(sym)).toBe("Symbol(xyz)");
});
