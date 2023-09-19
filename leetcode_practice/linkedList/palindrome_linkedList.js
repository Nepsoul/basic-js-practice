/**
 Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * param {ListNode} head
 * return {boolean}
 */

/*
====> logic
- reverse the node
-compare the orginal node and reverse node from head val
- if true, go to the next node, if all node matched then return true
- if false, return false
*/
var isPalindrome = function (head) {
  //   console.dir(head, { depth: null }, "head node");
  debugger;
  let initialNode = head;
  //=============================
  //this code will reverse the node but mutate the original node
  //   let prev = null;
  //   let node = head;
  //   let reverseNode = node;

  //   while (reverseNode) {
  //     let nextNode = reverseNode.next;
  //     reverseNode.next = prev;
  //     prev = reverseNode;
  //     reverseNode = nextNode;
  //   }
  //   reverseNode = prev;
  //=============================
  //for not to mutate made complete new node and reversed
  let reverseNode = null;
  while (head) {
    let newNode = new ListNode(head.val);
    newNode.next = reverseNode;
    reverseNode = newNode;
    head = head.next;
  }
  while (initialNode && reverseNode) {
    if (initialNode.val === reverseNode.val) {
      //   return true;
      initialNode = initialNode.next;
      reverseNode = reverseNode.next;
    } else if (initialNode.val !== reverseNode.val) {
      return false;
    }
  }
  return true;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
//[1,2]
//[1, 2, 2, 1]
//[1,1,2,1]
let list = [1, 2];
let node = new ListNode(list[0]);
let data = node;

for (let i = 1; i < list.length; i++) {
  let cur = new ListNode(list[i]);
  data.next = cur;
  data = cur;
}
// console.dir(node, { depth: null });

console.dir(isPalindrome(node), { depth: null });
