/**
 * ProtoType:
 *    - In JS & TS, prototype is a mechanism that allows objects to inherit properties and methods from other objects.
 *    - All objects share same copy of variables
 *    - So in case some property is common in all the objects then rather saving it in every object better save in one place
 *    - Memory efficient
 * 
 * 
 * Instance variable
 *    Instance Properties (id, name)
 *       - These are unique to each employee object.
 *       - every obj will have their own values for id & name
 * 
 * Prototype variables:
 *    Prototype Property (company)
 *       - Shared across all instances of employee
 *       - All object will use same copy of company
 * 
 */

console.log("\n=========================== #Prodbug108: Prototype ===========================");

function employee(id, name) { 
   this.id = id            // Instance variable (obj)
   this.name = name        // Instance variable (obj)  
   //no need to save company name inside class as its constant
} 

// Creating an instance of employee
var emp1 = new employee(101, "Jack") 
var emp2 = new employee(102, "Jill") 

/**
 * Why to save company separately for each employee
 * Memory efficient: What if we have to save 1000 employees data
 */
employee.prototype.company = "ABC Pvt Ltd"   


console.log("Employee 1 Id: "+emp1.id) 
console.log("Employee 1 Name: "+emp1.name) 
console.log("Employee 1 Company: "+emp1.company)


console.log("Employee 2 Id: "+emp2.id) 
console.log("Employee 2 Name: "+emp2.name) 
console.log("Employee 2 Company: "+emp2.company)