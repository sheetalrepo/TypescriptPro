/**
 * Variable Scope
 *    - Inside class 'var' keyword cannot be used
 * 
 * 
 */
console.log("\n=========================== #Prodbug108: SCOPE VARIABLES ===========================");
var global_num = 100                          //Global Variable 

class Numbers { 
   num_val = 10;                              //Class Variable  + Cant use 'var' keyword 
   static sval = 20;                          //Static Variable + Cant use 'var' keyword 
   
   printLocalVar():void { 
      var local_num = 2;    //Local Variable
	  console.log("Local variable: "+ local_num)  	  
   } 

   printAge(age: number):void {                //Parameter Variable / Method Parameter
     console.log("Age: "+ age)  	  
   }
} 

//No MAIN method required to run the code
var obj = new Numbers(); 
console.log("Class variable: "+obj.num_val)        //obj.variableName
obj.printLocalVar()

obj.printAge(10);                                  //pass param

console.log("Global num: "+ global_num)  
console.log("Static variable: "+ Numbers.sval)     //ClassName.variableName

