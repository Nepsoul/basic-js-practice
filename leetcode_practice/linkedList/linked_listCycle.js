/**
 Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 

Follow up: Can you solve it using O(1) (i.e. constant) memory?

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * param {ListNode} head
 * return {boolean}
 */
var hasCycle = function (head) {
  debugger;
  let slowPoiner = head;
  let fastPoiner = head;

  while (
    slowPoiner !== null &&
    fastPoiner !== null &&
    fastPoiner.next !== null
  ) {
    slowPoiner = slowPoiner.next;
    fastPoiner = fastPoiner.next.next;

    if (slowPoiner === fastPoiner) {
      return true;
    }
  }
  return false;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
// let head = [3, 2, 0, -4],
//   pos = 1;

// let data = new ListNode(head[0]);
// let node = data;
// for (let i = 1; i < head.length; i++) {
//   let cur = new ListNode(head[i]);
//   node.next = cur;
//   node = cur;
// }
// console.dir(data, { depth: null });
// to pass value in cycle node, do like this
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

// Connect the nodes to form the linked list
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Create a cycle by connecting the last node to the second node

console.log(hasCycle(node1));
