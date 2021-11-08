//
//        pi_meissel.js
//        Count the number of primes <= x using Meissel's formula.
//        Meissel's formula is an improved version of Legendre's
//        formula, it adds the P2(x, a) term which is the 2nd partial
//        sieve function and uses y=x^(1/3) instead of x^(1/2).
//
//        Meissel's formula:
//        pi(x) = pi(y) + phi(x, a) - 1 - P2(x, a)
//        with y = x^1/3, a = pi(y)
//
// Copyright © 2021 Jakub Drozd, <Kuba.drozd09@wp.pl>
//
// This file is distributed under the GPL v3 license, for full notice see main.js in the top level directory.
//

const utilities = require('./utilities/utilities.js');

// Count the number of primes <= x using Meissel's formula.
// Run time: O(x/(log x)^3)
// Memory usage: O(x^(1/2))

const pi_meissel = (x, is_print) => {
    const y = Math.floor(Math.cbrt(x));
    const a = utilities.pismall(y);

    if (is_print) {
        console.log('');
        console.log('=== pi_meissel(x) ===');
        console.log('pi(x) = phi(x, a) + a - 1 - P2');
        console.log(`x: ${x}`);
        console.log(`y: ${y}`);
        console.log(`a: ${a}`);
    }

    const phi = utilities.phi(x, a);

};