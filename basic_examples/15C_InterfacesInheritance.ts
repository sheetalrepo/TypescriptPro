console.log("\n=========================== #Prodbug108: INHERITANCE IN INTERFACE ===========================");
interface Human { 
   age: number,
   name: string
} 

interface Engineer extends Human { 
   stream:string 
} 

//Style 1:
var engineer1 = { name: "Rocket Engineer", age: 50, stream: "Astronaut" };

//Style 2:
var engineer2 = <Engineer>{}; 
engineer2.name = "Ram"
engineer2.age = 20 
engineer2.stream = "Electronics" 


//Print
console.log("Name:  "+engineer1.name) 
console.log("Age:  "+engineer1.age) 
console.log("Stream:  "+engineer1.stream) 

console.log("")

console.log("Name:  "+engineer2.name) 
console.log("Age:  "+engineer2.age) 
console.log("Stream:  "+engineer2.stream) 