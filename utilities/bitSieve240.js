const bigintMath = require('extra-bigint');
const { bitNot, bitLeftShift, bitRightShift } = require('./bitOperators.js');

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

// Bitmask to unset bits >= n
const unsetL = n => {
    return n === 0n ? 0n : bitRightShift(bitNot(0n, true), rightShift(n), true);
};

// pi(x) for x < 6
const piTiny_ = [0, 0, 1, 2, 2, 3];

// Bitmasks needed to set a specific bit in the sieve array
const setBit_ = [
  0n, bitLeftShift(1n, 0n, true), 0n, 0n, 0n,
  0n, 0n, bitLeftShift(1n, 1n, true), 0n, 0n,
  0n, bitLeftShift(1n, 2n, true), 0n, bitLeftShift(1n, 3n, true), 0n,
  0n, 0n, bitLeftShift(1n, 4n, true), 0n, bitLeftShift(1n, 5n, true),
  0n, 0n, 0n, bitLeftShift(1n, 6n, true), 0n,
  0n, 0n, 0n, 0n, bitLeftShift(1n, 7n, true),
  0n, bitLeftShift(1n, 8n, true), 0n, 0n, 0n,
  0n, 0n, bitLeftShift(1n, 9n, true), 0n, 0n,
  0n, bitLeftShift(1n, 10n, true), 0n, bitLeftShift(1n, 11n, true), 0n,
  0n, 0n, bitLeftShift(1n, 12n, true), 0n, bitLeftShift(1n, 13n, true),
  0n, 0n, 0n, bitLeftShift(1n, 14n, true), 0n,
  0n, 0n, 0n, 0n, bitLeftShift(1n, 15n, true),
  0n, bitLeftShift(1n, 16n, true), 0n, 0n, 0n,
  0n, 0n, bitLeftShift(1n, 17n, true), 0n, 0n,
  0n, bitLeftShift(1n, 18n, true), 0n, bitLeftShift(1n, 19n, true), 0n,
  0n, 0n, bitLeftShift(1n, 20n, true), 0n, bitLeftShift(1n, 21n, true),
  0n, 0n, 0n, bitLeftShift(1n, 22n, true), 0n,
  0n, 0n, 0n, 0n, bitLeftShift(1n, 23n, true),
  0n, bitLeftShift(1n, 24n, true), 0n, 0n, 0n,
  0n, 0n, bitLeftShift(1n, 25n, true), 0n, 0n,
  0n, bitLeftShift(1n, 26n, true), 0n, bitLeftShift(1n, 27n, true), 0n,
  0n, 0n, bitLeftShift(1n, 28n, true), 0n, bitLeftShift(1n, 29n, true),
  0n, 0n, 0n, bitLeftShift(1n, 30n, true), 0n,
  0n, 0n, 0n, 0n, bitLeftShift(1n, 31n, true),
  0n, bitLeftShift(1n, 32n, true), 0n, 0n, 0n,
  0n, 0n, bitLeftShift(1n, 33n, true), 0n, 0n,
  0n, bitLeftShift(1n, 34n, true), 0n, bitLeftShift(1n, 35n, true), 0n,
  0n, 0n, bitLeftShift(1n, 36n, true), 0n, bitLeftShift(1n, 37n, true),
  0n, 0n, 0n, bitLeftShift(1n, 38n, true), 0n,
  0n, 0n, 0n, 0n, bitLeftShift(1n, 39n, true),
  0n, bitLeftShift(1n, 40n, true), 0n, 0n, 0n,
  0n, 0n, bitLeftShift(1n, 41n, true), 0n, 0n,
  0n, bitLeftShift(1n, 42n, true), 0n, bitLeftShift(1n, 43n, true), 0n,
  0n, 0n, bitLeftShift(1n, 44n, true), 0n, bitLeftShift(1n, 45n, true),
  0n, 0n, 0n, bitLeftShift(1n, 46n, true), 0n,
  0n, 0n, 0n, 0n, bitLeftShift(1n, 47n, true),
  0n, bitLeftShift(1n, 48n, true), 0n, 0n, 0n,
  0n, 0n, bitLeftShift(1n, 49n, true), 0n, 0n,
  0n, bitLeftShift(1n, 50n, true), 0n, bitLeftShift(1n, 51n, true), 0n,
  0n, 0n, bitLeftShift(1n, 52n, true), 0n, bitLeftShift(1n, 53n, true),
  0n, 0n, 0n, bitLeftShift(1n, 54n, true), 0n,
  0n, 0n, 0n, 0n, bitLeftShift(1n, 55n, true),
  0n, bitLeftShift(1n, 56n, true), 0n, 0n, 0n,
  0n, 0n, bitLeftShift(1n, 57n, true), 0n, 0n,
  0n, bitLeftShift(1n, 58n, true), 0n, bitLeftShift(1n, 59n, true), 0n,
  0n, 0n, bitLeftShift(1n, 60n, true), 0n, bitLeftShift(1n, 61n, true),
  0n, 0n, 0n, bitLeftShift(1n, 62n, true), 0n,
  0n, 0n, 0n, 0n, bitLeftShift(1n, 63n, true)
];

// Bitmasks needed to unset a specific bit in the sieve array
const unsetBit = [
  bitNot(0n, true), bitNot(bitLeftShift(1n, 0n, true), true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 1n, true), true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 2n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 3n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 4n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 5n, true), true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 6n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 7n, true), true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 8n, true), true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 9n, true), true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 10n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 11n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 12n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 13n, true), true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 14n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 15n, true), true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 16n, true), true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 17n, true), true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 18n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 19n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 20n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 21n, true), true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 22n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 23n, true), true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 24n, true), true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 25n, true), true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 26n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 27n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 28n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 29n, true), true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 30n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 31n, true), true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 32n, true), true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 33n, true), true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 34n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 35n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 36n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 37n, true), true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 38n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 39n, true), true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 40n, true), true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 41n, true), true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 42n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 43n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 44n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 45n, true), true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 46n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 47n, true), true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 48n, true), true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 49n, true), true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 50n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 51n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 52n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 53n, true), true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 54n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 55n, true), true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 56n, true), true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 57n, true), true), bitNot(0n, true), bitNot(0n, true),
  bitNot(0n, true), bitNot(bitLeftShift(1n, 58n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 59n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 60n, true), true), bitNot(0n, true), bitNot(bitLeftShift(1n, 61n, true), true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 62n, true), true), bitNot(0n, true),
  bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(0n, true), bitNot(bitLeftShift(1n, 63n, true), true)
];

const unsetLarger = [
  unsetL(0), unsetL(1), unsetL(2), unsetL(3), unsetL(4),
  unsetL(5), unsetL(6), unsetL(7), unsetL(8), unsetL(9),
  unsetL(10), unsetL(11), unsetL(12), unsetL(13), unsetL(14),
  unsetL(15), unsetL(16), unsetL(17), unsetL(18), unsetL(19),
  unsetL(20), unsetL(21), unsetL(22), unsetL(23), unsetL(24),
  unsetL(25), unsetL(26), unsetL(27), unsetL(28), unsetL(29),
  unsetL(30), unsetL(31), unsetL(32), unsetL(33), unsetL(34),
  unsetL(35), unsetL(36), unsetL(37), unsetL(38), unsetL(39),
  unsetL(40), unsetL(41), unsetL(42), unsetL(43), unsetL(44),
  unsetL(45), unsetL(46), unsetL(47), unsetL(48), unsetL(49),
  unsetL(50), unsetL(51), unsetL(52), unsetL(53), unsetL(54),
  unsetL(55), unsetL(56), unsetL(57), unsetL(58), unsetL(59),
  unsetL(60), unsetL(61), unsetL(62), unsetL(63), unsetL(64),
  unsetL(65), unsetL(66), unsetL(67), unsetL(68), unsetL(69),
  unsetL(70), unsetL(71), unsetL(72), unsetL(73), unsetL(74),
  unsetL(75), unsetL(76), unsetL(77), unsetL(78), unsetL(79),
  unsetL(80), unsetL(81), unsetL(82), unsetL(83), unsetL(84),
  unsetL(85), unsetL(86), unsetL(87), unsetL(88), unsetL(89),
  unsetL(90), unsetL(91), unsetL(92), unsetL(93), unsetL(94),
  unsetL(95), unsetL(96), unsetL(97), unsetL(98), unsetL(99),
  unsetL(100), unsetL(101), unsetL(102), unsetL(103), unsetL(104),
  unsetL(105), unsetL(106), unsetL(107), unsetL(108), unsetL(109),
  unsetL(110), unsetL(111), unsetL(112), unsetL(113), unsetL(114),
  unsetL(115), unsetL(116), unsetL(117), unsetL(118), unsetL(119),
  unsetL(120), unsetL(121), unsetL(122), unsetL(123), unsetL(124),
  unsetL(125), unsetL(126), unsetL(127), unsetL(128), unsetL(129),
  unsetL(130), unsetL(131), unsetL(132), unsetL(133), unsetL(134),
  unsetL(135), unsetL(136), unsetL(137), unsetL(138), unsetL(139),
  unsetL(140), unsetL(141), unsetL(142), unsetL(143), unsetL(144),
  unsetL(145), unsetL(146), unsetL(147), unsetL(148), unsetL(149),
  unsetL(150), unsetL(151), unsetL(152), unsetL(153), unsetL(154),
  unsetL(155), unsetL(156), unsetL(157), unsetL(158), unsetL(159),
  unsetL(160), unsetL(161), unsetL(162), unsetL(163), unsetL(164),
  unsetL(165), unsetL(166), unsetL(167), unsetL(168), unsetL(169),
  unsetL(170), unsetL(171), unsetL(172), unsetL(173), unsetL(174),
  unsetL(175), unsetL(176), unsetL(177), unsetL(178), unsetL(179),
  unsetL(180), unsetL(181), unsetL(182), unsetL(183), unsetL(184),
  unsetL(185), unsetL(186), unsetL(187), unsetL(188), unsetL(189),
  unsetL(190), unsetL(191), unsetL(192), unsetL(193), unsetL(194),
  unsetL(195), unsetL(196), unsetL(197), unsetL(198), unsetL(199),
  unsetL(200), unsetL(201), unsetL(202), unsetL(203), unsetL(204),
  unsetL(205), unsetL(206), unsetL(207), unsetL(208), unsetL(209),
  unsetL(210), unsetL(211), unsetL(212), unsetL(213), unsetL(214),
  unsetL(215), unsetL(216), unsetL(217), unsetL(218), unsetL(219),
  unsetL(220), unsetL(221), unsetL(222), unsetL(223), unsetL(224),
  unsetL(225), unsetL(226), unsetL(227), unsetL(228), unsetL(229),
  unsetL(230), unsetL(231), unsetL(232), unsetL(233), unsetL(234),
  unsetL(235), unsetL(236), unsetL(237), unsetL(238), unsetL(239)
];