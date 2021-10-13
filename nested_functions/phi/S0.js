/* JSprimecount calculates pi(x), the prime-counting function using a revised version of the Meissnel-Lehmer method.
Link to the mathematical paper: https://www.ams.org/journals/mcom/1996-65-213/S0025-5718-96-00674-6/S0025-5718-96-00674-6.pdf

Copyright © 2021 Jakub Drozd
For full notice see pi.js */
// Module import
const { mobiustabulator } = require('../utilities.js');
// Function
const S0 = (x, y) => {
    console.log('Calculating S0')
    let mobiustable = mobiustabulator(y);
    let total = 0;
    for (let i = 0; i < y; i++) {
        total += mobiustable[i] * Math.floor(x / (i + 1));
    }
    console.log('S0 calculated!');
    return total;
}
// Module export
module.exports = S0;