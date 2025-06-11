/**
 * Class 
 *      - Readonly members
 *      - Can only be modifiled via constructor    
 * 
 */

console.log("\n=========================== #Prodbug108: Class Read Only Members ===========================");

class Employee {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id; // Allowed: Initialization in constructor
        this.name = name;
    }
}

let emp1 = new Employee(101, "Alice");
console.log(emp1.id); 
console.log(emp1.name); 
console.log("");

let emp2 = new Employee(102, "Bob");
console.log(emp2.id); 
console.log(emp2.name); 
console.log("");

emp2.name = "Dan"; // Allowed: 'name' is not readonly
console.log(emp2.name); 

//emp2.id = 103; // ❌ Error: Cannot assign to 'id' because it is a read-only property