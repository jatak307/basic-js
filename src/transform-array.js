const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error;
  }

  let res = []
  arr.forEach((el, index, array) => {
    if (el === '--double-next') {
      if (typeof array[index + 1] !== 'undefined') {
        res.push(array[index + 1])
      }
    } else if (el === '--double-prev') {
      if (typeof array[index - 1] !== 'undefined' && array[index - 2] !== '--discard-next') {
        res.push(array[index - 1])
      }
    } else if (array[index - 1] === '--discard-next') {
      res.pop()
    } else if (el === '--discard-prev' && array[index - 2] !== '--discard-next') {
      res.pop()
    } else {
      res.push(el)
    }
  })
  return res.filter(el => el !== '--discard-next' && el !== '--discard-prev')
};
