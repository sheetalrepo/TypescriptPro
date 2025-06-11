/**
 * #Java Type Casting:
 *  - Runtime feature
 *      double price = 10.5;
 *      int finalPrice = (int) price;
 *      System.out.println(finalPrice);        //10 
 * 
 * 
 * #TypeScript:
 *  - there is no real casting
 *  - TS is just a layer on top of JS and doesn't change the actual types at runtime.
 *  - TS uses "Type Assertions", which tell the TS compiler to treat a value as a specific type, without actually converting it.
 *  - Imp: Its not really converting, so output can be unexpected
 * 
 * 
 * 
 * 
 */

console.log("\n=========================== #Prodbug108: Casting ===========================");
let unknownVar1: unknown = "Hello, TypeScript!";
let strLength1: number = (unknownVar1 as string).length;           //Request TS Compiler to treat it as String
console.log("###Casting: ", strLength1)


console.log("\n=========================== #Prodbug108: Bad Casting ===========================");
var myStr1 = '10';
var m: number = <number><any> myStr1;       //Request TS compiler to treat it as Number
var n = 20;
var sum1 = m + n;
console.log("Sum 1: "+sum1);           //Compiler still consider it as String 


console.log("\n=========================== #Prodbug108: Good Casting ===========================");
var myStr2 = '10';
var x: number = Number(myStr2);      //Convert to Number, Not Requesting TSC
var y = 20;
var sum2 = x + y;
console.log("Sum 2: "+sum2);           



console.log("\n=========================== #Prodbug108: Inferred Typing in TS ===========================");
// Once one type is assigned it cant be changed w/o using casting/assertion
var num = 50;
console.log("I am a :number using auto assign:"+ num);

//num = "10";  //compiler error
console.log("Now making it String without using Assertions i.e. casting"+ num);