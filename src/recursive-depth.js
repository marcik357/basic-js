const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/*arr*/) {
    // let counter = 1;
    // let countingArr = [];

    // function counting(arr) {
    //   if (arr instanceof Array && arr.length > 0) {
    //     counter++;
    //     return counting(arr)
    //   } else {
    //     return counter;
    //   }
    // }

    // for (let i=0;i<arr.length;i++) {
    //   countingArr.push(counting(arr[i]));
    // }

    // return counter;

    // return countingArr.sort((a,b) => a - b)[0];


    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
