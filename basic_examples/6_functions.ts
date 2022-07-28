/**
* TS Functions
*
*/

console.log("---------------FUNCTION---------------------");
//third param is optional

function disp_details(id, name:string, mail_id?:string) { 
   console.log("ID:", id); 
   console.log("Name",name); 
   
   if(mail_id != undefined)  
     console.log("Email Id",mail_id); 
}

disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");



console.log("---------------REST PARAMS / VAR ARGUMENTS---------------------");
//Var Args in Java is same as Rest Params in Type Script

function addNumbers(...nums:number[]) {  
   var i;   
   var sum = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)




console.log("---------------DEFAULT PARAMS---------------------");

function calculate_discount(price:number,rate = 0.50) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)




console.log("---------------ANONYMOUS FUNCTION---------------------");
//Anonymous func dynamically declared at runtime and assign to a variable
var res = function(a,b) { 
   return a*b;  
}; 

console.log(res(12,2)) 


console.log("---------------ANONYMOUS FUNCTION WITHOUT PARAM---------------------");
var msg = function() { 
   return "hello world";  
} 
console.log(msg())



console.log("---------------ANONYMOUS FUNCTION WITH PARAM---------------------");
var res = function(a,b) { 
   return a*b;  
}; 
console.log(res(12,2)) 


console.log("---------------Function Expression---------------------");
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);


console.log("---------------Recursion---------------------");
function factorial(number) {
   if (number <= 0) {         // termination case
      return 1; 
   } else {     
      return (number * factorial(number - 1));     // function invokes itself
   } 
}; 
console.log(factorial(6));   


console.log("---------------Anonymous Recursion Function---------------------");
(function () { 
   var x = "Hello!!";   
   console.log(x)     
})()      // the function invokes itself using a pair of parentheses ()