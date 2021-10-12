const assert = require('assert');
const utilities = require('../nested_functions/utilities.js');
// Test
describe('pi', () => {
    describe('.utilities', () => {
        describe('.ersieve()', () => {
            it('does a Eratosthenes sieve of integers from 1 to n.', () => {
                const num = 25;
                const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23];
                // Excercise
                const actual = utilities.ersieve(num);
                // Verify
                assert.deepStrictEqual(expected, actual);
            });
        });

        describe('.pismall()', () => {
            it('computes pi of y, a random integer between the cube root of x and the sqare root of x.', () => {
                // Setup
                const num = 25;
                const expected = 9;
                // Excercise
                const actual = utilities.pismall(num);
                // Verify
                assert.strictEqual(expected, actual);
            });
        });

        describe('.pitabulator()', () => {
            it('tabulates the pi function from 1 up to a small number.', () => {
                // Setup
                const num = 25;
                const expected = [0, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 8, 8, 8, 8, 9, 9, 9];
                // Excercise
                const actual = utilities.pitabulator(num);
                // Verify
                assert.deepStrictEqual(expected, actual);
            });
        });

        describe('.mobius()', () => {
            it('calculates the Mobius function when x has a squared prime factor.', () => {
                // Setup
                const num = 735;
                const expected = 0;
                // Excercise
                const actual = utilities.mobius(num);
                // Verify
                assert.strictEqual(expected, actual);
            });

            it('calculates the Mobius function when x is square-free and has a odd number of prime factors.', () => {
                // Setup
                const num = 222;
                const expected = -1;
                // Excercise
                const actual = utilities.mobius(num);
                // Verify
                assert.strictEqual(expected, actual);
            });

            it('calculates the Mobius function when x is square-free and has a even number of prime factors.', () => {
                // Setup
                const num = 579;
                const expected = 1;
                // Excercise
                const actual = utilities.mobius(num);
                // Verify
                assert.strictEqual(expected, actual);
            });

            it('calculates the Mobius function when x is 1.', () => {
                // Setup
                const num = 1;
                const expected = 1;
                // Excercise
                const actual = utilities.mobius(num);
                // Verify
                assert.strictEqual(expected, actual);
            });
        });

        describe('.mobiustabulator()', () => {
            it('tabulates the Mobius function up to a small number', () => {
                // Setup
                const num = 25;
                const expected = [1, -1, -1, 0, -1, 1, -1, 0, 0, 1, -1, 0, -1, 1, 1, 0, -1, 0, -1, 0, 1, 1, -1, 0, 0];
                // Excercise
                const actual = utilities.mobiustabulator(25);
                // Verify
                assert.deepStrictEqual(expected, actual);
            });
        });

        describe('.phismall()', () => {
            it('calculates the partial sieve function phi(x, b) when b is 0', () => {
                // Setup
                const num1 = 25.2;
                const num2 = 0;
                const arr = [];
                const expected = 25;
                // Excercise
                const actual = utilities.phismall(num1, num2, arr);
                // Verify
                assert.strictEqual(expected, actual);
            });

            it('calculates the partial sieve function phi(x, b) when b is greater than 0', () => {
                // Setup
                const num1 = 25.5;
                const num2 = 3;
                const arr = [2, 3, 5];
                const expected = 7;
                // Excercise
                const actual = utilities.phismall(num1, num2, arr);
                // Verify
                assert.strictEqual(expected, actual);
            });
        });
    });
});