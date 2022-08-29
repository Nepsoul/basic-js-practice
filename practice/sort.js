/*Create a function that returns the sum of the two lowest positive numbers given an array of 
minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
===>psedocode<=====
1. go through the list of arrays
2. arrange the elements in the array in ascending order.
3. find the sum of first two elements in the array
4. return sum
*/
function sumTwoSmallestNumbers(numbers) {  
    // console.log(numbers)
    // let sumTwo=numbers.sort((a,b)=>a-b)
    // console.log(sumTwo)
    // if(sumTwo.length===2){ 
    //  Break;
    // }
    // let sum= sumTwo[0]+sumTwo[1]
    // console.log(sum)
    // return sum
}


   /* aternative method/using swaping method */
function sumTwoSmallestNumbers(numbers) {  
    
    for(let i=1;i<numbers.length;i++){
       
        for(let j=0;j<numbers.length;j++)
        {
            if(numbers[i]<numbers[j])
            {
                //swaping method
                let small=numbers[j]
                numbers[j]=numbers[i]
                numbers[i]=small
            }
        }
        
    }
    let sum=numbers[0]+numbers[1]
console.log(numbers)
console.log(sum)
    return sum
  }
  sumTwoSmallestNumbers([19, 5, 1, 2, 3])