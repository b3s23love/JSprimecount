// Module imports
const P2 = require('./nested_functions/P2.js');
const phi = require('./nested_functions/phi.js');
const ersievepi = require('./nested_functions/ersievepi.js');
// Function
const pi = x => {
    return ersievepi.piofy(x);
}
// Module export
module.exports = pi;