const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix || matrix.length === 0) {
    return 0;
  }

  let res = 0;
  matrix.forEach(el => el.forEach(elem => elem === '^^' ? res++ : res));
  return res;
};
