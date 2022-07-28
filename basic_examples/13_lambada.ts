/**
* Lambada Expresson (one line)
* Lambda refers to anonymous functions in programming. Lambda functions are a concise mechanism to represent anonymous functions
* These functions are also called as Arrow functions.
* ( [param1, parma2,…param n] )=>statement;
*/

console.log("---------------------LAMBADAS-------------------------")
var sum = (a,b) => a+b;
console.log(sum(10,20));


var foo = (x:number)=>10 + x 
console.log(foo(100))      //outputs 110 



console.log("---------------------Lambada Statement (multiple line)-------------------------")

/*

( [param1, parma2,…param n] )=> {
   //code block
}

*/

var foo = (x)=> {    
   x = 10 + x 
   console.log(x)  
} 
foo(100)


console.log("---------------------TypeOf Syntax Variation-------------------------")

console.log("---------------------Based of type of var, code behave diff-------------------------")
var func = (x)=> { 
   if(typeof x=="number") { 
      console.log(x+" is numeric") 
   } else if(typeof x=="string") { 
      console.log(x+" is a string") 
   }  
} 
func(12) 
func("Tom")


console.log("---------------------Different type of variations for single parameter-------------------------")
var foo1 = (x)=> {    
   x = 10 + x 
   console.log(x)  
} 
foo(500)

//note braces in param has been removed
var foo2 = x => {    
   x = 10 + x 
   console.log(x)  
} 
foo(100)


console.log("---------------------If no param the empty braces need to be given-------------------------")
var disp =()=> { 
   console.log("Function invoked"); 
} 
disp();
