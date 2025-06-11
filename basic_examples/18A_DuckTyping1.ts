/**
 * Duck Type:
 *      - Two objects are considered the same type if they have the same structure,
 *        even if they belong to different classes.
 *      - TypeScript uses structural typing → Checks property presence instead of class hierarchy.
 *      - Duck typing in action:
 *        Even though duck and parrot are different objects, they work with the Bird interface because they share the same structure
 * 
 * Phrase: 
 *      - When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck
 * 
 */

console.log("\n=========================== #Prodbug108: Duck Type Object ===========================");

interface Bird {
    name: string;
    sound: string;
}

// Object 1 (matches Bird structure)
let duck = { name: "Mallard", sound: "Quack" };

// Object 2 (matches Bird structure)
let parrot = { name: "Parrot", sound: "Squawk" };

// Function expecting a Bird type (duck typing applies here)
function makeSound(obj: Bird) {
    console.log(`${obj.name} makes a "${obj.sound}" sound.`);
}

// Both objects can be passed, even though they're not instances of a class
makeSound(duck);   
makeSound(parrot);
