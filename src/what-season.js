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
  // throw new NotImplementedError('Not implemented');
  const now = date;
  const month = now.getMonth() + 1;
  const day = now.getDate();
  
  if (month > 3 && month < 6) {
    return 'spring';
  }

  if (month > 6 && month < 9) {
    return 'summer';
  }

  if (month > 9 && month < 12) {
    return 'fall';
  }

  if (month >= 1 && month < 3) {
    return 'winter';
  }

  
  if (month === 3) {
    return day < 22 ? 'winter' : 'spring';
  }

  if (month === 6) {
    return day < 22 ? 'spring' : 'summer';
  }

  if (month === 9) {
    return day < 22 ? 'summer' : 'fall';
  }

  if (month === 12) {
    return day < 22 ? 'fall' : 'winter';
  }

  
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
