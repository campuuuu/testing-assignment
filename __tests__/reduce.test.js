// Unit test for reduce.js
import reduce from '../src/reduce.js';

describe('Testing reduce.js', () => {

    test('reducing array with initial accumulator', () => {
        const sum = (acc, n) => acc + n // Simple addition function
        expect(reduce([1,2,3], sum, 0)).toBe(6)
        expect(reduce([1,2,3], sum, 10)).toBe(16)
        expect(reduce([], sum, 10)).toBe(10)
    })

    test('reducing array without initial accumulator', () => {
        const sum = (acc, n) => acc + n
        expect(reduce([1,2,3], sum)).toBe(6)
        expect(reduce([], sum)).toBe(undefined) // Should be undefined as per lodash behaviour
        expect(reduce([1], sum)).toBe(1)
    })

    test('reducing object with initial accumulator', () => {
        const input = {a:1, b:2, c:3}
        const mul = (acc, val) => acc * val
        expect(reduce(input, mul, 2)).toBe(12)
    })

    test('reducing object without initial accumulator', () => {
        const input = {a:1, b:2, c:3}
        const mul = (acc, val) => acc * val
        expect(reduce(input, mul)).toBe(6)
    })

    // Checking accumulator, value, index, collection
    test('testing whether the arguments are passed correctly with arrays', () => {
        const input = ['a', 'b', 'c']
        const seen = []

        // Helping function for checking the argument passing
        const func = (acc, val, i, coll) => {
            seen.push([acc, val, i, coll === input]);
            return (acc || []).concat(`${val}${i}`); // Checking if there is an acc. If not use an empty array to concatenate to.
        }
        const out = reduce(input, func, []);
        expect(out).toEqual(['a0', 'b1', 'c2']);
        expect(seen).toEqual([
        [[], 'a', 0, true],
        [['a0'], 'b', 1, true],
        [['a0', 'b1'], 'c', 2, true]
        ])
    })

    test('testing whether the arguments are passed correctly with objects', () => {
        const obj = { a: 1, b: 2 }
        const seen = [];
        const func = (acc, v, k, coll) => {
            seen.push([typeof acc, v, typeof k, coll === obj]) // As the order is not guaranteed, we only check the types
            return acc + v
        };
        const out = reduce(obj, func, 0)
        expect(out).toBe(3)
    
        // Checking the types:
        seen.forEach(entry => {
            expect(entry[0]).toBe('number') // accumulator is number
            expect(typeof entry[1]).toBe('number') // value should be number
            expect(entry[2]).toBe('string') // key should be string
            expect(entry[3]).toBe(true) // collection should be the same as the starting object
        })
    })

    test('null and undefined behaviour', () => {
        const sum = (acc, v) => acc + v;
        // With initial accumulator
        expect(reduce(null, sum, 196)).toBe(196);
        expect(reduce(undefined, sum, 196)).toBe(196);

        // Without initial accumulator
        expect(reduce(null, sum)).toBeUndefined();
        expect(reduce(undefined, sum)).toBeUndefined();
    })

})