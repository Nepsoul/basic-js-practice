/*
Given an integer array nums, return true if any value appears at least twice in the array,
 and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

/**
 *  {number[]} nums
 *  {boolean}
 */
var containsDuplicate = function (nums) {
  debugger;
  // console.log(nums);
  // let temp = false;
  // for (let i = 0; nums.length; i++) {
  //   for (let k = 0; k < nums.length; k++) {
  //     if (nums[i] === nums[k] && i !== k) {
  //       temp = true;
  //       break;
  //     } else {
  //       temp = false;
  //     }
  //     break;
  //   }
  // }
  // return temp;
  let hash = {};
  for (let num of nums) {
    key = num;
    hash[key];
  }
  return hash;
};
console.log(containsDuplicate([1, 2, 3, 4]));
