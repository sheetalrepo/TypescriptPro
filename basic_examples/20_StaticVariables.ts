/**
 * 
 * Prototype:
 *    - access via obj1.companyName
 *    - shared across all instances
 *          -- Use prototype for methods that operate on an instance of a class. 
 *          -- Best for object-specific logic where each instance can access shared behavior. 
 *          -- Saves memory because all instances share the same function instead of duplicating it for each object.
 * 
 * 
 * Static:
 *    - access via ClassName.companyName
 *    - attached to class itself
 *    - When to use static: 
 *          -- Use static for shared constants or utility functions that don’t depend on an instance. 
 *          -- Ideal for factory methods, configuration settings, helper functions. 
 *          -- Cannot be accessed via this inside instance methods.
 */

console.log("\n=========================== #Prodbug108: Prototype ===========================");
class Employee {
   id: number;
   name: string;
   static companyName = "ABC Pvt Ltd"; // Shared across all instances

   constructor(id: number, name: string) {
       this.id = id;
       this.name = name;
   }
}

const emp1 = new Employee(123, "Sheetal");
console.log("Employee's Id: " + emp1.id);
console.log("Employee's name: " + emp1.name);
console.log("Employee's Email ID: " + Employee.companyName); //Access static property via class name