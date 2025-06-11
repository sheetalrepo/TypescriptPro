/**
 * Qrite a method which will add the list of numbers sent to it
 * Solution should be dynamic
 * 
 * 
 */

function getDynamicArraySum(...myArr: number[]){

    var sum = 0;
    for(var i=0; i < myArr.length ; i++){
        sum = sum + myArr[i];
    }

    return sum;
}


console.log(getDynamicArraySum(10,10))
console.log(getDynamicArraySum(10,10,30))

    


