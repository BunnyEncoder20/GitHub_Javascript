# Code Flow Control in `JS`

## 1. `if...else` statements 

- The `if...else` statement executes a statement if a specified condition is **truthy**. If the condition is **falsy**, another statement in the optional else clause will be executed.
- **Syntax**

```javascript
const bff = true;

if (bff) 
    console.log("soma is bff 😃")
else 
    console.log("no bff 😞")
```
- Comparisons operators/operations are : 
  - `<`,`>` : less than, greater than
  - `<=`, `>=` : less than or equal to, greater than or equal to
  - `==` : equal to
  - `!=` : not equal to
  - `===` : strictly equal to (checks the type of the variable also along with the value)
  - `!==` : strictly not equal to

- Multiple conditions can be checked at once using logical operators : 
  - `&&` : logical AND 
  - `||` : logical OR
  - `!` : logical NOT
```javascript
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("User can buy products")
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User is logged in")
}
```
- `if...else` statements is used for conditional rendering in `React.js`

<br>

- Multiple if...else statements can be nested to create an else if clause. Note that there is no elseif (in one word) keyword in JavaScript (like the ones in python).

```javascript
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
// …
else
  statementN
```
- **NOTE:** when we need to execute only a single statement inside a `if...else block`, we don't need to put `{}` around it.
- Only when we need to have multiple statements inside the conditional block we need to put `{}` around it.
- But is is good practice to always put the `{}` to avoid confusion 

<br>

- Because `if...else` is also a block, the variables declared inside have **block scope**
- Hence they will follow the rules of scope and will not be accessible outside the block. (as they will be deleted once teh block ends)

```javascript
let score = 200

if (score>100){
    let power = "fly"
    console.log(`User power : ${power}`) // User power : fly
}

console.log(`User power : ${power}`)    // Error : power is not defined
```

---

## `Switch` cases 

- When we have a variable which can have multiple values and we need to execute a statement based on that value, we can use `switch` statement
- **Syntax**

```javascript
switch (key) {
  case caseExpression1:
    statements
    break;
  case caseExpression2:
    statements
    break;
  // …
  case caseExpressionN:
    statements
    break;
  default:
    statements
}
```
- `key` is the variable which will be checked
- `case` is a keyword
- `caseExpression` is the value which the key should be for that case block to execute 
- `default` is used to execute when no case is matched
- `break` keyword is used to exit the switch blocks checking once a case is matched.
- If break is not written, all the cases after the matched cases will be executed (expect the default).
- **Eg:**

```javascript
let mood = "happy"

switch (mood) {
    case "happy":
        console.log("Soma happy 😄")
        console.log("you safe ✔️")
        break;

    case "sad" : 
        console.log("Soma sad 😢")
        console.log("make tasty food for her 🍜")
        break;

    case "angry":
        console.log("Soma angry 😠")
        console.log("you not safe ❌")
        break;
}
```
---

## Truthy and Falsy values

| **Value** 	|                                                                   **Examples**                                                                  	|
|:---------	|:-----------------------------------------------------------------------------------------------------------------------------------------------	|
| **Falsy**     	| 1. false<br>2. 0<br>3. -0<br>4. 0n (bigInt zero)<br>5. "" , '' , `` (empty Strings) <br>6. null<br>7. undefined<br>8. NaN                       	|
| **Truthy**    	| 1. Everything else <br>2. Strings with one or more character<br>3. [] (empty array)<br>4. {} (empty object)<br>5. function(){} (empty function) 	|

- **NOTE** that values like 'false',"0", " " (string with just a space)
- **NOTE** the following values are truthy:
  - `false == 0` returns true
  - `false == ""` returns true
  - `0 == ""` returns true

<br>

- To check something like a array being empty, we call it's length property : 
  
```javascript
let arr = []
if (arr.length === 0) {
    console.log("array is empty")
}
```
- When we want to check if any object is empty or not : 

```javascript
let obj = {}
if (Object.keys(obj).length === 0) {
    console.log("object is empty")
}
```

---

## Nullish Coalescing Operator `??` (null , undefined)

- This is useful when we are working with API calls or trying to get responses from some backend.
- Sometimes the responses can be `null` or `undefined`. In such cases this operator helps us to handle them by assign them to our variables.
- **Eg:**
```javascript
let response1 = null
let response2 = undefined
let response3 = {data:"something"}

let data1 = response1 ?? "No data"
let data2 = response2 ?? "No data"
let data3 = response3 ?? "No data"

console.log(data1)      // No data
console.log(data2)      // No data
console.log(data3)      // {data: "something"}
```
- generally after the `??` operator we put a function which will perform certain task with the value if it is not `null` or `undefined`.
- It can also be chained (but not used as much)

```javascript
let data1 = response1 ?? response2 ?? "No data"
```

---

## Ternary Operator

- **Syntax**
```javascript
const var = condition ? trueValue : falseValue
```
- Example
```javascript
const friend = "soma"
const designation = friend==="soma" ? "😃" : "😑"
console.log(designation)        // 😃

const price = 200
const comment = price<=100 ? "cheap" : "expensive"  
console.log(comment)            // "expensive"
```
- **NOTE** not to confuse the `?` with the `??` operator. They are worlds apart.