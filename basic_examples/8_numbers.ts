/*
* Number Object
* A number object converts numeric literal to an instance of the number class. 
* The Number class acts as a wrapper and enables manipulation of numeric literals as they were objects.
*/

console.log("\n=========================== #Prodbug108: MIN, MAX, INFINITY ===========================");
console.log("TypeScript Number Properties: "); 
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE); 
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE); 
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY); 
console.log("Value of Positive Infinity:" + Number.POSITIVE_INFINITY);

let result = 10 / 0;
console.log(result);          //JS TS return Infinity rather undefined or exception


console.log("\n=========================== #Prodbug108: NaN ===========================");
//NaN : Equal to a value that is Not A Number.


var month = 14 
if( month >= 0 && month <= 12) { 
    console.log("Month Value Accepted..") 
} else { 
   month = Number.NaN 
   console.log("Month Value Not Accepted: "+ month) 
}




console.log("\n=========================== #Prodbug108: General used methods for Numbers ===========================");
var a = 1000;
console.log("In Exponencial Format: "+a.toExponential());

var b = 100.50;
console.log("In Fixed Format: "+b.toFixed());

var c = 500;
var c1 = c.toString();
var str = "hello " + c1;
console.log("In String Format: "+ str);

//valueOf return primitive value of a number object
var obj = new Number(800);
var num:number = obj.valueOf();
var sum = 100 + num;
console.log("In Number Format: "+ sum);


