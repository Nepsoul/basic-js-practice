class MakePerson {
    constructor(name, age){       //class ma call garda construction function nai chalaunuparxa.
        this.name = name
        this.age = age
    }
    sayHello(){
        return `hello, my name is ${this.name}`;
}
}
let niru = new MakePerson('niru', 20)
//console.log(niru.sayHello());

class Student extends MakePerson {  //init one class can be extends but when we will try to extend another, 
    //meant tobe if student further more extends to english class; it won't work may be havo to check it 
    constructor(name, age, grade){
        super(name, age)     
        this.grade = grade
    }
    mygrade(){
        return `I have completed ${this.grade}`
    }
}
let niru1 = new Student ('niru', 20, 'master')
//console.log(niru1.mygrade());

class FourWheeler{
    constructor(fwType){
        this.type = fwType
        this.numberOfWheels = 4
    }
    honk(){
        console.log('honk')
    }
    changeType(newType){
        this.type = newType
    }
}
let car = new FourWheeler('car');
//car.changeType('tractor')
//console.log(car)

 str = "123";
//console.log(Math.floor(str));
console.log(Number(str));
//console.log(parseInt(str));
