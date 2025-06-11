OM
============================================================================================================
============================================================================================================
#TypeScript
============================================================================================================
#Overview
TypeScript is a strongly typed, object oriented, compiled language. 
It was designed by Anders Hejlsberg (designer of C#) at Microsoft.
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
Angular 2.0 is written in TS
Works on both client side and server side
In short TS = JS + other benifits
TS is aligned with the ECMAScript6 specification

#Adv Of TypeScript Over JavaScript
1. Its Object Oriented language
2. Easy to write than JS
3. Very easy to learn for people from Object Oriented background like Java
4. Compiler generate JS file which can be used anywhere
5. Concept of Interface present in TS unlike JS
6. TS code is reusable 
7. TS code remain clean in case code grows; generally happend in case of server side coding




#Index 
#Basic:
1. Why TypeScript & its usage
2. TS Variables 
3. TS Casting 
4. TS Variable Scopes
5. TS Operators 
6. TS Loops: For IN, For OF, For Each, While, Do While, Switch
7. TS Functions
8. TS Overloading Concepts
9. TS Numbers
10. TS String
11. TS Arrays


#Adv: 
12. TS Tuples
13. TS Pop Push Concept
14. TS Union
15. TS Lambadas
        - Map
        - Filter
        - Reduce
16. TS Interfaces
17. TS Classes 
        - Inheritance, Overloading, Overriding
        - Encapsulation, Interfaces
        - Static Members, ProtoType
        - ReadOnly Members
18. TS Objects
19. TS Duck Type Objects
20. TS ProtoType vs Static Variables




TODO:
Enums → Allows defining a set of named constants (enum Color { Red, Green, Blue })
Type Assertions (as Type) vs Casting
Intersection Types (& operator) → Combines multiple types into one (type Employee = Person & Manager)

============================================================================================================
============================================================================================================
#Installation
============================================================================================================
0. Open Window Power shell and try to install at global level 

1. Install Node and NPM   |   https://nodejs.org/en/download

2. Verify installation
node -v		    18.12.1
npm -v	 		9.6.7

3. Install TS and verify it
npm install -g typescript
tsc -v			5.8.3


#Installaiton Debug :
1. npm list -g typescript
    - shd show typescript structure
2. npm root -g
    - shd return : path\AppData\Roaming\npm\node_modules
3. Add following path in env:
    C:\Users\2245419\AppData\Roaming\npm
4. Check now
    tsc -v




#Good To Install   |  Optional
Note: ts-node can compile and run ts files in single step rather 2 step run porcess

npm install -g ts-node

ts-node -v
    v10.9.2

#Installation Debug:
ERR_UNKNOWN_FILE_EXTENSION

npm list -g ts-node             | check installation tree


============================================================================================================
============================================================================================================
#How to Run:
============================================================================================================
#PowerShell
  step 1:  tsc 1_variables.ts           | This will generate a .js file in same directory
  step 2:  node 1_variables.js          | Now run JS file via node    


#PowerShell
ts-node 1_variables.ts


============================================================================================================
============================================================================================================
#Good To Know:
============================================================================================================
Q: Why TypeScript Needs to Be Compiled First?
TypeScript cannot run directly in Node.js because it's a superset of JavaScript 
that adds extra features like static typing, interfaces, 
and decorators—which Node.js does not understand natively.

JavaScript is the only language browsers & Node.js natively understand.

TypeScript contains extra types, interfaces, and decorators that must be stripped out before execution.
The TypeScript compiler (tsc) converts .ts files into pure .js files that Node.js can interpret.




Q: ES module vs Common JS
CommonJS (CJS)
✅ Older module system, used in Node.js. 
✅ Uses require() for imports & module.exports for exports. 
✅ Synchronous—good for server-side code but not great for browsers.

ES Modules (ESM)
✅ Modern module system, introduced in ES6 (2015). 
✅ Uses import & export statements. 
✅ Asynchronous, making it better for browsers. 
✅ Required for using top-level await, tree-shaking, and better optimization.

Which One to Use?
✅ For Node.js apps → CommonJS (require/module.exports).
✅ For modern JavaScript (frontend, bundlers) → ES Modules (import/export).


Q:Recommended Choice for Playwright
✅ Use ES Modules ("type": "module") if:
You are working with modern TypeScript projects.
You need top-level await and better tree-shaking.
You plan to integrate with ECMAScript-native tools like Webpack.

✅ Use CommonJS ("type": "commonjs") if:
You want simpler compatibility with older Node.js versions.
Your project relies on require() imports.
You use existing Playwright TypeScript configurations that default to CJS.

Go with ES Modules (import/export) for Playwright automation in TypeScript
     unless your framework requires CJS compatibility. 🚀


Q: null vs undefined
var a = null;  console.log(a)   //null
var b; console.log(b)           //undefined



============================================================================================================
============================================================================================================
#References:
============================================================================================================
https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Basic%20Types.md
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
https://www.tutorialspoint.com/typescript/index.htm


#Notes:
https://www.index.dev/blog/javascript-vs-typescript-popularity
https://www.libhunt.com/index
https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/
============================================================================================================