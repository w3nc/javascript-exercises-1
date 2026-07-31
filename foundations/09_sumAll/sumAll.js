const sumAll = function (num1, num2) {
  const isValid = (n) => Number.isInteger(n) && n > 0;

  if (!isValid(num1) || !isValid(num2)) {
    return "ERROR";
  }

  let sum = 0;

  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
