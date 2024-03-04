# Scopes in `JS`

- We are already aware about the 3 ways we can declare a variable in `JS`:

```javascript
let a = 1;
const b = 2;
var c = 3;

console.table([a, b, c]); // 1, 2, 3
```
- In earlier times, only `var` keyword was used to declare a variable. 
- `let` and `const` were introduced because `var` did not create block scoped variables 
- `var` created global scoped variables and that was not good practice

<br>

- Scope in `JS` (and in many other programming languages) is defined by `{}` braces.
- Mostly we want that the variables declared inside these scopes should not be accessible outside of it. 
- But as stated `var` didn't work that way 

```javascript
if (true) {
    let a = 1;
    const b = 2;
    var c = 3;
}
console.log(a)  // Error
console.log(b)  // Error
console.log(c)  // 3
```
- This will cause issues when multiple people are developing or when we are importing the function/if-else from another file.
- Because the `var` variables of the blocks will overwrite the ones declared globally, outside the block:

```javascript
var c = 300;

if (true){
    var c = 3
}

console.log(c)  // unexpected : 3 instead of 300
```
- This same problem is also there when we declare variables without any keyword 
- Hence it is a states as not a good practice 

```javascript
var c = 300;

if (true){
    c = 3
}

console.log(c)  // unexpected : 3 instead of 300
```
- Such behavior can be avoided if we use blocked scoped variables which can be declared using `let`.
- Hence it is used the most now 

```javascript
let a = 100;
var c = 300;

if (true){
    let a = 1
    var c = 3
    console.log(`Inside block a:${a}`)  // 1
    console.log(`Inside block c:${c}`)  // 3
}

console.log(`Outside block a:${a}`)     // 100 expected 
console.log(`Outside block c:${c}`)     // 3 unexpected
```
>- **NOTE:** the scope of the variables can be different when we are talking about `JS` within the browser and within in a `Node.JS` environment.