/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
====>pseudocode<====
1. go through the list of string =>"a","e","i"...
2. check if the current chraracter has get any of the vowels letters that is a,e,i,o,u
3.if the vowels string is found increase the count
4.return result
*/

function getCount(str) {
  let result = 0;
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    //let curval = str[i];
    if (vowels.includes(str[i])) result++;
  }
  /*====>altenative method<=====*/

  //   for (let i = 0; i < str.length; i++) {
  //     let curval = str[i];
  //     console.log(curval);
  //     if (
  //       curval === "a" ||
  //       curval === "e" ||
  //       curval === "i" ||
  //       curval === "o" ||
  //       curval === "u"
  //     ) {
  //       result++;
  //       // console.log(result)
  //     }
  //   }
  return result;
}
console.log(getCount("abracadabra"));
