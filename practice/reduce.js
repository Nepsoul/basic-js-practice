//===>> Reduce method
// let numbers=[10,20, 30,40]

// debugger
// function sum (numbers) {
//     "use strict";
//   return numbers.reduce((a,b)=> a+b,0 )};
//console.log(sum([10,20, 30,40]))
// console.log(numbers[2+1])
// console.log(numbers[2]+1)

//==>> reverse method
// let word="word"
// let rvs=[...word]
// console.log(rvs)
// //let rv=rvs.reverse()
// //console.log(rv)
// let func=rvs.reverse().join("")
// console.log(func)

/* ===>> Write a function that can return the smallest value of an array or the index of that value. 
The function's 2nd parameter will tell whether it should return the value or the index.
Assume the first parameter will always be an array filled with at least 1 number and no duplicates.
Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/

minVal([5,4,3,2,1])
// function minVal(arr,toReturn) {
//     console.log(arr)
//     debugger
//      let smallest=arr[0]
//      let index=0
//      for(let i=0;i<arr.length;i++){
//         if(arr[i]<smallest)
//         {smallest=arr[i]
//             index=i

//         }
//     }
//    console.log(smallest)
//     console.log(index)
//     if(toReturn==="value"){
//         return smallest
//     }else{return index}    
// }

function minVal(arr,toReturn) {
    //console.log(arr)
    debugger 
   let minVal=arr.reduce((a,b)=>Math.min(a,b))
   console.log(minVal)
   let index=arr.indexOf(minVal)
   console.log(index)
   return toReturn==="value"?minVal:index  
}

// function minVal(arr,toReturn) {
//     toReturn==="value"?Math.min(...arr):arr.indexOf(Math.min(...arr))}

   /*  Given an array of numbers and an index, return either the index of the smallest number that
    is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, 
 Nothing or a similarly empty value ).
 ==> Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.
Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
   */
  /* ==> pseudocode ==>
  1. find the element in the array of given index =>4
  2. find the greater element than the element of number 1.=>5,6
  3. find the smallest number from 2.=>5
  4. find the index of 5.=>3
*/ 
function leastLarger(a,i) {
    console.log(a,i)
   let num=a[i]
   console.log(num)
   let greater=a.filter(x=>x>num)
   let min=Math.min(...greater)
   let index=a.indexOf(min)
   console.log(greater)
   console.log(index)
   if(greater)
   return index
    else
   return -1;
}
  leastLarger( [4, 1, 3, 5, 6],4)