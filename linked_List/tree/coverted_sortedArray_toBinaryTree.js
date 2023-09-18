/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

 e.g.
 Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted

e.g.
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *  {number[]} nums
 *  {TreeNode}
 */

/*
 ===> logic <===
 1. root taken from mid value of array
 2. for left node, from the mid of root, to the left side again take the mid of left side's left val
 3. for right node, likewise numner 2 process
 4. balanced hight can consider one length greater not more than that

 ===> steps <====
 1. first take array with even numbers
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// let nums = [-10, -3, 0, 5, 9];
let nums = [1, 2, 3, 4, 5, 6, 7];

var sortedArrayToBST = function (nums) {
  debugger;
  let midVal = Math.floor(nums.length / 2);

  const root = new TreeNode(nums[midVal]);

  let leftSideArr = [];
  for (let i = 0; i < nums.length - midVal; i++) {
    // console.log(leftSideArr, "let arr");
    leftSideArr.push(nums[i]);
    let midLeft = leftSideArr[Math.floor(leftSideArr.length / 2)];

    if (leftSideArr[i] < midLeft) {
      root.left = new TreeNode(leftSideArr[i]);
    } else if (leftSideArr[i] > midLeft) {
      root.right = new TreeNode(leftSideArr[i]);
    }
  }

  let rightSideArr = [];
  for (let i = midVal; i < nums.length; i++) {
    rightSideArr.push(nums[i]);

    let midRight = rightSideArr[Math.floor(rightSideArr.length / 2)];
    if (rightSideArr[i] > midRight) {
      root.right = new TreeNode(rightSideArr[i]);
    } else if (rightSideArr[i] < midRight) {
      root.left = new TreeNode(rightSideArr[i]);
    }
  }
  console.dir(root, { depth: null }, "root");
  return root;
};

console.log(sortedArrayToBST(nums));
