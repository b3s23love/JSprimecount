/* JSprimecount is a fast implementation of algorithms calculating the prime-counting function.

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
const utilities = require('./JSprimesieve/utilities.js');
const { hideBin } = require('yargs/helpers');
const yargs = require('yargs');
const validators = require('./cmdvalidators.js');
// License
const licensePrinter = () => {
    console.log('JSprimecount Copyright © 2021 Jakub Drozd');
    console.log('This program comes with ABSOLUTELY NO WARRANTY; for details see https://github.com/JakubDrozd/JSprimecount/blob/main/LICENSE.txt.');
    console.log('This is free software, and you are welcome to redistribute it under certain conditions; see the above link for details.');
};
const startTime = new Date();
// Yargs logic
const options = yargs(hideBin(process.argv))
.usage('Usage: $0 x [options]')
.command('$0 [x]', false, yargs => {
        return yargs.positional('x', {
            conflicts: 'phi',
            type: 'number'
        });
    }, argv => {
        if (argv.x !== undefined) {
            licensePrinter();
            validators.xValidator(argv.x);
            console.log(utilities.pismall(argv.x));
        }
})
.option('phi', {
    describe: 'phi(x, a) counts the numbers <= x that are not divisible by any of the first a primes Call it by --phi x a.',
    nargs: 2
})
.option('time', {
    describe: 'Display time in seconds.',
    type: 'boolean'
})
.help()
.alias('help', 'h')
.alias('version', 'v')
.locale('en')
.strict()
.argv;

if (options.phi) {
    validators.phiArgValidator(options.phi[0], options.phi[1]);
    const primes = utilities.ersieve(utilities.nthprimeapprox(options.phi[1]));
    // console.log(utilities.phismall(options.phi[0], options.phi[1], primes));
    console.log(utilities.phismall(options.phi[0], options.phi[1], primes));
}

if (options.time) {
    const endTime = new Date();
    console.log(`${(endTime - startTime) / 1000} seconds`);
}