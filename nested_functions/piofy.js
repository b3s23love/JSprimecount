const piofy = y => {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(y), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < y; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < y; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < y; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output.length;
}
// Module export
module.exports = piofy;