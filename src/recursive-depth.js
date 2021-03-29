const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let i = 0;
    let current = 1;
    while(i < arr.length) {
      if(Array.isArray(arr[i])) {
        current += this.calculateDepth(arr[i]);
      }
      if (current > depth) {
        depth = current;
      }
      current = 1;
      i++;
    }
    return depth;
  }
};