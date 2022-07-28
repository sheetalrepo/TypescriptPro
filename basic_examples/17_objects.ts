/**
* object: this is different from java object
*		  object is kind of hashmap with some key value pairs
*		  values can be simple number, string or function, arrays, tuples etc	
*/

console.log("----------------------------Declaration--------------------------------------");
/**
var object_name = { 
   key1: “value1”, //scalar value 
   key2: “value”,  
   key3: function() {
      //functions 
   }, 
   key4:[“content1”, “content2”] //array  
};
**/


console.log("----------------------------Plain Scalar Object--------------------------------------");

var carobj = { 
   name:"dmax", 
   model:"isuzu" 
}; 
//access the values 
console.log(carobj.name) 
console.log(carobj.model)




console.log("----------------------------Object with function defination --------------------------------------");
var flowerobj = { 
   name:"marigold", 
   colour:"yellow", 
   sayHi:function() { console.log("Hi beautiful "+ flowerobj.name)}  // Type defination 
}; 

flowerobj.sayHi()




console.log("----------------------------object with function type template--------------------------------------");
//we can simply define function template and later give function defination

var treeobj = { 
   name:"mango tree", 
   colour:"dark green", 
   sayHello:function() {  }  //Type template 
}; 

//function type defination
treeobj.sayHello = function() {  
   console.log("hello "+treeobj.name)
}  

//calling function
treeobj.sayHello()



console.log("----------------------------object passed to normal function--------------------------------------");
var humanObj = { 
	eyes:"Two", 
	nose:"One",
	hands: "Two"	
}; 

var myFunction = function(obj: {eyes, nose}) { 
   console.log("Eyes Count :"+obj.eyes) 
   console.log("Nose Count :"+obj.nose) 
} 

myFunction(humanObj) //passing obj into function






console.log("----------------------------Anonymous Object--------------------------------------");
//object will be created directly while passing it to function

var myAnonymousFunction = function(obj:{ firstname, lastname}) { 
   console.log("first name :"+obj.firstname) 
   console.log("last name :"+obj.lastname) 
} 

myAnonymousFunction({firstname:"Sheetal",lastname:"Singh"});  //Anonymous obj created and passed


