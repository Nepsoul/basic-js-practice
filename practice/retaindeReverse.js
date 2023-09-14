/*Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.
===>pseudocode<=====
1.  =>[double spaces]
2. loop through the array 
3. reverse every elements to string =>[]
4.join the array elements back to the string

===>example<===
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
'The quick brown fox jumps over the lazy dog.'==> 'ehT kciuq nworb xof spmuj revo eht yzal .god'
*/
function reverseWords(str) {
  //return str.split("").reverse().join("").split(" ").reverse().join(" ")

  // var newString = "";
  // for (var i = str.length - 1; i >= 0; i--) {
  //     newString += str[i];
  // }
  // return newString;

  //return str.split("").reverse().join("");

  let newString = str.split(""); //[...str]
  console.log(newString);
  let rev = newString.reverse();
  let join = rev.join("");

  let split = join.split(" ");
  let secRev = split.reverse();
  let secjoin = secRev.join(" ");
  return secjoin;
}
console.log(reverseWords("This is an example!"));
