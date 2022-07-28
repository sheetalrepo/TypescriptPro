/**
* Interface 
* In JS there is no concept of Interface, TS giving us power of Interface
* Generated JS file have no mention of Interface
*/

console.log("---------------------INTERFACE-------------------------")

//Interface Declaration
interface IPerson { 
   name:string, 
   age:string, 
   introduction:()=>string 
} 

//Variable 1 using interface
var customer:IPerson = { 
   name:"Sheetal",
   age:"33", 
   introduction: ():string =>{return "I am Person"} 
} 

//Variable 2 using interface
var employee:IPerson = { 
   name:"Singh",
   age:"33", 
   introduction: ():string =>{return "I am employee"} 
} 
  
  
console.log("--------Customer Object Value--------") 
console.log(customer.name) 
console.log(customer.age) 
console.log(customer.introduction())  

  
console.log("--------Employee  Object Value--------") 
console.log(employee.name) 
console.log(employee.age)
console.log(employee.introduction())  




console.log("---------------------INHERITANCE IN INTERFACE-------------------------")

interface Human { 
   age:number 
} 

interface Engineer extends Human { 
   stream:string 
} 

var etrx = <Engineer>{}; 
etrx.age = 33 
etrx.stream = "Electronics" 
console.log("Age:  "+etrx.age) 
console.log("stream:  "+etrx.stream)





