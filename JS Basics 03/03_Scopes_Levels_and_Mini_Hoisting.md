# Scope Levels and Mini Hoisting in `JS`


## Scopes levels

Consider the following code : 

```javascript
function one(){
    let username = "soma"

    function two() {
        const website = "youtube.com"
        console.log("Two: ",username)       // soma
        console.log("Two: ",website)        // youtube.com
    }

    two()
    console.log("One: ",username)           // soma
    console.log("One: ",website)            // Error : website undefined
}
one()
```
- **Closure** topic is related to this concept of parent block's variables be accessible to the child block , but the child block's variables are not accessible to the parent block.
- Same things happens in other form of block scopes such as `loops` and `if-else`

```javascript
if(true){
    let username = "soma"

    if (username==="soma"){
        let website = " youtube.com"
        console.log(username+website)   // soma youtube.com
    }
    console.log(website)                // Error : undefined
}
console.log(username)                   // Error : undefined
```

---

## Hoisting functions 

- functions can be written as normal functions and also as a **function expressions** in `JS`

```javascript

function addOne(num){               // normal function declaration
    return num+1
}

const addTwo = function (num){      // function expression    
    return num+2
}

console.log(addOne(1))              // 2
console.log(addTwo(2))              // 4
```
- **Remember** that in `JS` while normal function definitions are Hoisted (taken to the top so that they can be accessed anytime in the script), functions expressions are not hoisted. 
- Hence we cannot call the function expression from anywhere in the code, it needs to be declared before it is called, which is not the case with normal function declarations.

```javascript
console.log(addOne(1))      // 2
console.log(addTwo(2))      // Error : undefined function addTwo()

function addOne(num){
    return num+1
}

const addTwo = function (num){
    return num+2
}
```
---