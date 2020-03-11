let Superman = require('./Superman.js');

let sup = new Superman('Son');

sup.sayHello();
sup.sayGoodbye();
sup.canFly();
//NOTE:
// Inheritance from class, not an instance
// if super class has constructor, sub class must have construcor call super();
// Nếu trong class cha có constructor, thì class con phải call super() function trong hàm constructor