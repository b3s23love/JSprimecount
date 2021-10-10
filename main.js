// Import of modules
const pi = require('./pi.js');
const prompt = require('prompt-sync')();
// Declaration and definition of x
let x = Number(prompt('Enter x: '));
while (x > 1000000000000 || x < 10 || isNaN(x)) {
    console.log('Number must be between 10 and 1 trillion');
    x = Number(prompt('Enter x: '));
}
console.log(pi(x));