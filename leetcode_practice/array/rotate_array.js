/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/
/**
 * {number[]} nums
 *  {number} k
 * {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums[nums.length - 1]);
//     nums.pop(nums[nums.length - 1]);
//   }
//   return nums;
// let i = 0;
// while (i < k) {
//   nums.unshift(nums[nums.length - 1]);
//   nums.pop(nums[nums.length - 1]);
//   i++;
// }
// return nums;

//   let i = 0;
//   while (i < k) {
//     nums.splice(0, 0, nums[nums.length - 1]);
//     nums.splice(nums.length - 1);
//     i++;
//   }
//   return nums;
// };

//reduce from N algorithm to C, steps reduced to 3 steps
var rotate = function (nums, k) {
  // console.log(nums, "nums");
  //to reduce time complexcity
  k = k % nums.length;
  let slice = nums.slice(nums.length - k);
  nums.splice(nums.length - k, k);
  nums.splice(0, 0, ...slice);
  return nums;
};
// let nums = [-1, -100, 3, 99];
// let k = 2;
// rotate(nums, k);
debugger;
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 4));

// let arr = [3, 6, 9, 0, 23, 54];
// arr.unshift(arr[arr.length - 1]);
// arr.pop(arr[arr.length - 1]);
// console.log(arr, "arr");
// arr.splice(arr[arr.length - 2], 2, arr[arr.length - 1]);
// arr.splice(0, 0, arr[arr.length - 1]);
// arr.splice(arr.length - 1);
// console.log(arr);
