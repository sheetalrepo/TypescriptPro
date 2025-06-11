/**
 * Class:
 * 		- Overloading Methods
 * 		- TS handle Overloading a bit different way than Java
 * 		- One method handle all cases using if else loops		
 * 
 */
console.log("\n=========================== #Prodbug108: Class Overloading ===========================");
class Mango {
    // Overloaded method declarations
    print(): void;
    print(s: string): void;

    // Single implementation handling both cases
    print(s?: string): void {
        if (s) {
            console.log(`I am yellow fruit and my variety is ${s}`);
        } else {
            console.log("I am yellow fruit");
        }
    }
}

let mango1 = new Mango();
mango1.print();        
mango1.print("Alphonso");
mango1.print("Malda");
