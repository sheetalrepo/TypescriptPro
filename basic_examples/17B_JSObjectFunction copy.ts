

console.log("\n=========================== #Prodbug108: JSON Object Passed to Function ===========================");
var humanObj = { 
	eyes:"Two", 
	nose:"One",
	hands: "Two"	
}; 

var myFunction = function(x: {eyes, nose}) { 
   console.log("Eyes Count :"+x.eyes) 
   console.log("Nose Count :"+x.nose) 
} 

myFunction(humanObj) //passing obj into function





console.log("\n=========================== #Prodbug108: Anonymous Object ===========================");
//object will be created directly while passing it to function

var myAnonymousFunction = function(x:{ firstname, lastname}) { 
   console.log("first name :"+x.firstname) 
   console.log("last name :"+x.lastname) 
} 

myAnonymousFunction({firstname:"Sheetal",lastname:"Singh"});  //Anonymous obj created and passed
