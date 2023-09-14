/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1

*/

/**
 * {number[]} nums
 *  {number}
 */

//using bitwise XOR operation. which has the properties of being commutative and associative.
//XORing a number with itself results in 0, and XORing a number with 0 results in the number itself.
var singleNumber = function (nums) {
  let single = 0;
  for (const num of nums) {
    single ^= num;
  }
  return single;
};
console.log(singleNumber([2, 2, 1]));
