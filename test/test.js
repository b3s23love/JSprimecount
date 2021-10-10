const assert = require('assert');
const piofy = require('../nested_functions/piofy.js');
// Test
describe('pi', () => {
    describe('.piofy()', () => {
        it('computes pi of y, a random integer between the cube root of x and the sqare root of x.', () => {
            // Setup
            const num = 25;
            const expected = 9;
            // Excercise
            const actual = piofy(num);
            // Verify
            assert.strictEqual(expected, actual);
        })
    });
});