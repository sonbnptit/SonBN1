class Person{

    constructor (name){
        this.name = name;
    }
    sayHello(){
        console.log("Hi, i'm " + this.name);
    }

    sayGoodbye(){
        console.log("Bye");
    }
}

module.exports = Person;