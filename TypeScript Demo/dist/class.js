"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    //!!There is a default constructor (if we don't specify any) OR (NEVER BOTH) parameterized constructor
    constructor(id, name, address) {
        //Creating properties
        // private id: number;
        _Employee_id.set(this, void 0); //! Private property
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    Login() {
        return { name: this.name, id: __classPrivateFieldGet(this, _Employee_id, "f") };
    }
    //! Methods
    getNameWithAddress() {
        // return this.name + " " + this.address;
        return `${this.name} lives in ${this.address}`; // using block quotes
    }
    //!! Getter
    get getId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    //!! Setter
    set setId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap();
// Default constructor
// let john = new Employee();
// john.id = 1;
// john.name = "John";
// john.address = "123 Main Street";
let john = new Employee(1, "John", "123 Main Street");
//john.id = 2; //!! Error: Cannot assign to 'id' because it is a private property;
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
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
//# sourceMappingURL=class.js.map