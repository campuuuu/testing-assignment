// Unit test for map.js
import map from '../src/map.js'

describe('testing mp.js', () => {
    test('iterating through with basic functions', () => {
        const square = (n) => n * n
        const sum = (m) => m + m
        expect(map([4, 8], square)).toEqual([16, 64])
        expect(map([1,2], sum)).toEqual([2,4])
    })

    test('testing the passing of the arguments', () => {
        const input = ['a', 'b', 'c', 'd']

        // We will save the arguments here and check whether they are passed through iterations
        const seen = []
        // Out will be used to check the correct output and to call the function
        const out = map(input, (a_i, i, array) => {
            seen.push([a_i, i, array === input])
            return `${a_i}${i}` // Return array item of index i and index i appended as string
        })
        expect(out).toEqual(['a0', 'b1', 'c2', 'd3'])
        expect(seen).toEqual([
        ['a', 0, true],
        ['b', 1, true],
        ['c', 2, true],
        ['d', 3, true]
        ]);
    })

    test('iterating an empty array', () => {
        const square = (n) => n * n
        expect(map([], square)).toEqual([])
    })

    test('iterating an undefined or null input', () => {
        const square = (n) => n * n
        expect(map(null, square)).toEqual([])
        expect(map(undefined, square)).toEqual([])
    })
})