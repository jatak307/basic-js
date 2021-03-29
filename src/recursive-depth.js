const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    {
      let depth = 1;
      let i = 0;
      while(i < arr.length) {
        if(Array.isArray(arr[i])) depth = Math.max(depth, this.calculateDepth(arr[i]));
      }
      return depth;
    }
  }
};