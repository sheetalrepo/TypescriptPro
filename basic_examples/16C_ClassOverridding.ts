/**
 * Class:
 * 		- Overridding Methods
 * 
 */
console.log("\n=========================== #Prodbug108: Class Overridding ===========================");

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

