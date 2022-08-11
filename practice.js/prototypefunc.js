//PROTOTYPE FUNCTION --
//let arr = [1,2,3] //array is also is an object. //in js function is also an object.
//arr.name = "niru"
//console.log(arr)
//console.log(arr.name)

//arr.print = function (){
    //  console.log(`hello ${this}`) // in this this noted to arr.print() in which this refers to arr and replaces printed its value + hello.
    //}
    //arr.print()

    //syntax--
    //in this type of prototype function where this exist as to make key and there is no return value then it will call with 'new' func
    function afunc(name, age){
        this.name = name;  // in this, this.name create name key and whenever call it, it'll call with new.
        this.age = age;
    }
    // afunc.grade = "masters"
    // console.log(afunc.grade);
    let niru = new afunc("niru", 20)
    let manjila = new afunc("manjila", 22)
    let pratikshya = new afunc("pratikshya", 21)

    //to call parent obj -- afunc.prototype.isFellow = true
    
    afunc.prototype.isFellow = true
   console.log (niru.isFellow)
    console.log(manjila)
    console.log(pratikshya)

    afunc.prototype.sayHello = function (){
        return `hello my name is ${this.name}`
    }
    console.log(niru.sayHello())