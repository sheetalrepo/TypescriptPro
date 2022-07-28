/**
* Tuples : To save hetrogenious data in one variable array e.g. var mytuple = [10,"Hello", 50.5, true];
* Arrays: To save homogeneous data in one variable array e.g. int [] myarray = [1, 2, 3] etc
* As of java 8.0 there is no concept of tuple 
*/

console.log("---------------------DECLARATION-------------------------")
var mytupleA = [10,"Hello"];
console.log(mytupleA);


var mytupleB = [20,"Tuple"]; //create a  tuple 
console.log(mytupleB[0]) 
console.log(mytupleB[1])


var mytupleC = [] 
mytupleC[0] = 12 
mytupleC[1] = 23 
console.log(mytupleC[0]) 
console.log(mytupleC[1])


console.log("---------------------PUSH POP-------------------------")

var mytuple1 = [10,"Hello","World"]; 
console.log(mytuple1);
console.log("Original Length:"+mytuple1.length)  // 3

mytuple1.push(12) // to add element at the end 
console.log(mytuple1);
console.log("Length after push: "+mytuple1.length) // 4


var popvar = mytuple1.pop();  // last added element i.e. 12
console.log("Removed element:" + popvar);
console.log(mytuple1);
console.log("Length after pop: "+mytuple1.length)  // 3




console.log("---------------------UPDATING TUPLE-------------------------")
//Tuples are Mutable unlike String in Java i.e. value can be updated

var mytuple2 = [10,"Hello","World"]; 
console.log(mytuple2);
mytuple2[0] = "100";
console.log(mytuple2);





console.log("---------------------Destructuring Tuple-------------------------")
//Destructuring means to breaking up the structure into variables

var mytuple3 =[10,"hello"] 
var [m,n] = mytuple3
console.log( m )    
console.log( n ) 

