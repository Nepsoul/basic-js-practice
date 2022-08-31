/*You will be given an array of numbers. You have to sort the odd numbers in ascending order 
while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
====>pseudocode<======
1.an array of the number is given
2. go through an array
3. find out odd number and even number
4. sort odd number
5. arrange the odd number without mutating the position of even number.
*/
function sortArray(array) {
    
    // indices = [];
    // let myArray = array.filter((v, i) => v % 2 && indices.push(i))
    // let sortedArray = myArray.sort((a, b) => a - b)
    // console.log(sortedArray);
    // sortedArray.forEach((v, i) => array[indices[i]] = v);//array2]=5
    // // console.log(indices)
    // console.log(myArray)
    // console.log(array)
    // return array

    indices = [];
     array.filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
   .forEach((v, i) => array[indices[i]] = v);//array2]=5
    // console.log(indices)
    console.log(indices)
    console.log(array)

    return array
  }

  sortArray([5,4,1])

  //========>alternative of oddEven <========
  
  function sortArray(array) {
    debugger
    let oddNum = array.filter((x)=>x%2===1 || x%2 ===-1).sort((a,b)=>a-b)
    let i = 0
    //console.log(oddNum)
    let result =[]
    array.forEach(element => {
     if(element%2==0){
      result.push(element)
     }
     else{result.push(oddNum[i])
    i++}
    });
   console.log(result)
  return result
  }

