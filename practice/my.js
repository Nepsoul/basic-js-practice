// let person ={ 
//     name: 'manzila',
//     age: 23
// }
// person.addr = {city: 'ktm'}
// person['school']={name: 'TU'}

// person['school'] = {name: {
//     short: 'TU',
//     long: 'Trivuwan University'
// }
// }
//  console.log(person);
//  let shortName = person.school.name.short //to declare new value and assigning to value to it.
//  console.log(shortName)

//  //to change the value of key //reassign
//  person.school.name.short = 'Ascol'
//  console.log(person);
 

/*Define a function, `oddCouple`, that accepts an array of numbers as an argument.
`oddCouple` should return a new array with the first two odd numbers from the
original array:
```javascript
oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
```
If fewer than two odd numbers exist in the original array, return an empty array
or an array with the only odd number:
```javascript
oddCouple([10, 15, 20]); // => [15]
oddCouple(2, 4, 6, 8); // => [] */

function oddCouple(array) {
    console.log(array)
    let oddArray =[]
    for(let i=0;i<array.length;i++){
        let cur=array[i]
        if(cur%2 !== 0){
            oddArray.push(cur) 
        }
    
    if(oddArray.length===2){
     break
    }
}
    console.log(oddArray)
    return oddArray
}


oddCouple([1, 2, 3, 4, 5,6,7])