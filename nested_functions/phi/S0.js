// Module import
const { mobiustabulator } = require('../utilities.js');
// Function
const S0 = (x, y) => {
    let mobiustable = mobiustabulator(y);
    let total = 0;
    for (let i = 0; i < y; i++) {
        total += mobiustable[i] * Math.floor(x / (i + 1));
    }
    return total;
}
// Module export
module.exports = S0;