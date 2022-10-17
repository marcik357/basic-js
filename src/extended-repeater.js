const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatedStr = [];
  let additions = []

  if (options.addition && options.additionRepeatTimes && options.additionSeparator) {
    for (options.additionRepeatTimes; options.additionRepeatTimes > 0; options.additionRepeatTimes--) {
      additions.push(options.addition)
    }
    if (additions.length > 1) additions.join(options.additionSeparator);
  } else if (options.addition && options.additionRepeatTimes) {
    for (options.additionRepeatTimes; options.additionRepeatTimes > 0; options.additionRepeatTimes--) {
      additions.push(options.addition)
      if (additions.length > 1) additions.join('|');
    }
  } else if (options.addition) {
    additions.push(options.addition)
  }


  // if (options.repeatTimes && options.separator) {
  //   for (options.repeatTimes; options.repeatTimes > 0; options.repeatTimes--) {
  //     repeatedStr.push(str);
  //     if (additions.length > 0) repeatedStr.push(additions);
  //   }
  //   repeatedStr = repeatedStr.join(options.separator);
  // } else if (options.repeatTimes) {
  //   for (options.repeatTimes; options.repeatTimes > 0; options.repeatTimes--) {
  //     repeatedStr.push(str);
  //     if (options.repeatTimes > 1 ) {
  //       if (additions.length > 0) repeatedStr.push(additions);
  //       repeatedStr.push('+');
  //     }
  //   }
  //   repeatedStr = repeatedStr.join('');
  // } else {
  //   repeatedStr = repeatedStr.push(str).join('');
  // }

  if (options.repeatTimes && options.separator) {
    for (options.repeatTimes; options.repeatTimes > 0; options.repeatTimes--) {
      repeatedStr += str;
      if (additions.length > 0 && options.repeatTimes > 1) repeatedStr += additions.join('') + options.separator;
      if (additions.length > 0 && options.repeatTimes == 0) repeatedStr += additions.join('');
      if (additions.length == 0 && options.repeatTimes > 1) repeatedStr += options.separator;
    }
  } else if (options.repeatTimes) {
    for (options.repeatTimes; options.repeatTimes > 0; options.repeatTimes--) {
      repeatedStr += str;
      if (additions.length > 0 && options.repeatTimes > 0) repeatedStr += additions.join('') + '+';
      if (additions.length > 0 && options.repeatTimes == 0) repeatedStr += additions.join('');
      if (additions.length < 2 && options.repeatTimes > 1) repeatedStr += '+';
    }
  } else {
    repeatedStr = str;
  }

  return repeatedStr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};





