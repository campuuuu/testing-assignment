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


// Planned test cases:
//[1,2,3] -> '1,2,3'
//[] -> ''
//['a','b','c'] -> 'a,b,c'
//[1,2,[3]] -> '1,2,3'
//[[1,2,[3],[4]],5] -> '1,2,3,4,5' 
//symbol -> 'symbol'

//'     ' -> ''
//null -> '' 
//undefined -> ''