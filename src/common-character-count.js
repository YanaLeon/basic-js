const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr = s1.split('').sort();
  let arr2 = s2.split('').sort();

  let counter = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr2.length; j++) {
        if (arr[i] === arr2[j]) {
           counter += 1;
           result.push(arr[i]);
           arr2.splice(j, 1);
           break;
          }
       }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
