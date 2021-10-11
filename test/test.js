const assert = require('assert');
const ersievepi = require('../nested_functions/ersievepi.js');
// Test
describe('pi', () => {
    describe('.ersievepi', () => {
        describe('.ersieve()', () => {
            it('does a Eratosthenes sieve of integers from 1 to n.', () => {
                const num = 25;
                const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23];
                // Excercise
                const actual = ersievepi.ersieve(num);
                // Verify
                assert.deepStrictEqual(expected, actual);
            });
        });

        describe('.piofy()', () => {
            it('computes pi of y, a random integer between the cube root of x and the sqare root of x.', () => {
                // Setup
                const num = 25;
                const expected = 9;
                // Excercise
                const actual = ersievepi.piofy(num);
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
                const actual = ersievepi.pitabulator(num);
                // Verify
                assert.deepStrictEqual(expected, actual);
            });
        });
    });
});