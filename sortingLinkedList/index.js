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

console.log("in sorted file");
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let head;
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  }
  if (list1.val <= list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }
  let curNode = head;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      curNode.next = list1;
      curNode = list1;
      list1 = list1.next;
    } else {
      curNode.next = list2;
      curNode = list2;
      list2 = list2.next;
    }
  }
  if (list1 === null) {
    curNode.next = list2;
  } else {
    curNode.next = list1;
  }
  return head;
};

(list1 = []), (list2 = []);
// (list1 = [1, 2, 4]), (list2 = [3, 4, 6]);

let data1 = new ListNode(list1[0]);
let data2 = new ListNode(list2[0]);

let node1 = data1;
let node2 = data2;
for (let i = 1; i < list1.length; i++) {
  let cur = new ListNode(list1[i]);
  node1.next = cur;
  node1 = cur;
}
for (let i = 1; i < list2.length; i++) {
  let cur = new ListNode(list2[i]);
  node2.next = cur;
  node2 = cur;
}
debugger;
// console.log(mergeTwoLists(data1, data2));
console.log(JSON.stringify(mergeTwoLists(data1, data2)));
// console.dir(JSON.stringify(mergeTwoLists(data1, data2)));
// console.log(JSON.stringify(data1));
// console.log(JSON.stringify(data2));
// console.log("node1:", data1, "node2:", data2);
