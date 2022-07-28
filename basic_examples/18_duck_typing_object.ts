/**
* Duck Type: two objects are considered to be of the same type if both share the same set of properties.
* 	
* Phrase: When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck	 
*/

console.log("----------------------------Normal Case--------------------------------------");
//declare an interface
interface ILivable {
    age: number,
    name: string
};


//function implements interface
function testLivableMethod(obj: ILivable) {
    console.log("Age: "+obj.age + " &&  Name: " + obj.name);
}


// ivar is an instance of livable interface and can be passed to method which is also an instance of livable interface
var iVar : ILivable = {
    age: 10,
    name : "Rose Plant"
};


testLivableMethod(iVar);
testLivableMethod({ age: 11, name: "Lilly Plant" });  //Ok - As it implicitly implements ILivable




console.log("----------------------------Duck Typing Case--------------------------------------");

//declare an separate interface : note two elements match with ILivable
interface INonLivable {
    age: number,  //matching
    name: string, //matching
	madeof: string
};


//variable is an instance of NonLivable interface. And this is not an instance of Livable interface
var iVarNew : INonLivable = {
    age: 4,
    name : "Dinning Table",
	madeof : "Wood"
};


testLivableMethod(iVarNew);
testLivableMethod({ age: 5, name: "Leather Sofa Set" });

//Note:
//Method expect an object which has two properties age and name. If any variable has these two property then
//that variable can be passed to given Method

