/**
* Casting/Assertions in TypeScript
* Java Type Casting is Called Assertions in Type Script
* Java casting is runtime process and Assertion is compile time process
*/

console.log("---------------------Casting-------------------------")

//not working ? : need to check
var str = '10';
var m: number = <number><any> str;
var n = 20;
var o = 30;
var sum = m+n;
console.log("Sum:"+sum);


console.log("---------------------Inferred Typing in TypeScript-------------------------")
// Once one type is assigned it cant be changed w/o using casting/assertion
var num = 50;
console.log("I am a :number using auto assign:"+ num);

//num = "10";  //compiler error
console.log("Now making it String without using Assertions i.e. casting"+ num);