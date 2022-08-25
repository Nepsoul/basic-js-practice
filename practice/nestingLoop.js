/*Create a function that takes an array of letters, and combines them into words in a sentence.
The array will be formatted as so:
[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.
Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

Examples:
arrAdder([
    ['J','L','L','M'],
    ['u','i','i','a'],
    ['s','v','f','n'],
    ['t','e','e','']
    ]) // => "Just Live Life Man" */

    function arrAdder(arr) {
       // console.log(arr)
        let com=""
let newArray=[]
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        
        let newVal=arr[i][j]
     //console.log(newVal)
     let result= Array.isArray(newArray[j])
     if(result){
         newArray[j].push(newVal)
        }else{newArray.push([newVal])}
        
       // console.log(result)
       // console.log(newArray)
        }
    }
    for(let i=0;i<newArray.length;i++){
        let finalResult=newArray[i]
        let allToget=finalResult.join("")
        com=com+(" ")+ allToget


}
console.log(com.trim())

return com.trim()
    
    }




    arrAdder([
        ['J','L','L','M'],
        ['u','i','i','a'],
        ['s','v','f','n'],
        ['t','e','e','']
        ])
