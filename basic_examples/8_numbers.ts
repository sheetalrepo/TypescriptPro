/*
* Number Object
* A number object converts numeric literal to an instance of the number class. 
* The Number class acts as a wrapper and enables manipulation of numeric literals as they were objects.
*/


console.log("---------------MIN, MAX, INFINITY---------------------");
console.log("TypeScript Number Properties: "); 
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE); 
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE); 
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY); 
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);




console.log("---------------NaN---------------------");
//NaN : Equal to a value that is not a number.

var month = 5 
if( month >= 0 && month <= 12) { 
    console.log("Month Value Accepted..") 
} else { 
   month = Number.NaN 
   console.log("Month is "+ month) 
}



console.log("---------------Prototype---------------------");
//A static property of the Number object. 
//Use the prototype property to assign new properties and methods to the Number object in the current document.
//static variable i.e. class variable in terms of Java

function employee(id, name) { 
   this.id = id 
   this.name = name 
} 

var emp = new employee(123,"Sheetal") 
employee.prototype.email = "sheetal0123@gmail.com" 

console.log("Employee 's Id: "+emp.id) 
console.log("Employee's name: "+emp.name) 
console.log("Employee's Email ID: "+emp.email)




console.log("---------------General used methods for Numerbers---------------------");
var a = 1000;
console.log("In Exponencial Format: "+a.toExponential());

var b = 100.45;
console.log("In Fixed Format: "+b.toFixed());

var c = 500;
var c1 = c.toString();
var str = "hello" + c1;
console.log("In String Format: "+ str);

//valueOf return primitive value of a number object
var d = new Number(800);
var d1:number = d.valueOf();
var sum = 100 + d1;
console.log("In Number Format: "+ sum);


