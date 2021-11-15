const rightShift = n => {
  return   (n % 30n >= 29n) ? 56 - n / 30n * 8n
         : (n % 30n >= 23n) ? 57 - n / 30n * 8n
         : (n % 30n >= 19n) ? 58 - n / 30n * 8n
         : (n % 30n >= 17n) ? 59 - n / 30n * 8n
         : (n % 30n >= 13n) ? 60 - n / 30n * 8n
         : (n % 30n >= 11n) ? 61 - n / 30n * 8n
         : (n % 30n >= 7n)  ? 62 - n / 30n * 8n
         : (n % 30n >= 1n)  ? 63 - n / 30n * 8n
         : 64n - n / 30n * 8n;
};

const unsetL = n => {
    return n === 0n ? 0n : ~0 >>> rightShift(n);
};