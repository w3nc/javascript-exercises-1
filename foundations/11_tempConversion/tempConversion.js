const convertToCelsius = function (fah) {
  let cel = ((fah - 32) * 5) / 9;

  if (!Number.isInteger(cel)) {
    // let rounded = Math.round(cel * 10) / 10;
    let fixed = cel.toFixed(1);
    return Number(fixed);
  }

  return cel;
};

const convertToFahrenheit = function (cel) {
  let fah = (cel * 9) / 5 + 32;

  if (!Number.isInteger(fah)) {
    // let rounded = Math.round(fah * 10) / 10;
    let fixed = fah.toFixed(1);
    return Number(fixed);
  }

  return fah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
