"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
const sub = (a, b) => a - b; // Another way to define a function
console.log(sub(20, 10));
// Third way to define a function
const mult = function (a, b) {
    return a * b;
};
console.log(mult(10, 20));
//! Optional parameters
function division(a, b, num3) {
    return num3 ? a / b + num3 : a / b;
}
console.log(division(20, 10));
console.log(division(20, 10, 5));
//! Default parameters
function division2(a, b, num3 = 100) {
    return a / b + num3;
}
console.log(division2(20, 10));
console.log(division2(20, 10, 5));
// Generic functions
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]); // The type of the array is inferred from the argument passed to the function : Type -> number
let concatString = getItems(["Hello", "World"]); //!! We can also explicitly specify the type of the array
console.log(concatResult);
console.log(concatString);
//# sourceMappingURL=function.js.map