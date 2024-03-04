# JS Execution and Call Stack

## JS Execution Context 

- Whenever we run a `JS` file it creates 2 **Execution Contexts**
1. **Global Execution Context** 
    - which is passed into the `this` keyword
2. **Functional Execution Context**
3. _Eval Execution Context_ 
    - when we use advanced Libraries like Mongoose, in a way is a property of global only

<br>

- Any `JS` code file runs in **2 phases** : 

1. **Memory Creation Phase**
    - in this all the memory which would be needed by the code would be created
    - None of the actual code is executed, only allocation takes place by reading the code 
2. Execution Phase
    - Here the code is actually executed line by line

<br>

Consider the following code block : 

```javascript
let val1 = 10
let val2 = 20

function addNums(num1, num2){
    let total = num1+num2
    return total
}

let result1 = addNums(val1, val2)
let result2 = addNums(20,30)
```
- The above code is executed in the following steps : 

1. **Global Execution Context** (GEC) is created 
    - this steps happens no matter what
    - the `GEC` is passed into the `this` keyword

2. **Memory Creation Phase** (MCP)
    - here all the variables are allocated memory and assigned values of undefined. 
    - In case of functions, the entire function definition (function body) is passed into the memory
    - So the code will produced the following 
        >- val1 = undefined 
        >- val2 = undefined
        >- addNums = [function definition]
        >- result1 = undefined
        >- result2 = undefined
    - this marks the end of **1<sup>st</sup>cycle** (phase)
  
3. **Execution Phase**
    - here is where the code is executed line by line 
    - which also means that the variables are given their assigned values 
    - So the code will be executed in the following manner : 
        - `val1` = 10
        - `val2` = 20
        - `result1 = addNums(val1, val2)` makes  **[New variable env + Execution thread]** which will cause the `MCP` and `EC` phases to happen again but for the function `addNums`.
          - **Creation Phase**
            - val1 = undefined
            - val2 = undefined
            - total = undefined
          - **Execution Phase**
            - num1 = val1 = 10
            - num2 = val2 = 20 
            - total = 30
            - return total = returns the total variable to the Global execution Context
          - **Deletion of Context** : once the function execution has been completed, the execution context of `addNums` is deleted.
        - `result1` = addNums(val1,val2) = 30
        - `result2 = addNums()` : creates a new **[New variable env + Execution thread]** which will again have it's own `MCP` and `EC` phases
            - **Creation Phase**
              - num1 = undefined
              - num2 = undefined
              - total = undefined
            - **Execution Phase**
              - num1 = 20
              - num2 = 30
              - total = 50
              - return total returns the total variable to the global execution context
            - **Deletion of Context** : after the function is executed all of it's context is deleted
        - `result2` = addNums(20,30) = 50
        - _End of script._

![alt text![JS Execution Context and Stack](/assets/JS%20Execution%20Context%20and%20Stack.drawio)](image.png)

---

## Call Stack

- It's a data structure used by `JS` during execution of a program to keep track of the function calls.
- It follows the **Last-In-First-Out (LIFO)** principle, meaning that the last function called is the first one to be resolved.
- When a function is called, a new **frame** is created and pushed onto the call stack. This _frame_ contains information about the function call, such as the function's arguments and local variables. 
- The function's code is then executed, and if any other functions are called within that function, their frames are pushed onto the stack as well.
- Once a function completes its execution, its frame is popped off the stack, and the program continues with the next function in the stack. This process continues until the stack is empty, indicating that the program has finished executing.
- We can view the Call stack of JS in the VScode debugger mode. You can put breakpoints at consolelogs and function calls to see the CallStack in action.
- Use the code below to contract the working of the call stack:

1. Sequential Function Calls 
```javascript
// call stack when functions are called one after another 

function one(){
    console.log("one")      // breakpoint 
}
function two(){
    console.log("two")      // breakpoint 
}
function three(){
    console.log("three")    // breakpoint 
}

one()                       // breakpoint 
two()                       // breakpoint 
three()                     // breakpoint 
```
2. Functions called from within another function

```javascript
function one() {
    console.log("one")      // breakpoint 
    two()                   // breakpoint 
}   

function two(){
    console.log("two")      // breakpoint 
    three()                 // breakpoint 
}

function three(){
    console.log("three")    // breakpoint 
}

one()                       // breakpoint 
```

---