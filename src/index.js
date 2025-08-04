module.exports = function toReadable(number) {
  const oneCharNumbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const twoNumbersArr = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90,
  ];

  const twoCharNumbers = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  const numberAsString = String(number);
  let result = '';

  function oneToReadable(n) {
    const num = +n;
    return oneCharNumbers[num];
  }

  function twoToReadable(n) {
    if (n < 10) {
      return oneToReadable(n);
    }

    if (twoNumbersArr.includes(n)) {
      return twoCharNumbers[n];
    }

    const str = String(n);
    const firstPartOfNum = twoCharNumbers[`${str.slice(0, 1)}0`];
    const secondPartOfNum = oneToReadable(str.slice(1));
    return `${firstPartOfNum} ${secondPartOfNum}`;
  }

  function threeToReadable(n) {
    const str = String(n);
    const firstPartOfNum = oneToReadable(str.slice(0, 1));

    if (str.slice(1) === '00') {
      return `${firstPartOfNum} hundred`;
    }

    const restPartOfNum = twoToReadable(+str.slice(1));
    return `${firstPartOfNum} hundred ${restPartOfNum}`;
  }

  switch (numberAsString.length) {
    case 1:
      result = oneToReadable(number);
      break;
    case 2:
      result = twoToReadable(number);
      break;
    case 3:
      result = threeToReadable(number);
      break;
    default:
      result = '';
  }

  return result;
};
