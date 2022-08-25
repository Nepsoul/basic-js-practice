let person ={ 
    name: 'manzila',
    age: 23
}
person.addr = {city: 'ktm'}
person['school']={name: 'TU'}

person['school'] = {name: {
    short: 'TU',
    long: 'Trivuwan University'
}
}
 console.log(person);
 let shortName = person.school.name.short //to declare new value and assigning to value to it.
 console.log(shortName)

 //to change the value of key //reassign
 person.school.name.short = 'Ascol'
 console.log(person);
 console.log(person);

 