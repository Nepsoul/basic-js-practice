/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:
Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 *  {ListNode} head
 *  {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
  let prev = null;
  let currentNode = head;
  while (currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = nextNode;
  }
  head = prev;
  return prev;
};

head = [1, 2, 3, 4, 5];

let data = new ListNode(head[0]);
let node = data;
for (let i = 1; i < head.length; i++) {
  let curval = new ListNode(head[i]);
  node.next = curval;
  node = curval;
}
debugger;
// reverseList(head);
console.log(reverseList(data));
// console.log(data);
