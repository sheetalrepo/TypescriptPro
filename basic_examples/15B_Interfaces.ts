

console.log("\n=========================== #Prodbug108: INTERFACE ===========================");
//Interface Declaration
interface IPerson { 
   name:string, 
   age:string, 
   introduction:()=>string     //No Implementation Given
} 

//Interface implementations
var customer:IPerson = { 
   name:"Sheetal",
   age:"20", 
   introduction: ():string => { return "I am a Customer which behave like a Person" } 
} 

var employee:IPerson = { 
   name:"John",
   age:"30", 
   introduction: ():string => { return "I am an Employee and I have to behave like a Person" } 
} 


console.log("#Customer Data:");
console.log(customer.name) 
console.log(customer.age) 
console.log(customer.introduction())  

console.log("");

console.log("#Employee Data:");
console.log(employee.name) 
console.log(employee.age)
console.log(employee.introduction())  