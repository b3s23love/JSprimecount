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

const primes = [0, 2, 3, 5, 7, 11, 13, 17];
const prime_products = [1, 2, 6, 30, 210, 2310, 30030, 510510];
const totients = [1, 1, 2, 8, 48, 480, 5760, 92160];
const pi = [0, 0, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 8];

const phiTiny = 