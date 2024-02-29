# Variables in JS 

### Node Shell

- Just a few quick pointers about using the Node shell in the terminal 
- Node.js comes with virtual environment called REPL (aka Node shell). REPL stands for Read-Eval-Print-Loop. It is a quick and easy way to test simple Node.js/JavaScript code. 
- It is similar to python shell

<br>

- To open the REPL (Node shell) :
  - Type `>node` and hit enter.
```
PS C:\Users\gener\Coding\GitHub_Javascript> node
```
- If you need to write multi line JS expression or function then just press Enter whenever you want to write something in the next line as a continuation of your code. 
- The REPL terminal will display three dots (...), it means you can continue on next line. - Write .break (**OR** just close the block and hit enter **OR** press Ctrl + C) to get out of continuity mode. 
```
> function add(x,y){
... return x+y 
... }
undefined
> add(2,3)
5
```
- To exit from the REPL terminal, press `Ctrl + C` twice or write `.exit` and press Enter. 

---

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
- If we do not assign a value to a variable at declaration, then JS will consider that value as `undefined`

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