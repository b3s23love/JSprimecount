/* JSprimecount calculates pi(x), the prime-counting function using a revised version of the Meissnel-Lehmer method.
Link to the mathematical paper: https://www.ams.org/journals/mcom/1996-65-213/S0025-5718-96-00674-6/S0025-5718-96-00674-6.pdf

Copyright © 2021 Jakub Drozd
For full notice see pi.js */
// Module imports
const W1 = require('./V2/W1.js');
const W2 = require('./V2/W2.js');
const W3 = require('./V2/W3.js');
const W4 = require('./V2/W4.js');
const W5 = require('./V2/W5.js');
// Have to do...
// Module export
module.exports = S;