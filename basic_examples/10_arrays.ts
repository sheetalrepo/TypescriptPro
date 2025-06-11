/*
* Arrays
* var array_name:datatype[]       //declaration 
* array_name = [val1,val2,valn..]   //initialization
*
* todo: practice methods in https://www.tutorialspoint.com/typescript/typescript_arrays.htm
*/

console.log("\n=========================== #Prodbug108: Arrays Declaration ===========================");
var alpha:string[]; 
alpha = ["1","2","3","4"] 
console.log(alpha[0]); 
console.log(alpha[1]);




console.log("\n=========================== #Prodbug108: Arrays Declaration in One Line ===========================");
var nums:number[] = [1,2,3,4] 
console.log(nums[0]); 
console.log(nums[1]);




console.log("\n=========================== #Prodbug108: Arrays Declaration Using New ===========================");
var arr_names:number[] = new Array(4)  
for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}




console.log("\n=========================== #Prodbug108: Arrays Declaration Using New (One Line) ===========================");
var names:string[] = new Array("Trees","Plants","Water","Sky") 
for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}




console.log("\n=========================== #Prodbug108: Preferred Arrays Declaration  ===========================");
var myArr1:number[] = [1,2,3,4] 
var myArr2:string[] = ["a","b","c","d"] 

for(var i = 0; i<=3; i++) {
   console.log(myArr1[i]+ " # "+ myArr2[i]) 
}




console.log("\n=========================== #Prodbug108: Array Destructuring ===========================");
// assigning arrays values to individual elements
var arr_dest:number[] = [12,13,14,15] 
var[a,b,c,d] = arr_dest 
console.log(a) 
console.log(d)




console.log("\n=========================== #Prodbug108: 2 D Array ===========================");
//			      Col-0     Col-1     Col-2
//  Row-0        1         2         3
//	 Row-1	    10         20        30

var multi:number[][] = [[1,2,3],[10,20,30]]  
console.log(multi[0][0] + "	" + multi[0][1]  + "	"+ multi[0][2]) 
console.log(multi[1][0] + "	" + multi[1][1]  + "	"+ multi[1][2]) 




console.log("\n=========================== #Prodbug108: PASSING ARRAY TO FUNCTION ===========================");
function dispMethod(arr_names:string[]) {

   for(var i = 0; i < arr_names.length; i++) { 
      console.log("Func:  "+arr_names[i]) 
   }  

}  

var namesArr:string[] = new Array("Jan","Feb","Mar","Apr")  
dispMethod(namesArr)