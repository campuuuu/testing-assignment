// Tests for toNumber.js

import toNumber from '../src/toNumber.js'
import { describe, it, expect } from '@jest/globals'

describe('toNumber planned test cases', () => {
    it ('returns numbers as they are', () => {
        expect(toNumber(14)).toBe(14)
        expect(toNumber(-12.5)).toBe(-12.5)
        expect(toNumber(0)).toBe(0)
        expect(toNumber(NaN)).toBe(NaN)
        expect(toNumber(Infinity)).toBe(Infinity)
        expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
        expect(toNumber(Number.MAX_VALUE)).toBe(Number.MAX_VALUE)
    })

    it ('returns simple string correctly', () => {
        expect(toNumber('3.6')).toBe(3.6)
        expect(toNumber('-5')).toBe(-5)
        expect(toNumber('0')).toBe(0)
        expect(toNumber('4,1b')).toBe(NaN)
    })

    it ('handles Binary/Octal/Decimal', () => {
        expect(toNumber('0b10')).toBe(2)
        expect(toNumber('0o30075')).toBe(12349)
        expect(toNumber('0xFF')).toBe(255)
        expect(toNumber('0b12')).toBe(NaN)
        expect(toNumber('0o89')).toBe(NaN)
        expect(toNumber('0xFK')).toBe(NaN)
    })
    it ('handles true, false and null', () => {
        expect(toNumber(true)).toBe(1)
        expect(toNumber(false)).toBe(0)
        expect(toNumber(null)).toBe(0)
    })
})