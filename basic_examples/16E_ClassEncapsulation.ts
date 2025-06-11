/**
 * ENCAPSULATION
 *    - public	: by all. all members are public by default
 *    - protected	: inside class + by subclass + NOT by objects
 *    - private	: inside class only + NOT by Subclass or Objects
 */

console.log("\n=========================== #Prodbug108: Class Encapsulation ===========================");

class TestEncapsulation { 
   str1:string = "I am Public variable" 
   protected str2:string = "I am Protected variable" 
   private str3:string = "I am Private variable" 
   
   display(): void{
      console.log(this.str3);  //Access within class
   }

}
 

var obj = new TestEncapsulation() 
console.log(obj.str1)   
obj.display()
class Child extends TestEncapsulation{
   printMe(): void{
      console.log(this.str2)
   }
}
var childObj = new Child()
childObj.printMe()