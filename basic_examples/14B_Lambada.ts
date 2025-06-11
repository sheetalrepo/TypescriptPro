/**
 * 
 * Lambada Expresson
 *       - one line expression
 *       - Lambda refers to anonymous functions in programming
 *       - Lambda functions are a concise mechanism to represent anonymous functions
 *       - These functions are also called as Arrow functions.
 *       - (param1, parma2,…param n) => body;
 */
console.log("\n=========================== #Prodbug108: LAMBADAS ===========================");
var myArray1 = [1, 2, 3, 4]
let doubled = myArray1.map(x => x * 2);
console.log(doubled);




console.log("\n=========================== #Prodbug108: Filters ===========================");
var myArray2 = [10, 20, 35, 46]
let evenNumbers = myArray2.filter(x => x % 2 === 0);
console.log(evenNumbers);




console.log("\n=========================== #Prodbug108: Reduce ===========================");
/**
 * Reduce()
 *    - accumulates values in an array and returns a single result
 *    - acc (accumulator) starts at given initial value
 * 
 */

var myArray3 = [1, 2, 3, 4]
let sum1 = myArray3.reduce((acc, x) => acc + x, 0);         //acc = 0
let sum2 = myArray3.reduce((acc, x) => acc + x, 100);       //acc = 100
console.log(sum1); // 10
console.log(sum2); // 10
