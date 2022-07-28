/*
* Arrays
* var array_name[:datatype];        //declaration 
* array_name = [val1,val2,valn..]   //initialization
*
* todo: practice methods in https://www.tutorialspoint.com/typescript/typescript_arrays.htm
*/

console.log("---------------Arrays Declaration---------------------");
var alpha:string[]; 
alpha = ["1","2","3","4"] 
console.log(alpha[0]); 
console.log(alpha[1]);


console.log("---------------Arrays Declaration in One Line---------------------");
var nums:number[] = [1,2,3,4] 
console.log(nums[0]); 
console.log(nums[1]);


console.log("---------------Arrays Declaration Using New---------------------");
var arr_names:number[] = new Array(4)  
for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}


console.log("---------------Arrays Declaration Using New (One Line)---------------------");
var names:string[] = new Array("Trees","Plants","Water","Sky") 
for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}


console.log("---------------Array Destructuring---------------------");
// assigning arrays values to individual elements
var arr_dest:number[] = [12,13,14,15] 
var[a,b,c,d] = arr_dest 
console.log(a) 
console.log(d)



console.log("---------------Array Iterating using For In Loop---------------------");
var j:any; 
var nums_for_in:number[] = [100,200,300,400] 

for(j in nums_for_in) { 
   console.log(nums_for_in[j]) 
} 



console.log("---------------2 D Array---------------------");
//			0     1     2
//   0      1     2     3
//	 1	    10    20    30
var multi:number[][] = [[1,2,3],[10,20,30]]  
console.log(multi[0][0] + "	" + multi[0][1]  + "	"+ multi[0][2]) 
console.log(multi[1][0] + "	" + multi[1][1]  + "	"+ multi[1][2]) 






console.log("-----------------------PASSING ARRAY TO FUNCTION----------------------------------")

function dispMethod(arr_names:string[]) {
   for(var i = 0;i<arr_names.length;i++) { 
      console.log(arr_names[i]) 
   }  
}  

var namesArr:string[] = new Array("Jan","Feb","Mar","Apr")  
dispMethod(namesArr)




console.log("-----------------------RETURNING ARRAY FROM FUNCTION----------------------------------")

//define array
var myArr:string[] = new Array("1","2","3","4")  

//return array
function testArrayReturn():string[] { 
   return myArr;
} 
 
//call method and print returned array
var numsArr:string[] = testArrayReturn() 
for(var i in numsArr) { 
   console.log(numsArr[i]) 
}


