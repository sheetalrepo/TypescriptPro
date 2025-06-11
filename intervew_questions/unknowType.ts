/**
 * Q: Guess the output, in case of any issue, fix it
 */

//let value: unknown = 'Hello';
//console.log(value.toUpperCase());


console.log("\n=========================== #Prodbug108: Solution ===========================");
/**
 * Unknown Type:
 *      - unknown type prevents direct operations → Ensures type safety.
 *      - Type checking (typeof value === "string") → Allows safe access to string methods.
 * 
 */
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase()); 
}







