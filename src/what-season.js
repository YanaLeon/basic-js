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
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!')
  }
  
  if (Object.prototype.toString.call(date) != "[object Date]") {
    throw new Error ("Invalid date!")
  }

  let numberMonth = date.getMonth();
  let season = '';
   if (numberMonth == 11 || numberMonth <= 1) {
    season = 'winter';
   } else if (numberMonth > 1 && numberMonth <= 4) {
    season = 'spring';
   } else if (numberMonth > 4 && numberMonth <= 7) {
    season = 'summer';
   } else if (numberMonth > 7 && numberMonth <= 10) {
    season = 'autumn';
   }
  return season;
}

module.exports = {
  getSeason
};
