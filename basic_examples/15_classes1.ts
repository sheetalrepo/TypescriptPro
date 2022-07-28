/**
* class : Contains Fields, Function and Constructor
*
*
*/


console.log("---------------------CLASS OBJ-------------------------")

class Car { 
   //field declaration
   colour:string; 
 
   //constructor declaration
   constructor(colour:string) { 
      this.colour = colour 
   }  

   //function declaration
   disp():void { 
      console.log("My colour is  :   "+this.colour) 
   } 
}

//create an object 
var obj = new Car("Red")

//access the function
obj.disp()


console.log("---------------------CLASS INHERITANCE-------------------------")

class Area{
	l: number;
	b: number;
	
	constructor(l, b){
		this.l = l;
		this.b = b;
	}
	
	getArea() : number{
		return this.l * this.b;
	}
}

var objArea = new Area(10,20);
console.log("Area: "+objArea.getArea());


class Volume extends Area{
	h : number;
	
	constructor(l,b,h){
		super(l, b);
		this.h = h;
	}
	
	getVolume(): number {
		var a = this.getArea();
		return this.h * a;
	}
}

var objVol = new Volume(2, 4, 5);
console.log("Vol: "+objVol.getVolume());





