/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].



*/

/**
  {number[]} digits
  {number[]}
 */
// var plusOne = function (digits) {
//   if (
//     digits.length === 2 &&
//     digits[digits.length - 2] === 9 &&
//     digits[digits.length - 1] === 9
//   ) {
//     let newNum = digits.join("");
//     let anotherNum = Number(newNum) + 1;
//     let str = anotherNum.toString();
//     let store = [];
//     let i = 0;
//     while (i < str.length) {
//       store.push(Number(str[i]));
//       i++;
//     }
//     digits.splice(0, 2, ...store);
//   } else if (digits[digits.length - 1] < 9) {
//     let lastIndeVal = digits[digits.length - 1] + 1;
//     digits.splice(digits.length - 1, 1, lastIndeVal);
//   } else {
//     let lastIndeVal = digits[digits.length - 1] + 1;
//     let str = lastIndeVal.toString();
//     let store = [];
//     let i = 0;
//     while (i < str.length) {
//       store.push(Number(str[i]));
//       i++;
//     }
//     digits.splice(digits.length - 1, 1, ...store);
//   }

//   return digits;
// };
// debugger;
// console.log(plusOne([9, 9]));
// var plusOne = function(digits) {

//     let str = digits.join("");
//  let newNum = Number(str) + 1;
//  let newStr = newNum.toString().split("");
//  let newArr = newStr.map((num) => parseInt(num));
//  return newArr;
// };

// var plusOne = function (digits) {
//   return (BigInt(digits.join("")) + BigInt(1))
//     .toString()
//     .split("")
//     .map((num) => Number(num));
// };

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      digits.unshift(1);
    } else {
      digits[i]++;
      return digits;
    }
  }
};
debugger;
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
