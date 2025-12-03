/*
This test suite and test cases have been AI generated using generative AI

Tool (and version): Microsoft copilot
*/


// toString.test.js
import toString from '../src/toString.js';

describe('toString', () => {
  test('returns empty string for null', () => {
    expect(toString(null)).toBe('')
  })

  test('returns empty string for undefined', () => {
    expect(toString(undefined)).toBe()
  })

  test('preserves -0 sign', () => {
    expect(toString(-0)).toBe('-0')
  })

  test('converts 0 correctly', () => {
    expect(toString(0)).toBe('0')
  })

  test('converts positive numbers', () => {
    expect(toString(123)).toBe('123')
  })

  test('converts negative numbers', () => {
    expect(toString(-456)).toBe('-456')
  })

  test('converts Infinity', () => {
    expect(toString(Infinity)).toBe('Infinity')
  })

  test('converts -Infinity', () => {
    expect(toString(-Infinity)).toBe('-Infinity')
  })

  test('returns same string when input is string', () => {
    expect(toString('hello')).toBe('hello')
  })

  test('converts arrays of numbers', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3')
  })

  test('converts nested arrays', () => {
    expect(toString([1, [2, 3]])).toBe('1,2,3')
  })

  test('handles arrays with null/undefined', () => {
    expect(toString([1, null, undefined, 2])).toBe('1,,,2')
  })

  test('converts objects using default string coercion', () => {
    expect(toString({ a: 1 })).toBe('[object Object]')
  })

  test('converts boolean true', () => {
    expect(toString(true)).toBe('true')
  })

  test('converts boolean false', () => {
    expect(toString(false)).toBe('false')
  })

  test('converts symbol primitive', () => {
    const sym = Symbol('test')
    expect(toString(sym)).toBe(sym.toString())
  })

  test('converts symbol object wrapper', () => {
    const symObj = Object(Symbol('wrapped'))
    expect(toString(symObj)).toBe(symObj.toString())
  })
})