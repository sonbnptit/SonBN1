class Person{

    set setName(name){
        this.name = name;
    }
    get getName(){
        return this.name;
    }

    set setAge(age){
        this.age = age;
    }
    get getAge(){
        return this.age;
    }
}

let Son  = new Person();
Son.name = 'Son';
Son.age = 28;

console.log(Son.name);
console.log(Son.age);

Son.name = 'Uyen';
Son.age = 26;

console.log(Son.name);
console.log(Son.age);