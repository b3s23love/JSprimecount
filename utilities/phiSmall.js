//
//        PhiSmall.js
//        phiSmall(x, a) counts the numbers <= x that are not
//        divisible by any of the first a primes. phiSmall(x, a)
//        computes phi(x, a) in constant time for a <= 8 using
//        lookup tables and the formula below.
//
//        phi(x, a) = (x / pp) * φ(pp) + phi(x % pp, a)
//        with pp = 2 * 3 * ... * prime[a]
//        φ(pp) = \prod_{i=1}^{a} (prime[i] - 1)
//
// Copyright © 2022 Jakub Drozd, <Kuba.drozd09@wp.pl>
//
// This file is distributed under the GPL v3 license, for full notice see main.js in the top level directory.
//

const assert = require('assert');
const BitSieve240 = require('./bitSieve240.js');
const bigintMath = require('extra-bigint');

class PhiSmall extends BitSieve240 {
    constructor() {
        super();
        this.primes = [0n, 2n, 3n, 5n, 7n, 11n, 13n, 17n];
        this.primeProducts = [1n, 2n, 6n, 30n, 210n, 2310n, 30030n, 510510n];
        this.totients = [1n, 1n, 2n, 8n, 48n, 480n, 5760n, 92160n];
        this.pi = [0n, 0n, 1n, 2n, 2n, 3n, 3n, 4n, 4n, 4n, 4n, 5n, 5n, 6n, 6n, 6n, 6n, 7n, 7n, 8n];
        this.phi_ = new Array(4);
        
        for (let a = 0n; a <= this.maxA(); a++) {
            let pp = this.primeProducts[a];
            this.phi_[a] = new Array(Number(pp));
            this.phi_[a][0n] = 0n;
        
            for (let x = 1n; x < pp; x++) {
                const phiXA = this.phi(x, a - 1n) - this.phi(x / this.primes[a], a - 1n);
                this.phi_[a][x] = phiXA;
            }
        }
    }

    phiRecursive(x, a) {
        if (a < this.maxA()) {
            return this.phi(x, a);
        } else {
            assert.strictEqual(a, 8n);
            return this.phi7(x) - this.phi7(x / 19n);
        }
    }

    phi(x, a) {
        assert.ok(a < this.maxA());
        const pp = this.primeProducts[a];
        return (x / pp) * this.totients[a] + this.phi_[a][x % pp];
    }

    phi7(x) {
        const a = 7;
        const pp = this.primeProducts[7];
        const totient = this.totients[7];
        return (x / pp) * totient + this.phi_[a][x % pp];
    }

    maxA() {
        return this.primes.length - 1;
    }

    getC(y) {
        assert(y >= 0);

        if (y > this.primes[this.primes.length - 1]) {
            return this.maxA();
        } else {
            return this.pi[y];
        }
    }

    getK(x) {
        this.getC(bigintMath.root(x, 4n));
    }

    isPhiSmall(a) {
        return a <= this.maxA();
    }

    phiSmall(x, a) {
        return this.phiRecursive(x, a);
    }
}

module.exports = PhiSmall;