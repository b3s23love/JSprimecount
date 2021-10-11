const ersieve = n => {
    console.log(`Doing Eratosthenes sieve for ${n}...`);
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];
    
    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }
    
    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
    
    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }
    console.log('Sieve done!');
    return output;
}

const piofy = y => {
    return ersieve(y).length;
}

const pitabulator = (x) => {
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
}
// Module exports
module.exports.ersieve = ersieve;
module.exports.piofy = piofy;
module.exports.pitabulator = pitabulator;