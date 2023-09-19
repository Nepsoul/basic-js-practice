/**
 You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 *  {ListNode} list1
 *  {ListNode} list2
 *  {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let head1 = list1;
  let head2 = list2;
  let currNode = null;
  while (head1.next !== null && head2.next !== null) {
    if (head1.val >= head2.val) {
      currNode = head1;
      head1.next = head1;
      currNode.next = head2;
      head2.next = head2;
      currNode.next = currNode.next.next;
    } else {
      currNode = head2;
      head2.next = head2;
      currNode.next = head1;
      head1.next = head1;

      currNode.next = currNode.next.next;
    }
    // console.dir(head1);
    return head1;
  }
};

(list1 = [1, 2, 4]), (list2 = [1, 3, 4]);

let data1 = new ListNode(list1[0]);
let data2 = new ListNode(list2[0]);

let node1 = data1;
let node2 = data2;
for (let i = 0; i < list1.length; i++) {
  let cur = new ListNode(list1[i]);
  node1.next = cur;
  node1 = cur;
}
for (let i = 0; i < list2.length; i++) {
  let cur = new ListNode(list2[i]);
  node2.next = cur;
  node2 = cur;
}
debugger;
console.log(mergeTwoLists(data1, data2));
// console.dir(JSON.stringify(mergeTwoLists(data1, data2), null, 2));
// console.log("node1:", data1, "node2:", data2);
