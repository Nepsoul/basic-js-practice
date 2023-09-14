/*
====>Back and Forth then Reverse array<======
Task
A list S will be given. You need to generate a list T from it by following the given process:
1.Remove the first and last element from the list S and add them to the list T.
2.Reverse the list S
3.Repeat the process until list S gets emptied.

The above process results in the depletion of the list S. Your task is to generate 
list T without mutating the input List S.

Example
S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T
Note
size of S goes up to 10^6
Keep the efficiency of your code in mind.
Do not mutate the Input.
====>pseudocode<=====

1.make a copy of array "S" ="CS"
2.remove first and last element at a time from array "CS".
3. push the removed element in the "T".
4. after removing first and last element, reverse the leftover elements in array "CS".
5.if cs.length is 0, return "T", else repeat from 2.
6. return "T".
*/
function arrange(s) {
    // console.log(s)
    let t=[]
    let cs=[...s]
while(cs.length>1){
    t.push(cs[0],cs[cs.length-1])
    cs=cs.slice(1,-1)
    cs.reverse()
  }
  if(cs.length===1){
  t.push(cs[0])}

// t.push(cs[0],cs[cs.length-1])
// console.log(t)
// console.log(cs)
return t
    
  }
console.log(arrange([4, 3, 2]))