# Functions in JS 

## 1. Declaring Functions

- Basic syntax for declaring functions

```javascript
function funcName (x, y) {
    // function body
}
```
- `function` keyword in the beginnning is mandatory (in this method at least)
- `funcName` is the function name 
- `x, y` are parameters of the function which will be passed during the function call

<br>

- functions can be called using `funcName()`
```javascript
funcName(arg1, arg2)
```
> **Remember**
>- When the variables which are passed to a function, from the function call, they are called **arguments**
>- However same things in the function _definition_ are called **parameters**
> **Eg:**
>```javascript
>function funcName(param1, param2) { // parameters here 
>    // function body
>}
>
>funcName(arg1, arg2)    // arguments here 
>```
>- It is just standard nomenclature, not much difference in function.

<br>

---

### 2. Return from Function

- to return back from a function we use the **`return`** keyword
- It is also used to return some value back from a function.
- **Eg:**
  
```javascript
function addNumbers(x,y){
    return x+y
    print("function returned results")
}

let result = addNumbers(10,20)
console.log(result)             // 30
```
- **NOTE** that the line : 
> print("function returned results")
- will not be executed. This is because the `return` keyword will stop the function execution and return the control back. 