// Module imports
const P2 = require('./nested_functions/P2.js');
const phi = require('./nested_functions/phi.js');
const utilities = require('./nested_functions/utilities.js');
// Function
const pi = x => {
    console.log(`Calculating pi for ${x}...`);
    let result = utilities.pismall(x);
    console.log('Pi calculated!');
    return result;
}
// Module export
module.exports = pi;