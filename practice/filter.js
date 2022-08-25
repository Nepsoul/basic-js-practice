/* In this kata you get the start number and the end number of a region and should return 
the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
e.g.1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
====>pseudocode<=======
1. find the element from 1 to 9. => 1,2,3,4,5,6,7,8,9
2.find the index of integer which include element 5, if it has i.e.5,15,25
3.remove that integer which include integer 5
4. count all given integer i.e. length =>1 to 9
*/

function dontGiveMeFive(start, end)
{debugger
//     console.log(start, end)
//     let numbers = [];
//     for(let i=start; i<=end; i++){
//       let curVal= i;
//       numbers.push(curVal)
//     }
//     console.log(numbers)
 
// let noFives = numbers.filter(x => !x.toString().includes("5"))
// let count=noFives.length
// console.log(noFives);
// console.log(count)

/*alternative method */

let count=0
for(let i=start;i<=end;i++)
{
  let stringValue = i.toString();
  
  if(!stringValue.includes('5')){

    count++
  }
}
  return count ;
}

console.log(dontGiveMeFive(1,9))
//dontGiveMeFive(1,9)

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8

/* ==>8kyu
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0. 
=====> pseudocode <=======
1. Go through the lists of arrays.
2. If empty return 0;
3. if element present, find the total sum of element in the array
4. find the total number of element present in an array
5. find avarage value of array
6. for finding average, total/no. of array
*/

function find_average(array) {
  //console.log(array)
  
  if(array.length===0)return 0

  let aveRage = 
    array.reduce((a,b)=>(a+b))/array.length

    //console.log(aveRage)
    return aveRage
  

}
let returnedValue=find_average([])
//console.log(returnedValue);