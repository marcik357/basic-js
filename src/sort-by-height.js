const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = arr.filter(n => n !== -1).sort((a,b) => a - b);
  for (let i=0, j = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = newArr[j];
      j++;
    }
  }

  return arr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
