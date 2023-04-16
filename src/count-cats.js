const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(countCats) {
  // throw new NotImplementedError('Not implemented');
  let count = countCats.flat(Infinity).reduce(function(acc, val){
    if (val === '^^'){return acc + 1;}
    else{return acc}
    }, 0);
  return count
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
