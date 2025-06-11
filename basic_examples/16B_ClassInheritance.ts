/**
 * Inheritance
 * 
 * 
 */

console.log("\n=========================== #Prodbug108: Parent Class ===========================");

class Area{

	//fields
	l: number;
	b: number;
	
	//constructor
	constructor(l, b){
		this.l = l;
		this.b = b;
	}
	
	//functions
	getArea() : number{
		return this.l * this.b;
	}
}

var objArea = new Area(5, 6);
console.log("Area: "+ objArea.getArea());



console.log("\n=========================== #Prodbug108: Child Class ===========================");

class Volume extends Area{
	h : number;
	
	constructor(l,b,h){
		super(l, b);   // call parent costructor
		this.h = h;
	}
	
	getVolume(): number {
		var a = this.getArea();
		return this.h * a;
	}
}

var objVol = new Volume(10, 20, 5);
console.log("Vol: "+ objVol.getVolume());