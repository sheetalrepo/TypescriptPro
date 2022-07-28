/**
* Unions : Using union we can specify a variable can have multiple types like number, string etc
* var a: string | number   It shows that 'a' can be string or number 
*/

console.log("---------------------UNIONS-------------------------")
//In normal case will get compiler error
//var test: string = "hi"
//test = 10;
//console.log("test value of val "+test) 

var val:string|number 
val = 12 
console.log("numeric value of val is: "+val) 
val = "Val becomes string" 
console.log("string value of val is: "+val)




console.log("---------------------UNIONS IN PARAMS-------------------------")

function getStringOrArray(name:string|string[]) { 
   if(typeof name == "string") { 
      console.log(name) 
   } else { 
      var i; 
      
      for(i = 0;i<name.length;i++) { 
         console.log(name[i])
      } 
   } 
} 
getStringOrArray("test") 
console.log("Printing array:") 
getStringOrArray(["A","B","C","D"])





console.log("---------------------UNIONS IN ARRAYS-------------------------")

var arr:number[]|string[]; 

console.log("numeric array:")  
arr = [1,2,3] 
var i:number; 
for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  

console.log("String array: ")  
arr = ["New Delhi","Pune","Bombay"] 
for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
} 

