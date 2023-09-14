/**
  Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

  example: Input: root = [1,2,2,3,4,4,3]
Output: true

example: Input: root = [1,2,2,null,3,null,3]
Output: false

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?
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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// root = [1, 2, 2, 3, 4, 4, 3];

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(2);
// root.left.left = new TreeNode(3);
// root.left.right = new TreeNode(4);
// root.right.left = new TreeNode(4);
// root.right.right = new TreeNode(3);
// console.log(root);

// [1,2,2,null,3,null,3] => false

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(2);
// root.left.right = new TreeNode(3);
// root.right.right = new TreeNode(3);
// console.log(root);

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(3);
console.log(root);
//[1] => true
// const root = new TreeNode(1);

/**
 * ===> Logic  <===
 * make two stacks, for placing root left and right node both one time
 * for right node, stackRight, for left node, stackLeft
 * for processing the current node, pop form the stack, and compare the node val e.g. node1=stackRight, nod2=stackLeft
 * after process of first parent node, for process child node, alternatively stack in two stack
 * e.g. stackRight -> push 1. right node 2. left node, stackLeft -> push 1. left node 2. right node
 * compare the processing the both node val
 * if true continue with child node
 * for child node, if true return true otherwise false
 *
 * =====> condition to check <=======
 * 1. check if both node is null
 * 2. check if both node in not null
 * 3. check if right node is null
 * 4. or check if left node in null
 */

var isSymmetric = function (root) {
  debugger;
  let stackLeft = [];
  let stackRight = [];

  //if (!root.left && !root.right) return true;

  stackLeft.push(root.left);
  stackRight.push(root.right);

  while (stackLeft.length > 0 || stackRight.length > 0) {
    let node1 = stackLeft.pop();
    let node2 = stackRight.pop();
    if (node1 && node2) {
      if (node1.val !== node2.val) {
        return false;
      }
      stackLeft.push(node1.left);
      stackLeft.push(node1.right);

      stackRight.push(node2.right);
      stackRight.push(node2.left);
    }

    if ((node1 && !node2) || (!node1 && node2)) {
      return false;
    }
  }

  //   if (node1 !== null && node2 !== null && node1.val !== node2.val) {
  //     return false;
  //   }
  //   if ((node1 && !node2) || (!node1 && node2)) {
  //     return false;
  //   }

  //   if (node1 && node2) {
  //     stackLeft.push(node1.left);
  //     stackLeft.push(node1.right);
  //     // }

  //     // if (node2.left !== null || node2.right !== null) {
  //     stackRight.push(node2.right);
  //     stackRight.push(node2.left);
  //   }
  // }
  return true;
};
console.log(isSymmetric(root));
