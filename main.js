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
// Import of modules
const pi = require('./deleglise-rivat/utilities.js');
const { hideBin } = require('yargs/helpers');
const options = require('yargs')(hideBin(process.argv)).argv;
// License
console.log('JSprimecount Copyright © 2021 Jakub Drozd');
console.log('This program comes with ABSOLUTELY NO WARRANTY; for details see https://github.com/JakubDrozd/JSprimecount/blob/main/LICENSE.txt.');
console.log('This is free software, and you are welcome to redistribute it under certain conditions; see the above link for details.');
let x = options._[0];
if (x > 1000000000000 || x < 10 || isNaN(x)) {
    throw new Error('Number must be between 10 and 1 trillion');
}
console.log(pi.pismall(x));