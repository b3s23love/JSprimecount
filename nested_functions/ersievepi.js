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
    console.log(`Calculating pi of ${y}...`);
    let pi = ersieve(y).length;
    console.log('Pi calculated!');
    return pi;
}

const pitabulator = (x) => {
    console.log(`Tabulating pi for ${x}...`);
    let primearr = ersieve(x);
    let pitable = [0];
    for (let i = 1; i < x; i++) {
        if (primearr.some((element) => element === i + 1)) {
            pitable.push(pitable[i - 1] + 1);
        } else {
            pitable.push(pitable[i - 1]);
        }
    }
    console.log('Pi tabulated!');
    return pitable;
}

const mobius = n => {
    // Handling 1 separately
    if (n === 1) {
        return 1;
    }
    
    let p = 0;
  
    // Handling 2 separately
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
}
// Module exports
module.exports.ersieve = ersieve;
module.exports.piofy = piofy;
module.exports.pitabulator = pitabulator;
module.exports.mobius = mobius;