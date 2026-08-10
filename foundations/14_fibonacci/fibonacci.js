const fibonacci = function (num) {
  num = Number(num);

  if (num < 0) return "OOPS";

  let a = 0; // previous-previous
  let b = 1; // previous

  for (let i = 0; i < num; i++) {
    [a, b] = [b, a + b]; // step forward one position
  }

  return a;
};

// Do not edit below this line
module.exports = fibonacci;
