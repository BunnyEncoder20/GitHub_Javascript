# Variables in JS 

- Lets us declare some variables below : 
```javascript
const accountId = 144553
let accountEmail = "varun.verma@email.com"
var accountPassword = "soamsenpai2020"
accountCity = "Chennai"
```
- Now, when we try to change the value of a const variable we will get an `error`:
```javascript
accountId = 69
           ^
TypeError: Assignment to constant variable.
```

- We can change the value of the other variables : 
```javascript
accountEmail = "somasenpai@email.com"
accountPassword = "bunny2020"
accountCity = "Mumbai"
```
- We can print all the values in a tabular format by using `console.table([Array])`
```javascript
console.table([accountId,accountEmail,accountPassword,accountCity])
```
```
┌─────────┬────────────────────────┐
│ (index) │ Values                 │
├─────────┼────────────────────────┤
│ 0       │ 144553                 │
│ 1       │ 'somasenpai@email.com' │
│ 2       │ 'bunny2020'            │
│ 3       │ 'Mumbai'               │
└─────────┴────────────────────────┘
```

**NOTE:** 
- We declare constants in JS using the `const` keyword
- To declare a variable there are 2 ways : `var` and `let`,but we don't use var anymore
- This was because initially JS did not work on the basis of scope. All variables declared (using `var`) had global scope, which was a disaster. Due to these issues in block scope and functional scope, `var` has now been replaced by `let`.
- Do remember that we can declare variables names without `let` because JS is a clean language, it is not recommended.
- If we do not assign a value to a variable at declaration, then JS will consider that value as undefined

```javascript
let accountState ;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
```
```
┌─────────┬────────────────────────┐
│ (index) │ Values                 │
├─────────┼────────────────────────┤
│ 0       │ 144553                 │
│ 1       │ 'somasenpai@email.com' │
│ 2       │ 'bunny2020'            │
│ 3       │ 'Mumbai'               │
│ 4       │ undefined              │
└─────────┴────────────────────────┘
```