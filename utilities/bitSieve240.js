const rightShift = n => {
  return   (n % 30 >= 29) ? 56 - Math.floor(n / 30 * 8)
         : (n % 30 >= 23) ? 57 - Math.floor(n / 30 * 8)
         : (n % 30 >= 19) ? 58 - Math.floor(n / 30 * 8)
         : (n % 30 >= 17) ? 59 - Math.floor(n / 30 * 8)
         : (n % 30 >= 13) ? 60 - Math.floor(n / 30 * 8)
         : (n % 30 >= 11) ? 61 - Math.floor(n / 30 * 8)
         : (n % 30 >= 7)  ? 62 - Math.floor(n / 30 * 8)
         : (n % 30 >= 1)  ? 63 - Math.floor(n / 30 * 8)
         : 64 - Math.floor(n / 30 * 8);
};

const unsetL = n => {
    return n === 0 ? 0 : ~0 >>> rightShift(n);
};