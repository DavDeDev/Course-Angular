export interface User {
    name: string;
    age?: number;
    id: number;
    email?: string;
}

let user: User = { name: "John", id: 1, age: 20 };

user.name;
user.email;

// The following interface uses the same properties as the User interface so we extend it
interface Intern extends User {
    salary: number;
}

let student: Intern = { name: "Rob", id: 2, age: 30, salary: 1000 };

//!Method definition and export
export interface Login { //! We can use this interface outside this file by typing "export"
    Login(): User;
}

//--------------------
//Array destructuring
//--------------------
let [user1, user2, ...restUsers]: User[] = [
    { name: 'John', id: 1, age: 30 },
    { name: 'Rob', id: 2, age: 20 },
    { name: 'LOL', id: 3, age: 40 },
    { name: 'rest user', id: 4, age: 50 },
]

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


