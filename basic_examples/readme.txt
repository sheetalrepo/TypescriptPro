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



#Installation
1. Install Node and NPM   |   https://nodejs.org/en/download

2. Verify installation
node -v		    16.13.0	
npm -v	 		8.1.4

3. Install TS and verify it
npm install -g typescript
tsc -v			4.5.4


4. How to run type script
Open cmd or git bash
go to folder containing .ts files
tsc test1.ts			|  to compile type script ts file, it will generate js file
node test1.js			|  to run java-script generated file

Note: Use Wild web Developer (Eclipse Plugin)



#References:
https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Basic%20Types.md
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
https://www.tutorialspoint.com/typescript/index.htm
https://www.protractortest.org/#/