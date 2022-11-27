//import {Login,User} from './interface'; // Import the interface
//Another way to import
 import * as Interface from './interface';

class Employee implements Interface.Login { 
    //Creating properties
    // private id: number;
    #id: number; //! Private property
    protected name: string; //! Protected property
    address: string;
    //!!There is a default constructor (if we don't specify any) OR (NEVER BOTH) parameterized constructor
    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    Login(): Interface.User {
        return { name: this.name, id: this.#id };
    }

    //! Methods
    getNameWithAddress(): string {
        // return this.name + " " + this.address;
        return `${this.name} lives in ${this.address}`; // using block quotes
    }
    
    //!! Getter
    get getId(): number {
        return this.#id;
    }

    //!! Setter
    set setId(id: number) {
        this.#id = id;
    }
}

// Default constructor
// let john = new Employee();

// john.id = 1;
// john.name = "John";
// john.address = "123 Main Street";

let john = new Employee(1, "John", "123 Main Street");
//john.id = 2; //!! Error: Cannot assign to 'id' because it is a private property;

class Manager extends Employee { // Using inheritance
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }
    getNameWithAddress(): string {
        return `${this.name} lives in ${this.address} and is a manager`;
    }
}

let address = john.getNameWithAddress();

console.log(john);
console.log(address);


let mike = new Manager(2, "Mike", "Highway");
console.log(mike.getNameWithAddress());

john.getId;
console.log(john.getId);
john.setId = 2;

console.log(john.getId);