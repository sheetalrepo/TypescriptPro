/**
 * Class 
 *      - Static members
 *      - instaceOf check    
 * 
 */

console.log("\n=========================== #Prodbug108: Class Static Members ===========================");

class Mango {
    static color: string; 
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    static getColor(): string {
        return `Mangoes are usually ${Mango.color}.`;
    }
}

Mango.color = "Yellow";             //Class.staticVar
let obj = new Mango("Alphonso");    // Class object
console.log(obj instanceof Mango);  // instaceOf check

console.log(obj.name);
console.log(Mango.color);
console.log(Mango.getColor()); 
