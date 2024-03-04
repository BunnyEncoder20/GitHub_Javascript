# Immediately Invoked Functional Expressions (IIFE)

- these functions are called when we want the functions to be executed as soon as they are read. 
- Eg: calling a function to connect to the database when our application is started. 
- Also to not have issues from global scope variables we create our own smaller scope.
- Basic syntax of a IIFE:

```javascript
()()
```
- The **first** `()` will hold the function body or declaration.
- The **second** `()` is for calling or invoking the function 
- so the change in a normal function and IIFE can be seen as : 

```javascript
function normalFunc(){};        // normal function 
function (iifeFunc(){})();      // IIFE
```
- **Example :**

```javascript 
function normalFunc(){console.log("Normal Function")}
normalFunc();

(function(iifeFunc(){console.log("IIFE Function")}))();
```
- **NOTE** the use of `;` in these lines.
- This is **needed** as when we are using IIFE , `JS` is not able to determine properly where the lines is ending.
- Hence sometimes when the `;` is not there it'll give an error. 

```javascript 
function normalFunc(){console.log("Normal Function")}
normalFunc()

(function(iifeFunc(){console.log("IIFE Function")}))();     // Error
```
- **Hence** it is good practice to put `;` before and after the IIFE.
- We can pass in arguments to the IIFE and also make the IIFE as an arrow function

```javascript
((a,b,c) => {
    console.log(a+b+c)
})(10,20,30);
```
- **Remember** when we write a IIFE with a name, it is called a **named IIFE**
- Eg: `(function normalFunc(){})();` is a **named IIFE**
- When we write IIFE without a name, it is called a **anonymous IIFE or simple IIFE**
- Eg: `(()=>{})();` is a **simple IIFE** 