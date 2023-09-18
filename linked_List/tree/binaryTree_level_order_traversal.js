/*
 * Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).
e.g. Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

e.g. Input: root = [1]
Output: [[1]]

e.g. Input: root = []
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
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
 *  {TreeNode} root
 *  {number[][]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//root = [3,9,20,null,null,15,7]
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.dir(root, { depth: null });

// [1,2,3,4,5]
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

var levelOrder = function (root) {
  debugger;
  let stack = [];

  if (!root) return [];

  let resultStack = [];

  stack.push(root);
  while (stack.length > 0) {
    let levelStack = [];
    let stackLength = stack.length;
    for (let i = 0; i < stackLength; i++) {
      let node = stack.shift();
      levelStack.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    resultStack.push(levelStack);

    //=========================================
    // let levelStack = [];
    // let lengthQueue = stack.length;
    // for (let i = 0; i < lengthQueue; i++) {
    //   let currentNode = stack.shift();
    //   if (currentNode.left) {
    //     stack.push(currentNode.left);
    //   }
    //   if (currentNode.right) {
    //     stack.push(currentNode.right);
    //   }
    //   levelStack.push(currentNode.val);
    // }
    // resultStack.push(levelStack);
  }
  console.log(resultStack);
  return resultStack;
};

console.log(levelOrder(root));
