/**
* TS Loops
*
*/
console.log("\n=========================== #Prodbug108: WHILE ===========================");
var n = 2 
while(n < 5) { 
   console.log("Entered while" + n) 
   n++;
} 




console.log("\n=========================== #Prodbug108: DO WHILE ===========================");
var m = 10 
do { 
   console.log("Entered do…while" + m) 
   m--;
} 
while(m>5)




console.log("\n=========================== #Prodbug108: BREAK ===========================");
var x = 0 
while(x < 50) { 
    console.log("Entered while: " + x) 
    x++;
	
	if(x % 5 == 0)
		break;
}





console.log("\n=========================== #Prodbug108: FOR ===========================");
let months: string[] = ["Jan", "Feb", "Mar"];

for(var i = 0; i < months.length ; i++){
	console.log("Months:  "+ i +" "+ months[i]);
}




console.log("\n=========================== #Prodbug108: FOR IN ===========================");
let fruits: string[] = ["Apple", "Banana", "Orange"];

for (let i in fruits) {
    console.log("Fruits:  "+ i +" "+ fruits[i]);
}




console.log("\n=========================== #Prodbug108: FOR OFF ===========================");
//Best for arrays – directly iterates over values instead of indexes.
let cars: string[] = ["Audi", "VW", "BMW"];

for (let car of cars) {
    console.log("My Car Name:  "+ car);    
}



console.log("\n=========================== #Prodbug108: FOR EACH ===========================");
let days: string[] = ["Sunday", "Monday", "Tuesday"];

days.forEach((d) => {
   console.log("Days:  ", d);
});




console.log("\n=========================== #Prodbug108: SWITCH ===========================");
function getDayMessage(day: string): string {
   switch (day.toLowerCase()) {
       case "monday":
           return "Start of the week!";
       case "friday":
           return "Weekend is near!";
       case "saturday":
       case "sunday":
           return "Enjoy the weekend!";
       default:
           return "Just another day!";
   }
}

console.log(getDayMessage("Friday")); 
console.log(getDayMessage("Saturday")); 
console.log(getDayMessage("Wednesday")); 
