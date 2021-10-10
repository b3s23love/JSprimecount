// Import of modules
const pi = require('./pi.js');
const prompt = require('prompt-sync')();
// Declaration and definition of x
let x = Number(prompt('Enter x: '));
while (x > Number.MAX_SAFE_INTEGER || x < 10 || isNaN(x)) {
    console.log('Number must be between 10 and 9007199254740991 (Javascript max safe integer)');
    x = Number(prompt('Enter x: '));
}
console.log(pi(x));