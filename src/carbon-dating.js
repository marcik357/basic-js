const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !sampleActivity || sampleActivity == undefined) {
    return false
  } else if (isNaN(+sampleActivity) || sampleActivity.length == 0 || +sampleActivity <= 0) {
    return false
  }

    let k = 0.693 / HALF_LIFE_PERIOD;
    let time = Math.ceil(Math.log(MODERN_ACTIVITY / (+sampleActivity)) / k);
    return time >= 0 ? time : false;



  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
