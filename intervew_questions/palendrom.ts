
var str: string = "madam";
var newStr: string = "";

for(var i=str.length -1 ; i >= 0 ; i --){
    newStr = newStr + str.charAt(i);
}

console.log(str);
console.log(newStr);

if(str == newStr)
    console.log("palendrom")
else
    console.log("Not palendrom") 
    
    


