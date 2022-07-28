/**
* Variable Scope
*/

var global_num = 100          //global variable 


class Numbers { 
   num_val = 10;             //class variable 
   static sval = 20;         //static field 
   
   storeNum():void { 
      var local_num = 2;    //local variable
	  console.log("Local variable: "+ local_num)  	  
   } 
} 


console.log("Global num: "+ global_num)  
console.log("Static variable: "+ Numbers.sval)

var obj = new Numbers(); 
console.log("Class variable: "+obj.num_val) 
obj.storeNum()