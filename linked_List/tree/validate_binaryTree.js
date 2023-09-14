/**
 Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

example: Input: root = [2,1,3]
Output: true

example: Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
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
 * param {TreeNode} root
 * return {boolean}
 */

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// root = [2,1,3] =>true
// const root = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left = new TreeNode(1);

// root = [5, 1, 4, null, null, 3, 6]; =>false
// [5,4,6,null,null,3,7]
// const root = new TreeNode(5);
// root.left = new TreeNode(4);
// root.right = new TreeNode(8);
// root.right.left = new TreeNode(3);
// root.right.right = new TreeNode(9);

// console.log(root, "root");

// var isValidBST = function (root) {
//   if (root === undefined) return true;
//   debugger;
//   let stack = [];
//   let prev = null;
//   while (root || stack.length > 0) {
//     while (root) {
//       stack.push(root);
//       root = root.left;
//     }
//     root = stack.pop();
//     if (prev !== null && root.val <= prev.val) {
//       return false;
//     }
//     prev = root;
//     root = root.right;
//     return true;
//   let stack = [];
//   stack.push(root);
//   while (stack.length > 0) {}
//     if (node > node.left || node < node.right) {
//       if (node.left > node.right) {
//         return true;
//       } else return false;
//     }
//     return false;
//   }
//================================================
//   let stack = [];
//   stack.push(root);
//   while (stack.length > 0) {
//     let rootMain = root;
//     if (rootMain.left < rootMain > rootMain.right) {
//       if (node.left !== null) {
//         stack.push(node.left);
//       }
//       let node = stack.pop();

//       if (node && node.left && node.right < node) {
//         return true;
//       } else if (node && node.right && node.right > node && node.left > node) {
//         return true;
//       }
//       //   return false;
//       if (node.right !== null) {
//         stack.push(node.right);
//       }
//       if (node.left < node < node.right) {
//         return true;
//         //     } else return false;
//       }
//     }
//   }
//   return false;
//====================================
//   if (root === undefined) return true;
//   const stack = [];
//   debugger;
//   let prev = null; // To keep track of the previously visited node
//   while (root || stack.length > 0) {
//     while (root) {
//       stack.push(root);
//       root = root.left;
//     }
//     root = stack.pop();
//     // Check if the current node's value is greater than the previous node
//     if (prev !== null && root.val <= prev.val) {
//       return false;
//     }
//     prev = root;
//     root = root.right;
//   }
//   return true;
// };

// console.log(isValidBST(root));

//=======================================

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// root = [2,1,3] =>true
// const root = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left = new TreeNode(4);

// [1,null,1] =>false
const root = new TreeNode(1);
root.right = new TreeNode(1);

// root = [10, 5, 15, 3, 8, 13, 18, 2, 4, 6, 9, 12, 14, 17, 19];

// const root = new TreeNode(10); //true
// root.left = new TreeNode(5);
// root.right = new TreeNode(15);
// root.left.left = new TreeNode(3);
// root.left.right = new TreeNode(8);
// root.left.left.left = new TreeNode(2);
// root.left.left.right = new TreeNode(4);
// root.left.right.left = new TreeNode(6);
// root.left.right.right = new TreeNode(9);
// root.right.left = new TreeNode(13);
// root.right.left.left = new TreeNode(12);
// root.right.left.right = new TreeNode(14);
// root.right.right = new TreeNode(18);
// root.right.right.left = new TreeNode(17);
// root.right.right.right = new TreeNode(19);

// console.dir(root, { depth: null });

var isValidBST = function (root) {
  debugger;
  let stack = [];
  let max = null;
  let min = null;
  //   stack.push(root);
  //   console.log(stack, "1");
  stack.push({ node: root, max, min });
  //   console.log(stack, "2");

  while (stack.length > 0) {
    let curNode = stack.pop();
    // max = curNode.max;
    // min = curNode.min;
    // console.log(curNode, "cur node");
    // if (
    //   (min === null && curNode.node.val < max) ||
    //   (max === null && min < curNode.node.val)
    // ) {
    //   return true;
    // }
    // if (
    //   (min !== null && min < curNode.node.val < max) ||
    //   (max !== null && min < curNode.node.val < max)
    // ) {
    //   return true;
    // }

    if (curNode.min !== null && curNode.min > curNode.node.val) {
      return false;
    }
    if (curNode.max !== null && curNode.max <= curNode.node.val) {
      return false;
    }

    if (curNode.node.right !== null) {
      max = curNode.max;
      min = curNode.node.val;
      stack.push({ node: curNode.node.right, max, min });
    }
    if (curNode.node.left !== null) {
      max = curNode.node.val;
      min = curNode.min;
      stack.push({ node: curNode.node.left, max, min });
    }
  }
  return true;
};

console.log(isValidBST(root));
