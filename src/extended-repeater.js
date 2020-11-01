const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, 
  {
    repeatTimes = 1, 
    separator = '+', 
    addition = '', 
    additionRepeatTimes = 1, 
    additionSeparator = '|'
  }) {
    let additionStr = addition;
    for (let i = 1; i < Number(additionRepeatTimes); i++){
            additionStr += (String(additionSeparator) + addition);
        }
        
    let res = str + additionStr;
    for (let i = 1; i < Number(repeatTimes); i++) {
        res += (String(separator) + str + additionStr);
    }
    return res;
};
  