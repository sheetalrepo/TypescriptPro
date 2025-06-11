
console.log("\n=========================== #Prodbug108: String Object ===========================");
/**
 * String Primitive:
 *    - Creates a primitive string
 *    - Stored directly in memory—faster and lighter
 *    - Preferred
 * 
 * 
 * String Object:
 *    - Stored as an instance of String class.
 *    - Less efficient because objects take up more memory than primitives.
 * 
 */
var strA = "abc";
var strB = new String("abc");
console.log(typeof strA);        //string 
console.log(typeof strB);        //object




console.log("\n=========================== #Prodbug108: Normal Equality ===========================");
/**
 * 
 * Rule ==
 *    1. The == operator checks values of primitives
 *    2. The == operator does not check type strictly. It attempts to convert both values to a common type
 *    3. JS automatically calls .valueOf() on the String object, which returns the primitive value
 *    4. == only triggers .valueOf() when comparing a primitive and an object. Not when compare obj vs obj
 * 
 * Key Takeaway: Avoid new String()
 *    - always use primitive strings for better performance and easier comparisons!
 */
console.log("abc" == "abc");                                               // ✅ true Rule 1
console.log("abc" == new String("abc"));                                   // ✅ true Rule 2 & 3
console.log(new String("abc") == new String("abc"));                       // ❌ false Rule 4

console.log(new String("abc").valueOf() == new String("abc").valueOf());   // ✅ true Rule 1
console.log(new String("abc").toString() == new String("abc").toString()); // ✅ true Rule 1




console.log("\n=========================== #Prodbug108: Strict Equality ===========================");
/**
 * Rule Strict Equality ===
 *    1. Strict equality (===) checks Value
 *    2. Strict equality (===) checks Memory reference
 *    3. The === () operator does not call .valueOf() internally.
 *    4. Prim vs Obj will always be false
 *    5. Prim vs Prim will be True in case value is same
 * 
 */
console.log("abc" === "abc");                            // ✅ true Rule 1
console.log(new String("abc") === new String("abc"));    // ❌ false Rule 2
console.log("abc" === new String("abc"));                // ❌ false Rule 3, 4


console.log("");
console.log("abc" === new String("abc").valueOf());      // ✅ true Rule 5
console.log("abc" === String(new String("abc")));        // ✅ true, type conversion, Rule 5




console.log("\n=========================== #Prodbug108: Char At ===========================");
var str = new String("This is string"); 
console.log("str.charAt(0) is:" + str.charAt(0))
console.log("str.charCodeAt(0) is:" + str.charCodeAt(0)); //return Unicode Number of T i.e. 84




console.log("\n=========================== #Prodbug108: Index Of ===========================");
// syntax string.indexOf(searchValue, fromIndex)
var str1 = new String("this is string"); 
console.log("indexOf :" + str1.indexOf("t"));   
console.log("indexOf with start position :" + str1.indexOf("t", 3));




console.log("\n=========================== #Prodbug108: Slice ===========================");
var str2 = "We are learning TypeScript"; 
var sliced1 = str2.slice(3); 
console.log("Slice from start: ", sliced1);

var sliced2 = str2.slice(7, -6); 
console.log("Slice from start and end: ", sliced2);




console.log("\n=========================== #Prodbug108: Split ===========================");
/**
 *  Split and return array
 *  string.split(separator, limit) 
 */
var str3 = "We are learning simple version of Java Script"; 
var split1 = str3.split(" "); 
console.log(split1)
console.log("")

var split2 = str3.split(" ", 3); 
console.log(split2)




console.log("\n=========================== #Prodbug108: SubString ===========================");
//string.substring(indexA, [indexB])
var str5 = "We are learning simple version of Java Script"; 
console.log("(5): "      + str5.substring(5));           //start position
console.log("(0,10): "   + str5.substring(0, 10));       //range    




console.log("\n=========================== #Prodbug108: valueOf ===========================");
//Return primitive value of an Object
var str6 = new String("Hello world"); 
console.log(str6.valueOf());




console.log("\n=========================== #Prodbug108: RegEx + Search ===========================");
/**
 * ReEx:
 *    -  g (global flag): Finds all occurrences, not just the first one.
 *    -  i (case-insensitive flag): Matches "apples" regardless of whether it's uppercase or lowercase.
 */
var regEx1 = /apples/gi; 
var myStr1 = "Apples are round, and apples are juicy.";
if (myStr1.search(regEx1) == -1 ) { 
   console.log("Does not contain Apples" ); 
} else { 
   console.log("Contains Apples" ); 
} 

console.log("Get All Matches: ",myStr1.match(regEx1));




console.log("\n=========================== #Prodbug108: RegEx + Replace ===========================");
var regEx2 = /apples/gi; 
var myStr2 = "Apples are round, and apples are juicy.";
var newstr = myStr2.replace(regEx2, "oranges"); 
console.log(newstr)