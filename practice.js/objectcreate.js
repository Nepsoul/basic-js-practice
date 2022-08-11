//Object.create

//let student = {
   // name: "Niru",
    //class: "masters"
//}
//let pratikshya = Object.create(student) //for this syntax object ko create vanne method le arguement call gariraxa.
//console.log(pratikshya);
//console.log(pratikshya.name);//in this pratikshya ko kunai object navakole it assign to its parent object student
 //so it gives 'Niru' while calling name of pratikshya.

//pratikshya.name = "pratikshya";
// console.log(pratikshya); //in this pratikshya ma create gareko object maa name assign garyo, now it has its own name key value pair.
// console.log(student); 
// console.log(pratikshya.class); //in this class has not its value so take the parent's value as well print parent's value.

 //student.sayHello =  function (){
  //return ("hello");
 //}
//console.log(student.sayHello());

//Arrow function
//let func = function (){}
// let func = () => {return 'hello';}
//student.sayHello = (name) => {return `hello ${name}`}
//student.sayHello = (name) => `hello ${name}`
// console.log(student.sayHello('niru'));
// console.log(pratikshya.sayHello('niru')); //should pass the arguement.

//factory function ---le function call garyo
function givemeObject(name, grade){
    let result = {
        name, grade,
        //sayHello: () => 'hello'
    }; 
    result.sayHello = () => 'hello';
    return result}
    //let pratikshya = givemeObject('pratikshya', 'bachelor'); //in this whole new object has been created identitically, so no empty obj shown
//console.log(pratikshya)
 
// let pratikshya = givemeObject();
// console.log(pratikshya.hasOwnProperty('name'))

//SPREAD SYNTAX--
