/**
 *  Class implements Interface
 * 
 */

console.log("\n=========================== #Prodbug108: Class Encapsulation ===========================");

//Rule
interface ISpeed { 
	maxSpeed:number;
	printSpeed():void;
} 

//Class implement Rules
class BMW implements ISpeed { 
   maxSpeed:number 
   colour:string 
   
   constructor(maxSpd,clr) { 
      this.maxSpeed = maxSpd 
      this.colour = clr 
   } 
   
   printSpeed():void {
	  console.log("Speed:" + this.maxSpeed);
   }

   printColor():void {
      console.log("Colour:" + this.colour);	  
   }

} 

var bmwObj = new BMW(200,"Grey") 
bmwObj.printSpeed()
bmwObj.printColor()
