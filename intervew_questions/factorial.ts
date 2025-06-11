
/**
 *  Step 1: Always write if loop and make sure for -ve and 0 numbers return 1
 *  Step 2: n * abc(n-1)    | call same method with n-1 value, recursion logic
 */

function getFactorial(n: number){

    if(n <= 0){
        return 1;
    }else{
        return n * getFactorial(n-1);
    }

}
    

console.log(getFactorial(6))


    


