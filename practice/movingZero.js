/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
==============>example<===========
1.moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
2.moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

=========>pseudocode<=========
1. go through the array
2. comparing number data type to zero and all zeros placing at the end.
3. while all the zero placing at the end, other type of element's place should be placed as it is.
4. return result
*/
function moveZeros(arr) {
  let zero = [];
  let nonZero = [];
  for (let i = 0; i < arr.length; i++) {
    let curVal = arr[i];
    if (curVal !== 0) {
      nonZero.push(curVal);
    } else {
      zero.push(curVal);
    }
  }
  let result = nonZero.concat(zero);
  console.log(result);
  return result;
}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
