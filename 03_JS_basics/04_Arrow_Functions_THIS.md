# Arrow Functions and THIS keyword


## `this` Keyword

- **`this`** keyword is used to access the current context. 
- Consider the following code

```javascript

const user = {
    username: "Soma",
    price:99,
    welcomeMessage: function(){
        console.log(`Welcome to website, ${this.username}`)     
    }
}
```
- **NOTE:** the `this.username` refers the username of the current context, which in this case would be the specific instance of the object. 
- This allows for us to change the context and the function will work correctly. Eg:

```javascript
const user = {
    username: "Soma",
    price:99,
    welcomeMessage: function(){
        console.log(`Welcome to website, ${this.username}`)     
    }
}

user.welcomeMessage()       // Welcome to website, Soma
user.username = "bunny"     
user.welcomeMessage()       // Welcome to website, bunny
``` 
- we can even see the current context (what is this referring to) by printing the `this` keyword : 

```javascript
const user = {
    username: "Soma",
    price:99,
    welcomeMessage: function(){
        console.log(`Welcome to website, ${this.username}`)     
        console.log(this)       // added this line
    }
}

user.welcomeMessage()
user.username = "bunny"
user.welcomeMessage()
```
- Output : 

```javascript
Welcome to website, Soma   
{
  username: 'Soma',
  price: 99,
  welcomeMessage: [Function: welcomeMessage]
}
Welcome to website, bunny
{
  username: 'bunny',
  price: 99,
  welcomeMessage: [Function: welcomeMessage]
}
```

<br>

- **Remember** when we are running `JS` inside the node environment, `this` refers to an **empty object**.

```javascript
console.log(this)   // {}
```
- This is not the case when we execute the same line inside a browser 

```javascript
console.log(this)   // returns Window object
```
- The current global context in a browser is the **Window object**. This Object is the reason why we are able to access so many of the browser events(clicks, hovers, etc).

<br>

- Though we can print `this` or current context of a function, `this` inside a function **cannot access the variables declared** inside the function:

```javascript
function soma() {
    username = "SomaSenpai"
    console.log(this)           // prints the current context
    console.log(this.username)  // undefined
}
```

---

## Arrow Functions

- ES6 brought a new way of declaring functions.
- Arrow functions definition is almost same to normal functions, just remove the `function` keyword and add `=>` (arrow) after the function name.
- Eg:

```javascript
const func1 = function(){   // normal function
    console.log("func1")
}

const func1Arrow = () => {  // arrow function
    console.log("func1 arrow")
}
```
- Basic Arrow function syntax : 

```javascript 
const addNumbers = (num1,num2) => {
    return num1+num2
}
addNumbers(2,3)
```

- **Remember** inside the arrow functions, this has no value (returns an empty object)

```javascript
const arrowFunc = () => {
    console.log(this)       // {}
}
```

<br>

- **NOTE** that arrow functions can also have **`implicit return`** 
- Basically, we can remove the `{}` and the function automatically returns the result.
- Eg:

```javascript 
const addNumbers = (num1,num2) => num1+num2

console.log(addNumbers(2,3))        // 5
```
- In this arrow functions, the result of num1+num2 is automatically returned through implicit return (without the return keyword)
- For implicit return to work, we need to either have no `{}` or use `()` to wrap the function (must use when trying to implicitly return an object)

```javascript 
const funcReturningObject = (val1, val2) => ({a:val1, b:val2})  // must wrap function body with () to implicitly return object 
```
- If we use `{}` then we will have to use return keyword in the function.

```javascript 
const add1 = (a, b) => a+b              // implicit return 
const add2 = (a, b) => (a+b)            // implicit return 
const add3 = (a, b) => {return a + b}   // explicit return

console.log(add1(2,3))      // 5
console.log(add2(2,3))      // 5
console.log(add3(2,3))      // 5
```
- This concept is used a lot in `React.js`
- In `JS` this is used when we are dealing with methods like forEach() : 

```javascript 
myArray = [1,2,3,4,5]

myArray.forEach(function(){})   // method 1 
myArray.forEach(() => {})       // method 2
myArray.forEach(() => ())       // method 3 
myArray.forEach((val1) => val1*2)   // method 4 
```
---