/**
* Tuples
*    - To save hetrogenious data in one variable array e.g. var mytuple = [10,"Hello", 50.5, true];
*
* Arrays: 
*    - To save homogeneous data in one variable array e.g. int [] myarray = [1, 2, 3] etc
*
* Note: As of JDK 24 there is no concept of tuple 
*/

console.log("\n=========================== #Prodbug108: DECLARATION 1 ===========================");
var myTupleA = [10,"Hello"];
console.log(myTupleA);
console.log(myTupleA[0]) 
console.log(myTupleA[1])



console.log("\n=========================== #Prodbug108: DECLARATION 2 ===========================");
var myTupleB = [] 
myTupleB[0] = 12 
myTupleB[1] = "Dec" 
console.log(myTupleB[0]) 
console.log(myTupleB[1])