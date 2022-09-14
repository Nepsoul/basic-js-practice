/*If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, 
i.e. no negative integers.

===>example<===
countSheep(0)=> ""
countSheep(1)=> "1 sheep...";
countSheep(2)=> "1 sheep...2 sheep...";

===>pseudocode<====
1. loop from 1 to given no. =>(3)
3. for each loop at the string add the no. with string alongwith sheep... and return the string =>"1 sheep...2 sheep...3 sheep..."

*/
var countSheep = function (num) {
  let sheep = "";
  for (let i = i; i <= num; i++) {
    sheep += i + ` sheep...`;
  }
  return sheep;
};
console.log(countSheep(4));
