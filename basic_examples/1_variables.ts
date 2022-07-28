/**
* 	# TS Super Type			: Any
* 	- TS User Defined Types	: Arrays, Enums, Classes, Interfaces etc
* 	- TS Built In Types 	: String, Number, Boolean, Void, Null, Undefined
*/

console.log("---------------------String Variable-------------------------")
var hello:string = "Hello World";
console.log("Greetings:"+hello) 


console.log("---------------------Auto assigned(Inferred) string variable-------------------------")
var info = "We are learning TypeScript variables declaration";
console.log("Information:"+info) 


console.log("--------------------Number-------------------------")
//numbers can be integer or float, its 64 bit
var i:number = 50;
var j:number = 42.50
var sum = i + j 
console.log("First score: "+i) 
console.log("Second score: "+j) 
console.log("Sum of the scores: "+sum)

//auto assigned number variable
var m = 50;
var n = 50.5;
var add = m+n;
console.log("Addition: "+add)

console.log("--------------------Boolean-------------------------")
var flag1:boolean = true;
console.log("boolean flag1: " + flag1);

var flag2 = false;
console.log("boolean flag2: " + flag2);


console.log("--------------------Null-------------------------")
/*
* null and undefined are different
* null means var assigned to an object whos value is null
* undefined means var is not assigned to any object
*/

var apple = null
console.log("Apple is null: " + apple);


console.log("--------------------Undefined-------------------------")
var mango;
console.log("Mango is undefined: " + mango);




