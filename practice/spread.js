//SPREAD SYNTAX--
// let a = [1,[2,3]];
// let b = [4,5,6];
// let c = [9,...a,...b]
//console.log(c)  //in this it printed b's value instead of ...b i.e. it put the shallow copy value//1lvl or 1st dimensional.
//c[2][0] = 100; //[9, 1, ref, 4,5,6] init it changes the value of ref i.e. [2,3] = [100,3] after this consoling at 'a' it changes the value
// of a as well cause both have seme ref.
// c[2] = 100 //
// console.log(c)
// console.log(a)

//spread object syntax--
let a = { name: "manjila" };
//let a = {name: {first: 'manjila', last: 'nepali'}} // init it is e.g. of complex obj data and init ref will copied rather than value.
let b = { age: 22, grade: "bachelors" };
let c = { collage: "ASCOL", ...a, ...b };
let d = { collage: "ASCOL", ...a, ...b, age: 32 }; //in this copied all but it overwrite age: 22 to 32 and print 32.
// if age: 32 written in before ...a then it will overwrite to 32 to 22 and print age 22.
// console.log(c);
// console.log(d);
