function add(a: number, b: number): number { // The third parameter is optional and it indicate the return type
    return a + b;
}

console.log(add(10, 20));

const sub  = (a: number, b: number): number => a - b; // Another way to define a function

console.log(sub(20, 10));

// Third way to define a function

const mult = function(a: number, b: number): number {
    return a * b;
}

console.log(mult(10, 20));

//! Optional parameters
function division(a: number, b: number, num3?: number): number { // The third parameter is optional and it indicate the return type
    return num3? a/b+num3 : a/b;
}

console.log(division(20,10));
console.log(division(20,10,5));

//! Default parameters
function division2(a: number, b: number, num3: number = 100): number { // The third parameter is optional and it indicate the return type
    return a/b+num3;
}

console.log(division2(20,10));
console.log(division2(20,10,5)); 

// Generic functions

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult =getItems([1,2,3,4,5]); // The type of the array is inferred from the argument passed to the function : Type -> number

let concatString = getItems<string>(["Hello", "World"]); //!! We can also explicitly specify the type of the array

console.log( concatResult);
console.log( concatString);