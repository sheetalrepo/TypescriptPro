console.log("\n=========================== #Prodbug108: OVER LOADING ===========================");

//function declaration at the top
function disp(s1:string, s2:string):void; 
function disp(n1:number, n2:number):void; 
function disp(n1:number, s1:string):void; 
function disp(s1:string, n1:number):void; 

//single func defination for all overloaded methods
function disp(x:any,y:any):void { 
   console.log("x: "+ x+ "	&&	y: "+y); 
}

//result
disp("abc","xyz");
disp(1,2);
disp(1,"xyz");
disp("abc",2);





console.log("\n=========================== #Prodbug108: OVER LOADING WITH OPTIONAL PARAM ===========================");

//function declaration at the top
function dispNew(s1:string):void; 
function dispNew(s1:string, s2:string):void; 


//func defination
function dispNew(x:any,y?:any):void { 
   console.log("x: "+ x); 
   console.log("y: "+y); 
} 
dispNew("mango") 
dispNew("grapes","orange");


