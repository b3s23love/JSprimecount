//
//        PhiTiny.cpp
//        phi_tiny(x, a) counts the numbers <= x that are not
//        divisible by any of the first a primes. phi_tiny(x, a)
//        computes phi(x, a) in constant time for a <= 8 using
//        lookup tables and the formula below.
//
//        phi(x, a) = (x / pp) * φ(pp) + phi(x % pp, a)
//        with pp = 2 * 3 * ... * prime[a]
//        φ(pp) = \prod_{i=1}^{a} (prime[i] - 1)
//
// Copyright © 2021 Jakub Drozd, <Kuba.drozd09@wp.pl>
//
// This file is distributed under the GPL v3 license, for full notice see main.js in the top level directory.
//

const assert = require('assert');

const primes = [0n, 2n, 3n, 5n, 7n, 11n, 13n, 17n];
const prime_products = [1n, 2n, 6n, 30n, 210n, 2310n, 30030n, 510510n];
const totients = [1n, 1n, 2n, 8n, 48n, 480n, 5760n, 92160n];
const pi = [0n, 0n, 1n, 2n, 2n, 3n, 3n, 4n, 4n, 4n, 4n, 5n, 5n, 6n, 6n, 6n, 6n, 7n, 7n, 8n];

const phi_recursive = (x, a) => {
    if (a < max_a()) {
        return phi(x, a);
    } else {
        assert.strictEqual(a, 8);
        // This code path will be executed most of the time.
        // In phi7(x) the variable a has been hardcoded to 7
        // which makes it run slightly faster than phi(x, a).
        // phi(x, 8) = phi(x, 7) - phi(x / prime[8], 7)
        return phi7(x) - phi7(x / 19);
    }
};

const phi = (x, a) => {
    assert(a < prime_products.length);
    const pp = prime_products[a];
    const remainder = x % pp;
    const xpp = x / pp;
    // For prime[a] <= 5 our phi(x % pp, a) lookup table
    // is a simple two dimensional array.
    if (a < phi_)
};

const phi7 = x => {
    const a = 7n;
    const pp = 510510n;
    const totient = 92160n;
    const remainder = x % pp;
    const xpp = x / pp;
    let sum = xpp * totient;
}

const max_a = () => primes.length;
const get_c = y => y < pi.length ? pi[y] : max_a();