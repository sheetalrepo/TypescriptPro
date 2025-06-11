/**
* TS Functions
*
*/

console.log("\n=========================== #Prodbug108: RETURN TYPE ===========================");
/**
 * Return Type is Optional in Typescript
 */

function sum1(m:number, n:number){
   return m + n;
}

function sum2(x:number, y:number): number{
   return x + y;
}

console.log("First Sum: ",sum1(100, 8)); 
console.log("Second Sum: ",sum2(100, 8)); 




console.log("\n=========================== #Prodbug108: FUNCTION ===========================");
/**
 * @param id auto assiged int
 * @param name manual assigned as string
 * @param mail_id optional param
 */

function displayDetails(id, name:string, mailId?:string) { 
   console.log("ID:", id); 
   console.log("Name: ",name); 
   
   if(mailId != undefined)  
     console.log("Email Id: ",mailId); 
}

displayDetails(123,"John");
displayDetails(111,"Mary","mary@xyz.com");




console.log("\n=========================== #Prodbug108: REST PARAMS / VAR ARGUMENTS ===========================");

/**
 * @param nums : Variable Args | Rest Params 
 *       list of numbers will be accepted
 */
function addNumbers(...nums:number[]) {  
   var sum = 0; 
   
   for(var i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("Sum of the numbers: ",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)




console.log("\n=========================== #Prodbug108: DEFAULT PARAMS ===========================");

function calculatDiscount(price:number,rate = 0.50) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculatDiscount(1000) 
calculatDiscount(1000,0.30)




console.log("\n=========================== #Prodbug108: ANONYMOUS FUNCTION WITHOUT PARAM ===========================");

var msg = function() { 
   return "hello world";  
} 
console.log(msg)           // Wrong Way
console.log(msg())         // Right Way




console.log("\n=========================== #Prodbug108: ANONYMOUS FUNCTION WITH PARAM ===========================");

//Anonymous func dynamically declared at runtime and assign to a variable
var result = function(a,b) { 
   return a*b;  
}; 

var anonymousFuncResult = result(12,2)
console.log(anonymousFuncResult) 




console.log("\n=========================== #Prodbug108: Function Expression ===========================");

var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);




console.log("\n=========================== #Prodbug108: Recursion ===========================");

function factorial(number) {
   if (number <= 0) {         // termination case
      return 1; 
   } else {     
      return (number * factorial(number - 1));     // function invokes itself
   } 
}; 
console.log(factorial(6));   




console.log("\n=========================== #Prodbug108: Anonymous Recursion Function ===========================");

(function () { 
   var x = "Hello!!";   
   console.log(x)     
})()      // the function invokes itself using a pair of parentheses ()