// Unit test for words.js

import words from '../src/words.js'

describe('testing words.js', () => {

    test('simple ASCII input', () => {
        const input = 'tupu, hupu & lupu'
        const out = words(input)
        expect(out).toEqual(['tupu', 'hupu', 'lupu'])
    })

    test('custom pattern', () => {
        const input = 'tupu, hupu & lupu'
        const out = words(input, /[^, ]+/g) // This is to catch '&'
        expect(out).toEqual(['tupu', 'hupu', '&', 'lupu'])
    })

    test('special characters to trigger unicode', () => {
        const input = 'hyvää päivää'
        const out = words(input)
        expect(out).toEqual(['hyvää', 'päivää'])
    })

    test('alphanumeric input', () => {
        const input = 'hello12goodbye'
        const out = words(input)
        expect(out).toEqual(['hello', '12', 'goodbye'])
    })

    test('empty string', () => {
        expect(words('')).toEqual([])
    })

})  