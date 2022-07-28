/**
* class : Contains Fields, Function and Constructor
*
*
*/

console.log("---------------------CLASS OVERRIDING-------------------------")

class Fruits{
	print(){
		console.log("I am fruits");
	}
}


class Mango extends Fruits{
	print(){
		console.log("I am yellow fruit");
	}
}

var objFruit = new Fruits();
objFruit.print();

var objMango = new Mango();
objMango.print();



console.log("---------------------STATIC VARIABLES-------------------------")
//Class name used to call static var and methods

class TestStatic{
	static num;

	static print(){
		console.log("print static:" + TestStatic.num );
	}	
}

TestStatic.num = 100;
TestStatic.print();



console.log("---------------------INSTANCE OF-------------------------")

var mangoObj = objMango instanceof Fruits; 
console.log("mangoObj is an instance of Fruit: " + mangoObj);



console.log("---------------------ENCAPSULATION-------------------------")
/**
* public	: by all. all members are public by default	
* protected	: inside class + by subclass
* private	: inside class
**/

class TestEncapsulation { 
   str1:string = "hello" 
   protected str2:string = "type script" 
   private str3:string = "world" 
}
 
var obj = new TestEncapsulation() 
console.log(obj.str1)     
//console.log(obj.str2)   //compilation Error
//console.log(obj.str3)   //compilation Error 




console.log("---------------------INTERFACE IMPLEMENTATION-------------------------")


interface ISpeed { 
	maxSpeed:number;
	printSpeed():void;
} 

class BMW implements ISpeed { 
   maxSpeed:number 
   colour:string 
   
   constructor(mxSpd,clr) { 
      this.maxSpeed = mxSpd 
      this.colour = clr 
   } 
   
   printSpeed():void {
	  console.log("Speed:" + this.maxSpeed);
	  console.log("Colour:" + this.colour);	  
   }

} 

var bmw = new BMW(200,"Grey") 
console.log("Max Speed is : "+bmw.maxSpeed+" && Colour is : "+bmw.colour )
