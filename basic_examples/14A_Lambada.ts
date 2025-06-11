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
var sum = (a,b) => a+b;
console.log(sum(10, 20));
console.log(sum(100, 200));


var diff = (a:number, b:number) => a - b;
console.log(diff(50, 25));
console.log(diff(60, 30));




console.log("\n=========================== #Prodbug108: Lambada Body (Multiple Lines) ===========================");
/*

(param1, parma2) => {
   //code block
}

*/

var foo = (x)=> {    
   x = 10 + x 
   console.log(x)  
} 
foo(100)




console.log("\n=========================== #Prodbug108: Lambada with TypeOf ===========================");
var func = (x)=> { 
   if(typeof x == "number") { 
      console.log(x + " is numeric") 
   } else if(typeof x == "string") { 
      console.log(x + " is a string") 
   }  
} 
func(12) 
func("Tom")




console.log("\n=========================== #Prodbug108: If no param the empty braces need to be given ===========================");
var disp =()=> { 
   console.log("Function invoked"); 
} 
disp();