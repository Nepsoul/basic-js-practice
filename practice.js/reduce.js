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
function minVal(arr,toReturn) {
    console.log(arr)
    debugger
     let smallest=arr[0]
     let index=0
     for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest)
        {smallest=arr[i]
            index=i

        }
    }
   console.log(smallest)
    console.log(index)
    if(toReturn==="value"){
        return smallest
    }else{return index}    
}

function minVal(arr,toReturn) {
    //console.log(arr)
    debugger 
   let minVal=arr.reduce((a,b)=>Math.min(a,b))
   let index=arr.indexOf(minVal)
   return toReturn==="value"?minVal:index  
}

function minVal(arr,toReturn) {
    toReturn==="value"?Math.min(...arr):arr.indexOf(Math.min(...arr))}