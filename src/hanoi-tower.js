const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = (2 ** disksNumber) - 1;
  const sec = Math.floor(turns / turnsSpeed * 60 * 60);
  return {turns: turns, seconds: sec}
};
