
let lname = "Pietrocola"

//lname =10;  This is not allowed in TypeScript

// `tsc` in the terminal allows you to get the javascript file of this file

let fname: string;

fname = "David";

let newname = fname.toUpperCase();

console.log(newname);

// -----------------------------

let age: number;

age = 20;
//age ="20"; // This is not allowed in TypeScript
let dob = "10";
let total = age + parseInt(dob) + dob; // The last dob is a string so it will be concatenated

console.log(total);

//------------------------------

let isMarried: boolean = false; //! Define the default value for boolean variables
console.log(isMarried);

//------------------------------

// Arrays
let empList: string[];
//...or...
let numList: Array<number>;

empList = ["David", "John", "Mary"]; // You cannot add numbers to this array

numList = [1, 2, 3, 4, 5];

let result = numList.filter((num) => num > 2);

//result = result.find((num) => num > 2); //! This returns an error because find() returns a number and not an array

// Hence we have to declare a different variable to store the result of find()

let num = numList.find((num) => num == 2);

let sum = numList.reduce((acc, num) => acc + num);

console.log(num);
console.log(result);
console.log(sum);

//------------------------------
// Enum
//------------------------------
// You can use enum to define a set of named constants
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;

//------------------------------
// Touples
//------------------------------
// Touples are used to store a fixed number of elements of different types

let swapNumbs: [number, number];

function swapNumbers(num1:number, num2:number): [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);

swapNumbs[0];
swapNumbs[1];

//------------------------------
// Any
//------------------------------
// Any is used to store any type of data

let department: any; // This is not recommended

department = "IT";
department = 10;
