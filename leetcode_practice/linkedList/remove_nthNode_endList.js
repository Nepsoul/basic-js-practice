/**
 Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
  
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
 *  {number} n
 *  {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {};

let head = [1, 2, 3, 4, 5],
  n = 2;
let data = new ListNode(head[0], head[1]);
let curVal = data;
for (let i = 1; i < head.length; i++) {
  let node = new ListNode(head[i]);
  curVal.next = node;
  curVal = node;
}
console.log(data);
