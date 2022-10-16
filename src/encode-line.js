const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  console.log(arr);

  let count = arr.reduce ((acc, elem) => {
  if (acc[elem]){
  acc[elem] +=1;
  } else {
  acc[elem] = 1;
  }
  return acc}, {});
  console.log(count);

  let arr2 = [ ];
  for (let [key, value] of Object.entries(count)){
   arr2.push(`${value} ${key}`)
   console.log(`${value} ${key}`)
  }
  console.log(arr2);

 let result = arr2.join('').replace(/\s/g, '');

 return result;
}

module.exports = {
  encodeLine
};
