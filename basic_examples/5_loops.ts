/**
* TS Loops
*
*/

console.log("---------------WHILE---------------------");

var n = 2 
while(n < 5) { 
   console.log("Entered while" + n) 
   n++;
} 

console.log("---------------DO WHILE---------------------");

var m = 10 
do { 
   console.log("Entered do…while" + m) 
   m--;
} 
while(m>5)


console.log("---------------BREAK---------------------");

var x = 0 
while(x < 50) { 
    console.log("Entered while: " + x) 
    x++;
	
	if(x % 5 == 0)
		break;
} 

console.log("---------------FOR---------------------");

for(var i = 0; i <= 10 ; i++){
	console.log(">>"+i);
}