/*You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!
You have to write a method, that return the length of the missing array.
Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
If the array of arrays is null/nil or empty, the method should return 0.
When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
===> pseudocode<====
1. go through the list of arrays.
2. find the length of each list of elements inside of array.
3. arrange the array elements based on the length that goes in consequitive way.
4. if any empty array present return zero.
*/

// function getLengthOfMissingArray(arrayOfArrays) {
//     let missingArrray=[]
//     for(let i=0;i<arrayOfArrays;i++){if (arrayOfArrays.length == 0) { //array empty
//         return 0;
//     }
//     for (int i = 0; i < arrayOfArrays.length; i++) {
//         //array in the array empty
//         if (arrayOfArrays[i].length == 0) {
//             return 0;
//         }
//         if (arrayOfArrays[i].length != arrayOfArrays[i + 1].length - 1) {
//             return arrayOfArrays[i].length + 1;
//         }
//     }
//     return 0;
// }

//     }
//     return 0;
//   }

    function myIncludes(anArray, searchValue){
        debugger
        
            for(let i=0;i<anArray.length;i++){
                console.log(anArray)
                    if(anArray[i]===searchValue){
                        return true
                    }
            }
        return false
        }
myIncludes([1,2,5,6],5)