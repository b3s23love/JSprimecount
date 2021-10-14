/* JSprimecount calculates pi(x), the prime-counting function using the Deleglise-Rivat algorithm.
Link to the mathematical paper: https://www.ams.org/journals/mcom/1996-65-213/S0025-5718-96-00674-6/S0025-5718-96-00674-6.pdf

Copyright © 2021 Jakub Drozd

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see https://www.gnu.org/licenses/.
E-mail: Kuba.drozd09@wp.pl */
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