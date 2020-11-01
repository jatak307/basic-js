const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error;
  }

  let month = date.getMonth();
  let res = [0, 1, 11].includes(month) ? 'winter' : [2, 3, 4].includes(month) ? 'spring' : [5, 6, 7].includes(month) ? 'summer' : 'autumn';
  return res;
};
