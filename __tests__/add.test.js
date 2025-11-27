import add from '../src/add.js';


describe('add', () => {
  test('expect two positives to return the correct sum', () => {
    expect(add(2, 3)).toBe(5)
    })

  test('expect two negatives to return the correct sum', () => {
    expect(add(-2, -3)).toBe(-5)
    })

  test('expect negative and positive to return the correct sum', () => {
    expect(add(8, -3)).toBe(5)
    expect(add(-10, 6)).toBe(-4)
    })

  test('expect infinity to return the infinity', () => {
    expect(add(Infinity, 0)).toBe(Infinity)
    })

})
