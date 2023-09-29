/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 
edge cases: nums = [0] -> output: 0
            nums=[1,1] -> output: 1
            nums=[1,2] -> output: 2
            nums=[1,2,3,1] -> output: 4
Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400
*/

/**
 * param {number[]} nums
 * return {number}
 */
// var rob = function (nums) {
//   debugger;
//   if (nums.length === 1) return nums[0];
//   if (nums[0] === nums[1]) return nums[0];
// if (nums.length === 2) {
//   let result = nums[0] < nums[1] ? nums[1] : nums[0];
//   return result;
// }

//   let moneyHeist = {};
//   let startMoney = nums[0];
//   let bigMoney = 0;
//   let maxMoney = Math.max(nums[0], nums[1]);
//   let index = nums.indexOf(maxMoney);
//   console.log(index, "index");
//   bigMoney = bigMoney += bigMoney;
//   for (let i = index; i < nums.length; i++) {
//     if (i % 2) {
//       bigMoney += nums[i];
//       startMoney = i;
//     }
//     moneyHeist[startMoney] = bigMoney;
//   }
//   return bigMoney;
// };

var rob = function (nums) {
  debugger;
  let number = nums.length;
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return nums[0];
  } else if (number === 2) {
    return Math.max(nums[0], nums[1]);
  }
  const moneyHeist = {};
  let maxMoney = 0;
  moneyHeist[0] = nums[0];
  moneyHeist[1] = Math.max(nums[0], nums[1]);
  // moneyHeist[1] = nums[1];
  for (let i = 2; i < nums.length; i++) {
    moneyHeist[i] = Math.max(nums[i] + moneyHeist[i - 2], moneyHeist[i - 1]);
    maxMoney = moneyHeist[i];
  }
  return maxMoney;
};

// let nums = [7, 2, 9, 3, 1];
let nums = [2, 1, 1, 2];
// [1,3,1]
// let nums = [0];
// let nums = [1, 1];
// let nums = [1, 2, 3, 1];
console.log(rob(nums));
