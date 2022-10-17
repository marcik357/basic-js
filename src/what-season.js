const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (date instanceof Date && Object.getOwnPropertyNames(date).length == 0) {
    let season = {
      winter: [0, 1, 11],
      spring: [2, 3, 4],
      summer: [5, 6, 7],
      fall: [8, 9, 10],
    };
    let month = date.getMonth();
  
  
    for (let i in season) {
      if (season[i].some(item => item === month)) {
        return i
      }
    }
  } else {
    throw new Error('Invalid date!');
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};

