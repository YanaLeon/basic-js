const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
 
  let arr2 = [];
  for (let key of arr){
  arr2.push(Number(key));
  }

  let arr3 = [];
  for (let i = 0; i < arr2.length; i++){
  let arrCopy = arr2.slice();
  arrCopy.splice(i, 1);
  arr3.push(Number(arrCopy.join('')));
  }
 
 let number = Math.max(...arr3);
 return number;
}

module.exports = {
  deleteDigit
};
