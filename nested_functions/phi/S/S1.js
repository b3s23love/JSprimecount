/* JSprimecount calculates pi(x), the prime-counting function using the Deleglise-Rivat algorithm.
Link to the mathematical paper: https://www.ams.org/journals/mcom/1996-65-213/S0025-5718-96-00674-6/S0025-5718-96-00674-6.pdf

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