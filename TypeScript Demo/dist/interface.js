"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", id: 1, age: 20 };
user.name;
user.email;
let student = { name: "Rob", id: 2, age: 30, salary: 1000 };
//--------------------
//Array destructuring
//--------------------
let [user1, user2, ...restUsers] = [
    { name: 'John', id: 1, age: 30 },
    { name: 'Rob', id: 2, age: 20 },
    { name: 'LOL', id: 3, age: 40 },
    { name: 'rest user', id: 4, age: 50 },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3);
console.log(result);
//--------------------
// Decorators (experimental feature!!)
//--------------------
// @CompositionEvent({}) //!Decorator change the behavior of the class at RUNTIME
// class Component{
//     constructor (public name:string){}
// }
//# sourceMappingURL=interface.js.map