/*There is a singly-linked list head and we want to delete a node node in it.

You are given the node to be deleted node. You will not be given access to the first node of head.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order.
Custom testing:

For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
We will build the linked list and pass the node to your function.
The output will be the entire list after calling your function.

example 1-

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Example 2:
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

Constraints:

The number of the nodes in the given list is in the range [2, 1000].
-1000 <= Node.val <= 1000
The value of each node in the list is unique.
The node to be deleted is in the list and is not a tail node.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 *  {ListNode} node
 *  {void} Do not return anything, modify node in-place instead.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};
let data = [4, 5, 1, 9,7,3],
  node = 5;
let head=new ListNode(data[0])
let curNode=head
  for(let i=1;i<data.length;i++){
  let node= new ListNode(data[i])
  curNode.next=node
  curNode=node
  // return curNode
  }
debugger
  console.log(curNode)
// console.log(head)
// let head = new ListNode(data[0]);
// let newNode = new ListNode(data[1]);
// head.next = newNode
// let a = new ListNode(data[2]);
// newNode.next = a
// let b=new ListNode(data[3]);
// a.next = b
// let c=new ListNode(data[4])
// .next = 
// head.next.next.next.next.next = new ListNode(data[5]);

// console.log(head,"head");
// console.log(deleteNode(node));
// debugger
let removedNode= head
while(removedNode.val !== node){
removedNode=removedNode.next

}
// debugger
deleteNode(removedNode)
// console.log(head)