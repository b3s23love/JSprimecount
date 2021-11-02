/* JSprimecount is a fast implementation of algorithms calculating the prime-counting function.

Copyright © 2021 Jakub Drozd
For full notice see pi.js */
// Function
const S1 = (piofy, piofcbrtx) => {
    console.log('Calculating S1...');
    const diff = piofy - piofcbrtx;
    console.log('S1 calculated!');
    return (diff * (diff - 1)) / 2;
}
// Module export
module.exports = S1;