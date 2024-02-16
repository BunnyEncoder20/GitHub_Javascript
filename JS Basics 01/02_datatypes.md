# Data Types in JS 
---

- We can tell the engine to use all the JS code as the newer version of JS (if there is legacy code in the project) by adding the following line at the top of the js file: 
```javascript
"use strict"; // treat all JS code as newer version
```

>**NOTE**
>- Though, we don't need to put semicolon after js line, the most important thing is to have readability and future proofing code writing. 
>- Hence coding lines like these are TRASH. DO NOT do this (even if it works) 
>```javascript
>console.log("Hellow"); console.log("World");
>```
- The official documentation of ecma scripts (now JavaScript) _standards_ can be found on [ecma](https://tc39.es/ecma262/)
- The JavaScript documentation of JS _language_ can be found here : [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


- Based on these , the `data types` of JS are divided into 2 categories based on how are they stored in memory and how they are accessed from memory : 
  1. **call by value** - copy of the original data is made and all the changes take place in that made copy. Original data remains unchanged.
  2. **call by reference** - the reference if the memory is passed on so what ever changes are made are reflected onto the original data.
   
- **Following are all the data types :** 
    1. Primitive types
       1. string
       2. number
       3. boolean
       4. null
       5. undefined
       6. symbol
       7. bigInt (scientifically very large numbers)
   
    2. Non-primitive types (aka reference types)
       1. Arrays
       2. Objects
       3. Functions 

>- **NOTE:** `JavaScript` is a **dynamically typed language**, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
- In `TypeScript` there is type safety which looks something like this : 
```typescript
const score:number = 100 ;
```
- Hence TypeScript is primarily a **statically typed language**, not a dynamically typed one.
>- **NOTE:** symbols are used to make unique components. Even if we pass same value inside them, they are not equal. Example:
>```javascript
>let id1 = Symbol(1001)
>let id2 = Symbol(1001)
>console.log(id1 == id2)     // false
>```

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

>**NOTE:**
>- We can check the datatype of a variable by using : 
>```javascript
>console.log(typeof variableName)
>```
>- When we print out the types of undefined and null then we get : 
>```javascript
>console.log(typeof undefined)   // prints undefined
>console.log(typeof null) // prints object
>```


--- 
## Non-primitive DataTypes in JS 

- The typeof return of a non-primitive function is mostly object.
```javascript
arr = [1,2,3]
obj = {name:"Soma",age:22}
func = function() {
    console.log("Hello World")
}
console.table([typeof arr,typeof obj,typeof func])
```
Output :
| (index) |   Values   |
|:-------:|:----------:|
|    0    |  'object'  |
|    1    |  'object'  |
|    2    | 'function' |

> **NOTE:** The `function` is aka `object function` type
