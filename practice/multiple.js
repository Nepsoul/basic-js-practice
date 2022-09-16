/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 
and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the 
number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

======>pseudocode<=====
1. go through the given number =>23
2. find the numbers that are multiple of 3 or 5 below the given numbers
==> 3,6,9,12,15,18,21,5,10,20
3. sum of all the multiple of 3 or 5.
 */
function solution(number) {
  console.log(number);
  let result = 0;
  for (let i = 1; i < number; i++) {
    let curVal = i;
    console.log("loop", curVal);
    if (curVal % 3 === 0 || curVal % 5 === 0) {
      //   result = curVal + result;
      result += i;
      console.log("total", result);
    }
  }
  console.log(result);
  return result;
}
// console.log(solution(10));
solution(10);
