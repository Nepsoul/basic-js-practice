// /*
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
// ====>pseudocode<====
// 1. go through the list of string =>"a","e","i"...
// 2. check if the current chraracter has get any of the vowels letters that is a,e,i,o,u
// 3.if the vowels string is found increase the count
// 4.return result
// */

// function getCount(str) {
//   let result = 0;
//   let vowels = "aeiou";
//   for (let i = 0; i < str.length; i++) {
//     //let curval = str[i];
//     if (vowels.includes(str[i])) result++;
//   }
//   /*====>altenative method<=====*/

//   //   for (let i = 0; i < str.length; i++) {
//   //     let curval = str[i];
//   //     console.log(curval);
//   //     if (
//   //       curval === "a" ||
//   //       curval === "e" ||
//   //       curval === "i" ||
//   //       curval === "o" ||
//   //       curval === "u"
//   //     ) {
//   //       result++;
//   //       // console.log(result)
//   //     }
//   //   }
//   return result;
// }
// console.log(getCount("abracadabra"));

//=====>understanding of reduer<=======
// function setBlogReducer(state, action) {
//   return action.payload;
// }

// function makeOneCall() {
//   debugger;
//   function highOrderfunc(one) {
//     let myAction = {};
//     let myState = {};
//     myAction.payload = one;
//     return setBlogReducer(myState, myAction);
//   }
//   return highOrderfunc;
// }
// let newFunc = makeOneCall();
// let val = newFunc([1, 2, 3]);
// console.log(val);

//=========> two pointer function<=======

// function twoPointer(arr, targerValue) {
//   //let value = [];
//   for (let i = 0; i < arr.length; i++) {
//     let currVal = arr[i];
//     console.log(currVal, "curval");

//     for (let j = i + 1; j < arr.length; j++) {
//       let recentVal = arr[j];

//       console.log(recentVal, "recntval");
//       if (currVal + recentVal === targerValue) {
//         return [arr.indexOf(currVal), arr.indexOf(recentVal)];
//       }
//     }
//   }

//   //return value;
// }
// console.log(twoPointer([1, 2, 3, 4, 5, 6, 7], 10));

// let arr = [1, 2, 3, 4, 5];
// let sum;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     sum = arr[i] + arr[j];
//     console.log(`Sum of ${arr[i]} and ${arr[j]} is ${sum}`);

//   }
// }

//====>stored value <====
//side effect function and non-side effect function
// let numb = 0;
// function addToFive(num) {
//   numb = num + numb + 5;
//   return numb;
// }
// function addToThree(num) {
//   let varb = 0;
//   varb = num + varb + 3;
//   return varb;
// }

//====>high order function, to store method <=====
// function addToThree(num) {
//   let number = 0;
//   function addToFive(num) {
//     number = num + number + 5;
//     return number;
//   }
//   return addToFive;
// }
// let myFunc = addToThree();

// console.log(addToFive(1));
// console.log(addToFive(1));
// console.log(addToFive(6));

// console.log(myFunc(1));
// console.log(myFunc(1));

/*from test */

// let bond = "007";
// function jaws(agent) {
//   agent = bond;
//   bond = "Body Double";

//   let AgentinScope = agent === "007";
//   let prediction = true; // YOUR BOOLEAN PREDICTION HERE

//   return AgentinScope === prediction;
// }

// console.log(jaws());

// function elChiffre() {
//   let agent = bond;
//   bond = "Body Double";

//   let AgentinScope = agent === "007";
//   let prediction = false; // YOUR BOOLEAN PREDICTION HERE

//   return AgentinScope === prediction;
// }
// console.log(elChiffre());

let myArg = "neha";
function testingValue() {
  myArg = "sneha";
  changeVal = myArg;
  myArg = "gigi";
  return changeVal;
}
console.log(testingValue());
