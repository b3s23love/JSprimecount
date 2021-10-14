/* JSprimecount calculates pi(x), the prime-counting function using the Deleglise-Rivat algorithm.
Link to the mathematical paper: https://www.ams.org/journals/mcom/1996-65-213/S0025-5718-96-00674-6/S0025-5718-96-00674-6.pdf

Copyright © 2021 Jakub Drozd
For full notice see pi.js */
// Module import
const { pitabulator, ersieve } = require('../../../utilities.js');
// Function
const U = (x, y) => {
    console.log('Computing U...');
    const pitable = pitabulator(y);
    const primtable = ersieve(Math.floor(Math.cbrt(x)));
    const psplitnum = Math.sqrt(x / y);
    const psplitindex = primtable.findIndex((element) => element > psplitnum);
    let total = 0;
    primtable.splice(0, psplitindex);
    for (const p of primtable) {
        total += pitable[y - 1] - pitable[Math.floor(x / (p * p)) - 1];
    }
    console.log('U computed!');
    return total;
}
// Module export
module.exports = U;