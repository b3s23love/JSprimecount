/* JSprimecount is a fast implementation of algorithms calculating the prime-counting function.

Copyright © 2022 Jakub Drozd
This file is distributed under the GPL v3 license, for full notice see main.js in the top level directory. */
const ersieve = n => {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];
    
    // Make an array from 2 to (n - 1)
    for (let i = 0; i < n; i++) {
        array.push(true);
    }
    
    // Remove multiples of primes starting from 2, 3, 5,...
    for (let i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
    
    // All array[i] set to true are primes
    for (let i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }
    return output;
};

const pismall = y => {
    let pi = ersieve(y).length;
    return pi;
};

const pitabulator = x => {
    let primearr = ersieve(x);
    let pitable = [0];
    for (let i = 1; i < x; i++) {
        if (primearr.some((element) => element === i + 1)) {
            pitable.push(pitable[i - 1] + 1);
        } else {
            pitable.push(pitable[i - 1]);
        }
    }
    return pitable;
};

const mobius = n => {
    // Handling 1 separately
    if (n === 1) {
        return 1;
    }

    // Handling 2 separately
    if (n === 2) {
        return -1;
    }
    let p = 0;
    
    // Handling divisibility by 2 separately
    if (n % 2 == 0)
    {
        n = parseInt(n / 2, 10);
        p++;
        
        // If 2^2 also divides N
        if (n % 2 == 0)
            return 0;
    }
    
    // Check for all other prime factors
    for (let i = 3; i <= Math.sqrt(n); i = i+2)
    {
        // If i divides n
        if (n % i == 0)
        {
            n = parseInt(n / i, 10);
            p++;
            
            // If i^2 also divides N
            if (n % i == 0)
                return 0;
        }
    }

    return (p % 2 == 0)? -1 : 1;
};

const mobiustabulator = x => {
    let mobiustable = [];
    for (let i = 1; i <= x; i++) {
        mobiustable.push(mobius(i));
    }
    return mobiustable;
};

const phismall = (x, b, primlist) => {
    if (b === 0) {
        return Math.floor(x);
    } else {
        let phi1 = phismall(x, b - 1, primlist);
        let phi2 = phismall(x / primlist[b - 1], b - 1, primlist);
        return phi1 - phi2;
    }
};

const nthprimeapprox = n => {
    if (n >= 6) {
        return n * Math.log(n * Math.log(n));
    } else {
        return 15;
    }
};
// Module exports
module.exports.ersieve = ersieve;
module.exports.pismall = pismall;
module.exports.pitabulator = pitabulator;
module.exports.mobius = mobius;
module.exports.mobiustabulator = mobiustabulator;
module.exports.phismall = phismall;
module.exports.nthprimeapprox = nthprimeapprox;