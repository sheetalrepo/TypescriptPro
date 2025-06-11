/**
* TS Operators
*
*/
console.log("\n=========================== #Prodbug108: Nagation Operators ===========================");
var x:number = 4 
var y = -x; 
console.log("value of x: ", x);   //outputs 4 
console.log("value of y: ", y);   //outputs -4


console.log("\n=========================== #Prodbug108: Concatenation ===========================");
var msg:string = "hello"+"world" 
console.log(msg);


console.log("\n=========================== #Prodbug108: Conditinal Operator ===========================");
var num:number = -2 
var result = num > 0 ? "positive": "non-positive" 
console.log(result)


console.log("\n=========================== #Prodbug108: TypeOf Operator, Returns Type ===========================");
var n = 10;
console.log("TypeOf n: "+ typeof num);   //output: number


console.log("\n=========================== #Prodbug108: Logical Operator ===========================");
var x = 10;
var y = 20;
console.log("AND: "+ ( x > 5 && y > 5 ));
console.log("OR: "+ ( x > 50 || y > 5 ));
console.log("NOT: " + !(x > 2));