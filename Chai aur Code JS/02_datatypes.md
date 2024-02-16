# Data Types in JS 
---

- We can tell the engine to use all the JS code as the newer version of JS (if there is legacy code in the project) by adding the following line at the top of the js file: 
```javascript
"use strict"; // treat all JS code as newer version
```

**NOTE**
- Though, we don't need to put semicolon after js line, the most important thing is to have readability and future proofing code writing. 
- Hence coding lines like these are TRASH. DO NOT do this (even if it works) 
```javascript
console.log("Hellow"); console.log("World");
```
- The official documentation of ecma scripts (now JavaScript) _standards_ can be found on [ecma](https://tc39.es/ecma262/)
- The JavaScript documentation of JS _language_ can be found here : [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


---

## Primitive DataTypes in JS
1. String 
```javascript
let name = "somasenpai"
```
2. Number
```javascript
let age = 23
```
- there is `bigInt` data type for storing very large numbers. But for most of your programming lifetime you'll not eb using it.
3. Boolean
```javascript
let bestfriend = true
```
4. null
    - it is a **standalone value** & a type in JS
    - it usually means the value is empty (not undefined)
5. undefined 
    - it means the variable is declared but not defined yet (not empty or null)
6. symbol
    - useful when dealing with React components. 
    - it is used for identifying uniqueness in components (in React and Figma)

**NOTE:**
- We can check the datatype of a variable by using : 
```javascript
console.log(typeof variableName)
```
- When we print out the types of undefined and null then we get : 
```javascript
console.log(typeof undefined)   // prints undefined
console.log(typeof null) // prints object
```
- This can be seen as a flaw of the language.

--- 
## Non-primitive DataTypes in JS 

1. Object
    - almost everything in JS can be seen as a object