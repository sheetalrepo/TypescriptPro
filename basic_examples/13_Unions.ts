/**
 * Unions:
 *    - Using union we can specify a variable can have multiple types like number, string etc
 *    - var a: string | number   It shows that 'a' can be string or number 
 * 
 */

console.log("\n=========================== #Prodbug108: Normal Case ===========================");
var test1: string = "hi"
//test1 = 10;      //Compiler Error




console.log("\n=========================== #Prodbug108: UNIONS ===========================");
var test2:string|number 
test2 = 12 
console.log("Numeric value: "+test2) 
test2 = "Oops I am String now..." 
console.log("String value: "+test2)




console.log("\n=========================== #Prodbug108: UNIONS IN PARAMS ===========================");
/**
 * Use Case:
 *    - Imagine you’re designing a form where users can enter either a numeric ID or a username to log in.
 * 
 */
function processInput(input: string | number) {
   if (typeof input === "number") {
       console.log(`Processing user ID: ${input}`);
   } else {
       console.log(`Processing username: ${input}`);
   }
}

// Test cases
processInput(108);          
processInput("Prod Bug");   