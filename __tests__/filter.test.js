import filter from '../src/filter.js';

describe('filter.js', () => {

    test('expect return active status for user barney', () => {
      const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
      ]
      expect(filter(users, ({ active }) => active)).toStrictEqual([{"active": true, "user": "barney"}]);
    })

    test('expect return number values higher than', () => {
      const array = [1, 2, 3, 4, 5];
      expect(filter(array, (value) => value > 2)).toStrictEqual([3, 4, 5]);
    })

    test('expect to return true values among false and undefined', () => {
      const array = [true, false, true, undefined];
      expect(filter(array, (value) => value)).toStrictEqual([true, true]);
    })

    // Arrays
    test('returns an empty array without anything else to return', () => {
      expect(filter([], () => true)).toEqual([[]])
    })


    
});