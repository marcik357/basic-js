const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let key1,key2 = {};
  let sum = 0;

  // matrix.forEach((row, index) => {
  //   if (index == 0) {
  //     row.forEach((item,i) => {
  //       if (item == 0 && i == 0) {
  //         key1[`${index}`] = '-';
  //       }
  //     });
  //   };
  //   if (index == 1) {
  //     row.forEach((item,i) => {
  //       if (item == 0 && i == 0) {
  //         key2[`${index}`] = '-';
  //       }
  //     });
  //   };
  // })

  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j < matrix[i].length; j++) {
      if (matrix[i][j]==0) {
        if (matrix[i + 1] != undefined) {matrix[i+1][j] = 0};
      };
    };
  };

  return matrix.flat().reduce((a,b) => a+b);

  // matrix.forEach((row, index) => {
  //   if (index == 0) {
  //     sum += row.reduce((prev,next) => prev + next);
  //   } else if (index == 1) {
  //     sum += row.reduce((cur,next,i) => {
  //       if (key1[i] == '-' && cur == 0) {
  //         cur, next = 0;
  //       } else {
  //         return cur + next;
  //       }
  //     });
  //   };
  // });



  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
