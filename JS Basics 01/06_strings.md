# Modern Way of Writing Strings in JS

- Now days, programmers don't code the strings like : 
```javascript
let name="soma"
let score=50
let value=8.5
console.log(name+score+value)
```
- Now days, programmers use **`string interpolation`**: 
```javascript
console.log(`My name is ${name} and my score is ${score} and salary is ${value}`)
```
> **NOTE:** the quotes used are backticks 

- Another way of declaring `strings` is be using the object method (do note that the previous one also uses the same things behind the scenes)
```javascript
const senpai = new String("Soma")
```
- this returns an `object` with indexes as the keys and values as the letters of the string. It also returns properties and various prototype methods associated with strings.
- These can be accessed like any other object properties or methods:
```javascript
console.log(senpai.length)  // property of the string
```
```javascript
console.log(senpai.toUpperCase())
```
> **Remember** this functions do not change the original value of the string _(primitive = call by value = stack memory)_.

- String methods create new strings based on the content of the current string — for example:
    - A substring of the original using `substring()`.
    - A concatenation of two strings using the concatenation operator (`+`) or `concat()`.


<br>

- Some other useful methods : 
```javascript
str = "soma"
console.log(str[2])              // m
console.log(str.charAt(2))       // m
console.log(str.indexOf('m'))    // 2
console.log(str.substring(0,3))  // som - note how the last index of the substring method is exclusive

str = "somasenpailovesbunny"
console.log(str.slice(-8,15))    // ves
```
>- **Note:** as you already know negative index means counting from the end of the string.
>- **Note:** that you can use negative indices only with slice and not substring (it'll not throw error but will not give the desired result)

- `Trim` is also a useful and interesting method: 
```javascript
let username = "    soma    "
console.log(username.trim()) //soma
```
- There are some variants of it like `trimStart()` and `trimEnd()` , but `trim()` is most primarily used.

- `replace("replace this","with this")` is another useful and interesting method, used a lot in url and API : 
```javascript
const url = "https://bunny.com/soma%20senpai"
console.log(url.replace("%20","_")) //https://bunny.com/soma_senpai
```
- `include("subString")` returns if the string contains the given substring: 
```javascript
console.log(url.includes("%20"))    //true
```

- `split(separator)` is method which can split the string based on the separator character
```javascript
const url = "soma senpai loves bunny"
console.log(url.split(" "))     // [ 'soma', 'senpai', 'loves', 'bunny' ]
```
