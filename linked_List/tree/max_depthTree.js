/**
 ==> maximum depth of tree

 Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2

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
 * {TreeNode} root
 *  {number}
 */

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }
// var maxDepth = function (root) {
//   debugger;
//   // console.log(root, "root");
//   if (root === null) return 0;
//   // return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));

//   const stack = [];
//   const depthStack = [];
//   let maxDepth = 0;
//   stack.push(root);
//   depthStack.push(1);

//   while (stack.length > 0) {
//     const node = stack.pop();
//     const currentDepth = depthStack.pop();

//     if (currentDepth > maxDepth) {
//       maxDepth = currentDepth;
//     }

//     if (node.left) {
//       stack.push(node.left);
//       depthStack.push(currentDepth + 1);
//     }
//     if (node.right) {
//       stack.push(node.right);
//       depthStack.push(currentDepth + 1);
//     }
//   }
//   return maxDepth;
// };

// root = [3, 9, 20, null, null, 15, 7];

// const root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);
// root.left.right = new TreeNode(null);
// root.left.left = new TreeNode(null);
// root.right.right = new TreeNode(15);
// root.right.left = new TreeNode(7);

// console.dir(root, { depth: null });
// // debugger;
// console.log(maxDepth(root));

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// root = [5, 4, 3, 9, 11, 7, 1, 2, 8, 6, 14, 17, 12, 20, 15];
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(9);
root.left.left.right = new TreeNode(11);
root.left.right = new TreeNode(7);
root.left.right.left = new TreeNode(1);
root.left.right.right = new TreeNode(2);
root.right = new TreeNode(8);
root.right.left = new TreeNode(6);
root.right.left.left = new TreeNode(14);
root.right.left.right = new TreeNode(17);
root.right.right = new TreeNode(12);
root.right.right.left = new TreeNode(20);
root.right.right.right = new TreeNode(15);
// debugger;
console.dir(root, { depth: null });

var depthFirst = function (root) {
  debugger;
  let result = [];
  let stack = [];
  let nodeCheck = [];
  let maxLength = 0;
  stack.push(root);
  nodeCheck.push(1);

  while (stack.length > 0) {
    let val = stack.pop();
    let depth = nodeCheck.pop();

    result.push(val.val);
    if (depth > maxLength) {
      maxLength = depth;
    }
    if (val.right !== null) {
      stack.push(val.right);
      nodeCheck.push(depth + 1);
    }
    if (val.left !== null) {
      stack.push(val.left);
      nodeCheck.push(depth + 1);
    }
  }
  // return result;
  return maxLength;
};

var breadthFirst = function (root) {
  let result = [];
  let stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let val = stack.shift();

    result.push(val.val);

    if (val.left !== null) {
      stack.push(val.left);
    }
    if (val.right !== null) {
      stack.push(val.right);
    }
  }
  return result;
};
console.dir(depthFirst(root), { depth: null });
// console.dir(breadthFirst(root), { depth: null });
