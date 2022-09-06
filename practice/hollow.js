/*An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded(before) 
and followed(after) by the same number of non-zero elements. Furthermore, all the zeroes in 
the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and 
returns true if it is a hollow array,else false.

===>e.g.<===
[1,2,000,4,5]=>hollow array true
[1,2,3,0,0,0,0,0,4,5,6]=>true
[-1,000,4]=>true
[0,0,0]=>true

[0,1,2,0,0,0,5,6]=>false
[1,2,3,0,0,4,5,6]=>false
[1,2,3,0,0,0,4,5]=>false



=====>pseudocode<=======
1. go through the list of element in an array
2. check if there is presence of zero in the middle of array or not.
3. check the number of zero(atleast 3) in mid of array.
4. check if the no. of non-zero elements before and after zero are equal.
*/

function isHollow(x){

}