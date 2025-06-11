/**
 * 
 * Overloading in JS/TS works a bit in diff way than Java
 * JavaScript does not support true function overloading, so TypeScript uses a workaround
 * 
 * Following code would have worked well in Java but not in TS/JS
 */

console.log("\n=========================== #Prodbug108: OVER LOADING ===========================");

// function getResult(m:number, n:number){
//    return m + n;
// }

// function getResult(m:string){
//    return m;
// }

// console.log(getResult(10, 20))
// console.log(getResult("abc"))




console.log("\n=========================== #Prodbug108: OVER LOADING TS WAY ===========================");
/**
 * 
 * 1. Declare all verison of overloading on top
 * 2. Single implementation of all overloaded functions
 * 
 * n: is Optional param as its present in one and not in others
 * 
 */

function getResult(m: number, n: number): number;           //Return number
function getResult(m: string): string;                      //Return string


function getResult(m: number | string, n?: number): number | string {
    if (typeof m === "number" && typeof n === "number") {
        return m + n;
    } else {
      return (m as string).toUpperCase(); 
    }
}

console.log(getResult(10, 20));  //Output: 30
console.log(getResult("Abc"));   //Output: "ABC"