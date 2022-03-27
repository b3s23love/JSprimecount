//
//        phi.js
//        The PhiCache class calculates the partial sieve function
//        (a.k.a. Legendre-sum) using the recursive formula:
//        phi(x, a) = phi(x, a - 1) - phi(x / primes[a], a - 1).
//        phi(x, a) counts the numbers <= x that are not divisible
//        by any of the first a primes. The algorithm used is an
//        optimized version of the recursive algorithm described in
//        Tomás Oliveira e Silva's paper [2].
//
//    [1] Tomás Oliveira e Silva, Computing pi(x): the combinatorial
//        method, Revista do DETUA, vol. 4, no. 6, March 2006, p. 761.
//        http://sweet.ua.pt/tos/bib/5.4.pdf
//
// Copyright © 2022 Jakub Drozd, <Kuba.drozd09@wp.pl>
//
// This file is distributed under the GPL v3 license, for full notice see main.js in the top level directory.
//

const phiSmall = require('./phiSmall.js');

const PhiCache = (x, a, primes, pi) => {
    // We cache phi(x, a) if a <= max_a.
    let max_a = 100;

    // Make sure we cache only frequently used values
    a = Math.min(a, 30);
    max_a = Math.min(a, max_a);
    

};