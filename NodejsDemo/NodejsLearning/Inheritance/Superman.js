let Person = require('./Person.js');

class Superman extends Person{
    // overwrite from class Person
    constructor(name){
        super(name);
    }
    sayHello(){
        super.sayHello();
        console.log("Hello baby,i'm superman");
    }

    //extend function
    canFly(){

        console.log("I'm fly");
    }
}

module.exports = Superman;

