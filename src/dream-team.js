const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let firstLitter = [];

  if (Array.isArray(members)){
   for (let i = 0; i < members.length; i++){
     if (typeof members[i] == "string") {
      firstLitter.push(members[i].toUpperCase().trim().slice(0,1));
      }
   }
  } else return false;

   let result = String (firstLitter.sort().join(''));

  return result;
}

module.exports = {
  createDreamTeam
};
