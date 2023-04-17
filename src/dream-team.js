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
  // throw new NotImplementedError('Not implemented');
  
  let members1 = members.filter(val=> typeof(val)==='string' && val!=='')
members1.sort((a,b) =>  a.localeCompare(b) )
  let arr = members1.toString()
      .split(" ")
      .join("")
      .split(',')
      .reduce((acc, val) => acc+val[0],'')
return arr.toUpperCase()


  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
