// Unit test for chunk.js

import chunk from '../src/chunk.js'

describe('testing chunk.js', () => {

    // Testing default chunk size. Should be 1.
    test('default chunk size', () => {
        const input = ['a', 'b', 'c', 'd']
        const out = chunk(input)
        expect(out).toEqual([['a'], ['b'], ['c'], ['d']])
    })

    test('splitting to even chunks', () => {
        const input = ['a', 'b', 'c', 'd']
        const out = chunk(input, 2)
        expect(out).toEqual([['a', 'b'], ['c', 'd']])
    })

    test('splitting to uneven chunks', () => {
        const input = ['a', 'b', 'c', 'd']
        const out = chunk(input, 3)
        expect(out).toEqual([['a', 'b', 'c'], ['d']])
    })

    test('chunk size larger than array returns original array in a chunk', () => {
        const input = ['a', 'b', 'c', 'd']
        const out = chunk(input, 20)
        expect(out).toEqual([['a','b','c','d']])
    })

    test('empty array', () => {
        const input = []
        const out = chunk(input)
        expect(out).toEqual([])
    })

    test('negative chunk size', () => {
        const input = ['a', 'b', 'c', 'd']
        const out = chunk(input, -2)
        expect(out).toEqual([])
    })

    test('number string as chunk size', () => {
        const input = ['a', 'b', 'c', 'd']
        const out = chunk(input, '2')
        expect(out).toEqual([['a', 'b'], ['c', 'd']])
    })

    test('letter string as chunk size', () => {
        const input = ['a', 'b', 'c', 'd']
        const out = chunk(input, 'k')
        expect(out).toEqual([])
    })

})