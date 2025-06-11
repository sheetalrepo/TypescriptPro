/**
 * PUSH : To Add Element 
 * POP  : To Remove Element
 * 
 */

console.log("\n=========================== #Prodbug108: PUSH POP ===========================");
var mytuple1 = [10,"Hello","World"]; 
console.log("Original: ", mytuple1);
console.log("Original Tuple Length:"+mytuple1.length)  // 3

mytuple1.push(12) // to add element at the end 
console.log("Push: ", mytuple1);

var popvar = mytuple1.pop();  // last added element i.e. 12
console.log("Pop Element: " + popvar);
console.log(mytuple1);




console.log("\n=========================== #Prodbug108: Array PUSH POP ===========================");
var myArray = [10, 20, 30, 40]; 
console.log("Original Array: ", myArray);
myArray.push(100)
myArray.push(200)
console.log("PUSH: ", myArray);
myArray.pop()
myArray.pop()
myArray.pop()
console.log("POP: ", myArray);




console.log("\n=========================== #Prodbug108: UPDATING TUPLE ===========================");
//Tuples are Mutable unlike String in Java i.e. value can be updated

var mytuple2 = [50,"Type","Script"]; 
console.log(mytuple2);
mytuple2[2] = "Writer";
console.log(mytuple2);




console.log("\n=========================== #Prodbug108: Destructuring Tuple ===========================");
//Destructuring means to breaking up the structure into variables
var mytuple3 =[10,"hello"] 
var [m,n] = mytuple3
console.log( m )    
console.log( n ) 