/**
 * 
 * Class:
 * 		- Contains Fields, Function and Constructor
 * 
 * 
 */

console.log("\n=========================== #Prodbug108: CLASS OBJ ===========================");
class Car { 
   //field declaration
   colour: string; 
 
   //constructor declaration
   constructor(colour: string) { 
      this.colour = colour 
   }  

   //function declaration
   disp(): void { 
      console.log("My car colour is  :   "+ this.colour) 
   } 
}


//create an object 
var obj = new Car("Red")

//access the function
obj.disp()