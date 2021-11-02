const { exit } = require('yargs');

const xValidator = (x) => {
    if (isNaN(x)) {
        console.log('Exited with code 2: Input is not a number');
        exit(2, 'Input is not a number');
    } else if (x < 10) {
        console.log('Exited with code 3: Input is smaller than 10');
        exit(3, 'Input is smaller than 10');
    } else if (x > 1e12) {
        console.log('Exited with code 4: Input is greater than 1 trillion');
        exit(4, 'Input is greater than 1 trillion');
    }
};

module.exports.xValidator = xValidator;