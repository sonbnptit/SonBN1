class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log("Name",name);
        console.log("Age",age);
    }

    getName(){
        console.log("This name",this.name);
    }

    getAge(){
        console.log("This age",this.age);
    }
}
let Son  = new Person('Son',28);
Son.getName();
Son.getAge();

console.log(Son); // print object
