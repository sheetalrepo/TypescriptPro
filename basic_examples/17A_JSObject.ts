/**
 * 
 * Literal Object or JSON-like object:
 *    - Its not same as Class Object
 *    - It’s created using {} instead of a class or constructor
 *    - object is kind of hashmap with some key value pairs
 *    - values can be simple number, string or function, arrays, tuples etc	
 * 
 */

console.log("\n=========================== #Prodbug108: JSON Object Declaration ===========================");

/**
var object_name = { 
   key1: “value1”,
   key2: “value”,  
   key3: function() {
      //functions 
   }, 
   key4:[“content1”, “content2”] 
};
**/

console.log("\n=========================== #Prodbug108: Plain Scalar Object ===========================");

var carobj = { 
   name:"Audi", 
   model:"Q7",
   price: 100 
}; 
//access the values 
console.log(carobj.name) 
console.log(carobj.model)
console.log(carobj.price)




console.log("\n=========================== #Prodbug108: JSON Object with function ===========================");
var flowerobj = { 
   name:"marigold", 
   colour:"yellow", 
   myFunc:function() { console.log(flowerobj.name+ " is beautiful")} 
}; 

flowerobj.myFunc()




console.log("\n=========================== #Prodbug108: Function with Type Template ===========================");
//we can simply define function template and later give function defination

var treeobj = { 
   name:"mango tree", 
   colour:"dark green", 
   myEmptyFunc:function() {}  //Type template 
}; 

//function type defination
treeobj.myEmptyFunc = function() {  
   console.log("hello "+treeobj.name)
}  

//calling function
treeobj.myEmptyFunc()
