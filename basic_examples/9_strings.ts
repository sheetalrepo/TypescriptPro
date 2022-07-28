/*
* String Object
* var var_name = new String(string);
* 
*/

console.log("---------------Char At---------------------");

var str = new String("This is string"); 
console.log("str.charAt(0) is:" + str.charAt(0))
console.log("str.charCodeAt(0) is:" + str.charCodeAt(0)); //return unicode



console.log("---------------Index Of---------------------");
// syntax string.indexOf(searchValue, fromIndex)
var str1 = new String("this is string"); 
console.log("indexOf found String :" + str1.indexOf("t"));   
console.log("indexOf found String :" + str1.indexOf("t", 3));



console.log("---------------Slice---------------------");
var str2 = "We are learning TypeScript"; 
var sliced1 = str2.slice(3); 
console.log(sliced1);

var sliced2 = str2.slice(3, -2); 
console.log(sliced2);



console.log("---------------Split---------------------");
//string.split(separator, limit);
var str3 = "We are learning simple version of Java Script"; 
var splitted1 = str3.split(" "); 
console.log(splitted1)
var splitted2 = str3.split(" ", 3); 
console.log(splitted2)



console.log("---------------SubStr not SubString---------------------");
//string.substr(start, length);
var str4 = "We are learning simple version of Java Script"; 
console.log("(1,2): "    + str4.substr(1,2)); 
console.log("(-2,2): "   + str4.substr(-2,2)); 
console.log("(1): "      + str4.substr(1)); 
console.log("(-20, 2): " + str4.substr(-20,2)); 
console.log("(20, 2): "  + str4.substr(20,2));



console.log("---------------SubString---------------------");
//string.substring(indexA, [indexB])
var str5 = "We are learning simple version of Java Script"; 
console.log("(1,2): "    + str5.substring(1,2)); 
console.log("(0,10): "   + str5.substring(0, 10)); 
console.log("(5): "      + str5.substring(5));



console.log("---------------valueOf---------------------");
var str6 = new String("Hello world"); 
console.log(str6.valueOf( ));



console.log("---------------search/regex ??---------------------");
var re1 = /apples/gi; 
var str7 = "Apples are round, and apples are juicy.";
if (str7.search(re1) == -1 ) { 
   console.log("Does not contain Apples" ); 
} else { 
   console.log("Contains Apples" ); 
} 


console.log("---------------replace ??---------------------");
var re2 = /apples/gi; 
var str8 = "Apples are round, and apples are juicy.";
var newstr = str8.replace(re2, "oranges"); 
console.log(newstr)

var re3 = /(\w+)\s(\w+)/; 
var str9 = "zara ali"; 
var newstr = str9.replace(re3, "$2, $1"); 
console.log(newstr);