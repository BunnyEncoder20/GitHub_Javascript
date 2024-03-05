# Loops or Iterators in `JS`

---

## 1. For loop

- Basic syntax

```javascript
for (let i=0; i<=10; i++){
    console.log(i)
}
```
- Example:

```javascript
let arr = ["batman","sukuna","madara","sasuke"]

for (let i=0; i<arr.length; i++){
    console.log(arr[i])
}
```

---

## 2. Break & Continue

- The `break` statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement.
- Example:

```javascript
let friends = ['bunnu','hoods','harsh','soma','Tarun']

for (let i=0; i<friends.length; i++){
    console.log(friends[i])

    if (friends[i] == 'soma') {
        console.log('Best Friend Found 🥳')   
        break;
    }
}
```

<br>

- The `continue` statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
- Example

```javascript
let fruits = ['🍍','🥝','🍎','🍏','🍌','🍉','🍈','🍓','🥭']

for (let i=0; i<fruits.length; i++){
    if (fruits[i] == '🥝' || fruits[i]=='🍈') 
        continue;

    console.log('I can have some ' + fruits[i])
}
```

---

## 3.  While Loops

- The `while` statement creates a loop that executes a specified statement as long as the test condition evaluates to true. 
- The condition is evaluated **before** executing the statement. 
- Synatx 

```javascript
while(condition){
    // statements
    // increment/decrement counter
}
```

- Example:

```javascript
let i = 0;

while (i <= 10){
    console.log(i);
    i+=2            // don't forget to increment/decrement counter
}
```

---

## 4. Do While Loop

- The `do while` loop is similar to the `while` loop, except that the condition is tested after executing the statement.
  
- Syntax:

```javascript
do {
    // statements
    // increment / decrement counter
} while (condition);
```

- Example

```javascript
let i = 1;

do {
    console.log(i);
} while(i<=10);
```

- **Note** that cause condition is checked at the end of the loop, the `do...while` loop runs at least once even if the condition is false from the beginning.

```javascript
let shouldPrint = false

do {
    console.log("ok printing")
} while(shouldPrint)
```

---

## 5. Higher Order Array Loops

### `for...of` loop

- The `for...of` statement executes a loop that operates on a sequence of values sourced from an iterable object.

- Syntax

```javascript
for (variable of iterable){
    statement    
}
```
- **Do NOTE** that the term 'object' refers to all the data types which are of object type (in JS, arrays, functions and objects, etc are of object type). 
- Hence this loop is not only for JS objects, but also for arrays and more.

- Example

```javascript
const friends = ['bunnu 🍜', 'soma 👧', 'hoods 🏋️‍♂️']

for(let friend of friends){
    console.log(friend)
}

const characters = "Hello World"
for (let char of characters){
    if (char == ' ') continue;
    console.log(char)
}
```

---

### Maps

- The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. 
- No duplicate values are allowed, only Uniques key:values pairs (unlike objects).
- Syntax

```javascript
const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
map.set('IN','India')

console.log(map)
```
- Output
```javascript
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
}
```
- **Note** that even though we set('IN','India') twice, it didn't make a duplicate entry in the Map.

- We can use the `for...of` loop for the Map object as follows:

```javascript
for (let item of map){
    console.log(item)       // prints each key:value pair as a array
}
```
- A better way to this would to be directly **destructure** the array : 

```javascript
for (let [key, value] of map){
    console.log(`${key} : ${value}`)
}
```
- Maps are helpful because they were iterables, unlike Objects which are not iterable by default

```javascript
let myObj = {
    'game1':'NFS',
    'game2':'PUBG',
    'game3':'CS:GO',
}

for (let [gameID, gameName] of myObj){        // Error : myObj is not iterable
    console.log(`${gameID} : ${gameName}`)
}
```
- **Do keep in mind** though there are other ways to iterate over Objects key:value pairs.
- For `object` types we use the `for...in` loop

---

### `for...in`

- The `for...in` statement iterates over all enumerable string properties of an **object** (ignoring properties keyed by symbols), including inherited enumerable properties.
- Syntax

```javascript
for (variable in object)
  statement
```

- Consider the Following code  example

```javascript
const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    py: 'Python',
    java: 'Java',
    swift: 'Swift by Apple'
}

for (let key in myObject){
    console.log(`${key} : ${myObject[key]}`)
}
```
- Output 

```
js : Javascript
cpp : C++
py : Python
java : Java
swift : Swift by Apple
```
- **NOTE** that `for...in` thought preferred for iterating over objects can also be used over arrays : 

```javascript
let programming = ['js','cpp','py','java','swift']

for (let key in programming){
    console.log(programming[key])            // prints index
}
```
- **Remember** that arrays also have keys (called the index) but they are of number type starting from 0 and unchangeable.
- Hence the `key` the `for...in` loop refers is the index of the elements and hence we need to print the values by using the array[key] method. 
- This working is in contrast to the `for...of` loop which directly prints the values.

<br>

- **NOTE** Even though we can use the `for...in` loop, `for...of` to iterate over both objects and maps, generally it is recommended to use 
  - `for...in` for objects
  - `for...of` for maps
- This is because the `for...of` loop works by using the iterable protocol which is present (compatible) in Maps.
- Objects do not have the iterable protocol and hence we use the `for...in` loop for them as that loop works on the enumerable properties of objects.

<br>

- Consider the following examples:

```javascript
let map = new Map()

map.set('f1','soma')
map.set('f2','bunnu')
map.set('f3','hoods')

for (let friend in map){
    console.log(friend)     // doesn't print shit
}
```
```javascript
let myObj = {
    name : 'soma',
    age : 22,
    post: 'Junior Node Dev'
}

for (let key of myObj){     // Error myObj is not iterable
    console.log(key)
}
```


---

### `forEach` loop  (Mostly used and recommended)

- The `forEach()` method of Array instances executes a provided function once for each array element.
- It is a method built into the Array prototype hence we can access it whenever we are dealing with any array directly : 
- Syntax 

```javascript
forEach(callbackFn)
forEach(callbackFn, thisArg)
```
- callBackFn is a function which is called for each element in the array.
- It can be easily defined like any normal anonymous function (function without a name)

```javascript
let arr = []

arr.forEach( function(){} )     // normal callback function
arr.forEach( ()=>{} )           // arrow callback function
```
- Example

```javascript
let friends = ['bunnu 🍜', 'soma 👧', 'hoods 🏋️‍♂️']

friends.forEach( function (friend) {
    console.log(friend)
} )
```
```javascript
let friends = ['bunnu 🍜', 'soma 👧', 'hoods 🏋️‍♂️']

friends.forEach( (friend)=>{
    console.log(friend)
} )
```
- We can even define a callback function somewhere and pass the the **function's reference** as the parameter for callback in the `.forEach()` method

```javascript
let friends = ['bunnu 🍜', 'soma 👧', 'hoods 🏋️‍♂️']

function printAnything(item){
    console.log(item)
}

friends.forEach( printAnything )
```

- Output (for all 3 cases above)
```
bunnu 🍜
soma 👧
hoods 🏋️‍♂️
```

- **Note** that forEach doesn't just return the currentElement it got. It can all return the currentIndex and the entire arr it is running on:

```javascript
friends.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
```
- Output
```
bunnu 🍜 0 [ 'bunnu 🍜', 'soma 👧', 'hoods 🏋️‍♂️'  ]
soma 👧 1 [ 'bunnu 🍜', 'soma 👧', 'hoods 🏋️‍♂️'  ]
hoods 🏋️‍♂️  2 [ 'bunnu 🍜', 'soma 👧', 'hoods 🏋️‍♂️'  ]
```
- `.forEach` method has a lot of use when we dealing with data which is sent back as responses from databases or API calls. 
- They usually come in the form of Array of objects. 
- We can access these objects easily using the `.forEach()`

```javascript
let data = [
    {
        lang : 'Javascript',
        file : 'js'
    },
    {
        lang : 'C++',
        file : 'cpp'
    },
    {
        lang : 'Java',
        file : 'java'
    }
]

data.forEach((langs)=>{
    console.log(`${langs.lang}.${langs.file}`)
})
```