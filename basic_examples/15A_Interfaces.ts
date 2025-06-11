/**
 * Interface:
 *    #Benifits:
 *       - Type Safety: Ensures objects have required properties
 *       - Enforcing Contracts in Classes → Used in object-oriented programming.
 * 
 *    #Note: 
 *       - In JS there is no concept of Interface, TS giving us power of Interface
 *       - Generated JS file have no mention of Interface
 * 
 */

console.log("\n=========================== #Prodbug108: INTERFACE ===========================");
interface User {
   name: string;
   age: number;
   isAdmin: boolean;
}

let user1: User = { name: "Avatar3", age: 300, isAdmin: true };
console.log(user1.name);

//let user2: User = { name: "Eva", age: 30 };   // Compiler Error
