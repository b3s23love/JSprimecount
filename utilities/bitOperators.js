//
// bitOperators.js
// Unsigned bitwise operators
//
// Copyright © 2022 Jakub Drozd, <Kuba.drozd09@wp.pl>
//
// This file is distributed under the GPL v3 license, for full notice see main.js in the top level directory.
//
const bigintMath = require('extra-bigint');

const bitNot = (n, isLong) => {
    const pow2 = isLong ? 18446744073709551615n : 4294967295n;
    return pow2 - n;
};

const bitLeftShift = (x, a, isLong) => {
    if (a < 0n) {
        return bitRightShift(x, -a, isLong);
    } else if (a >= bigintMath.log2(x)) {
        return 0;
    }
    const pow2 = isLong ? 18446744073709551616n : 4294967296n;
    const shiftNumber = ( 2n ** a) * x;
    return shiftNumber % pow2;
};

const bitRightShift = (x, a, isLong) => {
    if (a < 0n) {
        return bitLeftShift(x, -a, isLong);
    } else if (a >= bigintMath.log2(x)) {
        return 0;
    }
    return x / ( 2n ** a );
};

const and64 = (v1, v2) => {
    var hi = 0x80000000n;
    var low = 0x7fffffffn;
    var hi1 = ~~(v1 / hi);
    var hi2 = ~~(v2 / hi);
    var low1 = v1 & low;
    var low2 = v2 & low;
    var h = hi1 & hi2;
    var l = low1 & low2;
    return h*hi + l;
};

module.exports.bitNot = bitNot;
module.exports.bitLeftShift = bitLeftShift;
module.exports.bitRightShift = bitRightShift;
module.exports.and64 = and64;