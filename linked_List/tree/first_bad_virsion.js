/**
  You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
 */

/**
 * Definition for isBadVersion()
 *
 *  {integer} version number
 *  {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 *  {function} isBadVersion()
 *  {function}
 */
var solution = function (isBadVersion) {
  debugger;
  // console.log(isBadVersion, "is");
  /**
   * param {integer} n Total versions
   * return {integer} The first bad version
   */
  return function (n) {
    let leftVal = 1;
    let rightVal = n;
    while (leftVal < rightVal) {
      const midVal = Math.floor((leftVal + rightVal) / 2);
      if (isBadVersion(midVal)) {
        rightVal = midVal;
      } else {
        leftVal = leftVal + 1;
      }
    }
    return leftVal;
  };
};

var isBadVersion = function (version) {
  // console.log(version, "version");
  return version >= 5;
};

const n = 10;
// isBadVersion(4);
let func = solution(isBadVersion);
console.log(func(n));
