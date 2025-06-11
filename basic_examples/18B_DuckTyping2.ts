/**
 * Another Example:
 *      - employee1 isn’t an instance of CompanyEmployee but works because of duck typing.
 *      - employee2 is a class instance, but both share the same structure (name & role).
 *      - TypeScript doesn’t care if the object is created manually or via a class—it just checks properties!
 * 
 * 
 */
console.log("\n=========================== #Prodbug108: Duck Type Object ===========================");
// Define the Employee interface
interface Employee {
    name: string;
    role: string;
}

// Create an Employee class (but duck typing will allow similar objects)
class CompanyEmployee {
    name: string;
    role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }
}

// Object 1: A manually created employee object
let employee1 = { name: "Alice", role: "Developer" };

// Object 2: An instance of the Employee class
let employee2 = new CompanyEmployee("Bob", "Manager");

// Function expecting Employee type (duck typing allows both objects)
function printEmployeeDetails(emp: Employee) {
    console.log(`Name: ${emp.name}, Role: ${emp.role}`);
}

// Both objects work because they follow the same structure
printEmployeeDetails(employee1);
printEmployeeDetails(employee2); 