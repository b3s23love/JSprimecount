/* eslint-disable no-undef */
const bitOperators = require('../utilities/bitOperators.js');
const assert = require('assert');

describe('bitNot', () => {
    it('computes the bitwise not of a not long number', () => {
        // Setup
        const num = 12345n;
        const expected = 4294954950n;
        // Excercise
        const actual = bitOperators.bitNot(num, false);
        // Verify
        assert.strictEqual(expected, actual);
    });

    it('computes the bitwise not of a long number', () => {
        // Setup
        const num = 12345678987654321n;
        const expected = 18434398394721897294n;
        // Excercise
        const actual = bitOperators.bitNot(num, true);
        // Verify
        assert.strictEqual(expected, actual);
    });

    it('computes the bitwise not in all cases when the number is 0', () => {
        // Setup
        const num = 0n;
        const expected = [4294967295n, 18446744073709551615n];
        // Excercise
        const actual = [bitOperators.bitNot(num, false),
        bitOperators.bitNot(num, true)];
        // Verify
        assert.deepStrictEqual(expected, actual);
    });
});

describe('bitLeftShift', () => {
    it('left-shifts a not long number by a number of bits', () => {
        // Setup
        const x = 12345n;
        const a = 4n;
        const expected = 197520n;
        // Excercise
        const actual = bitOperators.bitLeftShift(x, a, false);
        // Verify
        assert.strictEqual(expected, actual);
    });

    it('left-shifts a long number by a number of bits', () => {
        // Setup
        const x = 12345678987654321n;
        const a = 4n;
        const expected = 197530863802469136n;
        // Excercise
        const actual = bitOperators.bitLeftShift(x, a, true);
        // Verify
        assert.strictEqual(expected, actual);
    });
});

describe('bitRightShift', () => {
    it('right-shifts a not long number by a number of bits', () => {
        // Setup
        const x = 12345n;
        const a = 4n;
        const expected = 771n;
        // Excercise
        const actual = bitOperators.bitRightShift(x, a, false);
        // Verify
        assert.strictEqual(expected, actual);
    });

    it('right-shifts a long number by a number of bits', () => {
        // Setup
        const x = 12345678987654321n;
        const a = 4n;
        const expected = 771604936728395n;
        // Excercise
        const actual = bitOperators.bitRightShift(x, a, true);
        // Verify
        assert.strictEqual(expected, actual);
    });
});