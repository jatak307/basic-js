const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arr = members.filter(el => typeof el === 'string');
  let res = [];
  arr.forEach(el => {
    res.push(el.trim()[0].toUpperCase())
  });
  return res.sort().join('');
};
