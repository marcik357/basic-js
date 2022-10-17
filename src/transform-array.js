const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = arr;
  let result = []
  if (arr instanceof Array) {
    for (let i = 0; i < arr.length; i++) {

      if (typeof newArr[i] === 'number') {
        result.push(newArr[i]);
      }
      // if (typeof newArr[i+1] === 'number') {
      //   result.push(newArr[i]);
      // }
      if (newArr[i + 1] === '--discard-prev' && newArr[i - 1] !== '--double-next') {
        result.pop()
      } else if (newArr[i + 1] === '--double-prev') {
        result.push(newArr[i]);
        result.push(newArr[i]);
      } 

      if (newArr[i] === '--discard-next') {
        newArr.splice([i+1], 1);
      } else if (newArr[i] === '--double-next' && typeof newArr[i + 2] === 'number') {
        result.push(newArr[i+1]);
      } else if (newArr[i] === '--double-next' && typeof newArr[i + 2] === '--discard-prev') {
        result.push(newArr[i+1]);
        result.push(newArr[i+1]);
      }

      if (newArr[i-1] === '--double-next' && typeof newArr[i] === 'number' && typeof newArr[i+1] === '--double-prev') {
        result.push(newArr[i]);
      }

      if (newArr[i-1] === '--double-next' && typeof newArr[i] === 'number' && typeof newArr[i+1] === '--discard-prev') {
        result.push(newArr[i]);
        result.push(newArr[i]);
      }

      if (newArr[i] === '--double-next' && typeof newArr[i+1] === 'number' && typeof newArr[i+2] === '--discard-prev') {
        result.push(newArr[i+1]);
        result.push(newArr[i+1]);
      }
      
      if (typeof newArr[i] === 'object' || typeof newArr[i] === 'string' && newArr[i] != '--discard-next' && newArr[i] != '--discard-prev' && newArr[i] != '--double-next' && newArr[i] != '--double-prev') {
        result.push(newArr[i]);
      }
      
      if (typeof newArr[i] === 'boolean' && newArr[i+1] !== 'boolean') {
        result.push(newArr[i]);
      }

      // if (newArr[i] === '--discrard-next') {
      //   newArr.splice([i + 1], 1);
      // }
      
    }

    return result;

  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};
// эта срань тупо крашится на неверных условиях теста