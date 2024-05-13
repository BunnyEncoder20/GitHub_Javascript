# Arrays in JS
---

## Arrays Basics (Arrays Part1)

- Arrays in `JS` unlike other programming languages is not necessarily Homogeneous in nature. It can contain heterogenous elements (just like in `python`). Eg: 
```javascript
let arr1 = [0,1,2,3,4]
let arr2 = ['a','b','c','d','e']
let arr3 = [🍍,🍎,🥝,🍌,🍑]
let mixedArr = [0,1,'a','b',🍌,🍑]
```
- Arrays enables storing multiple elements within a single variable name. Important properties of JS arrays are: 
  1. **Arrays in `JS`  are resizable**
  2. **`JS` Arrays are zero-based indexed**
  3. **`JS` array copy operations always makes shallow copies**

> **NOTE:** 
> **Shallow copies** share the same reference point to the original data (thus they are in heap memory). Any changes made to the copied data will be reflected on the original data.
> 
> **Deep copies** do not share the same reference point to the original data (thus they are in stack memory). Any changes made to the copied data will NOT affect the original data.

- Arrays can be declared in 2 ways : 
```javascript
let arr = [1,2,3]
let arrObj = new Array(1,2,3)
```
- Using the Class constructor method, we can the various properties of Arrays (like `.length`) and functions associated with arrays 

---

## Array Methods

We declare an array
```javascript
let arr = new Array(1,2,3,4,5)
```

1. `push(n)`: pushes 'n' at the back of the array (It also returns the number added)
```javascript
arr.push(6)       // 6
arr.push(9)       // 9
console.log(arr)  // [ 1, 2, 3, 4, 5, 6, 9 ]
```
2. `.pop()`: removes the last element from the array and returns the popped element
```javascript
arr.pop()         // 9
arr.pop()         // 6
console.log(arr)  // [ 1, 2, 3, 4, 5 ]
```
3. `.unshift(n)`: adds an element at the beginning of the array (it also kinda returns the new length of the array)
4. `.shift()`: removes the first element from the array (and returns the removed element)
```javascript
arr.unshift(0)      // 6
console.log(arr)    // [ 0, 1, 2, 3, 4, 5 ]
arr.shift()         // 0
console.log(arr)    // [ 1, 2, 3, 4, 5 ]
```
5. `.includes`: returns boolean value if the element is there in the array or not 
6. `.indexOf(n)`: returns the index of 'n' if it exists in the array else returns -1
7. `.join(char)`: converts the arrays elements into a string separated by `char` specified.
```javascript
let arr1 = new Array(1,2,3,4,5)
let newArr1 = arr1.join("-")
let newArr2 = arr1.join("->") 
console.log(newArr1)             // 1-2-3-4-5
console.log(typeof(newArr1))     // string
console.log(newArr1)             // 1->2->3->4->5
console.log(typeof(newArr1))     // string
```
8. `.slice(start,end)`: 
    - A `shallow copy` of a portion of the array from **[start,end)** (end is not included) is returned. 
    - It doesn't change the original array at all. 
    - Hence it is used to access parts of an array without modifying it.

9.  `.splice(start, deleteCount, item1, item2, ...)`: 
    - **it removes the `deleteCount` number of elements starting from `start` (shallow copy).** 
    - The sub-array of removed elements are returned.
    - item1,item2,... : are optional elements to be added to the array  in place of the removed elements.
    - If you do not specify any items, `splice()` will only remove elements from the array.
```javascript
let a1 = [0,1,2,3,4,5,6,7,8,9]
console.log("A: ",a1);   // A: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const newA1 = a1.slice(1,3)
console.log(newA1);     // [1,2]
console.log("B: ",a1);  // B: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const newA2 = a1.splice(1,3)    
console.log(newA2);             // [1,2,3]
console.log("C ",a1);           // C: [ 0, 4, 5, 6, 7, 8, 9 ] 
```
<br>

- Some in depth examples of `splice` would include: 
```node
> numbers = [0,1,2,3,4,5,6,7,8,9]
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
> numbers.splice(5,3)
[ 5, 6, 7 ]
> numbers
[
  0, 1, 2, 3, 4, 
  8, 9
]
>
> numbers = [0,1,2,3,4,5,6,7,8,9]
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
> numbers.splice(5,3, 15,16,17)
[ 5, 6, 7 ]
> numbers
[
   0,  1,  2, 3, 4,
  15, 16, 17, 8, 9
]
>
```

---

## Advance Methods in JS Arrays (Arrays Part2)

- JS arrays can take any values as elements, even another array. 
- BUT using `.push(arr)` is not a good way to merge 2 arrays (it'll create a nested array)

```javascript
let marvel = ["BlackWidow","IronMan","Thor","CaptainAmerica","Hulk"]
let dc = ["Batman","Superman","WonderWoman","Flash","GreenLantern","Cyborg","Shazam"]

console.log(marvel.push(dc))    //['blackWidow','IronMan','Thor','CaptainAmerica','Hulk',['Batman','Superman','WonderWoman','Flash','GreenLantern','Cyborg','Shazam'] ]
```
- it makes the entire array into the new index (nests the second array at that index of the first one)
- better way is to use `arr1.concat(arr2)`

<br>

1. `arr1.concat(arr2)`: concats `arr2` with `arr1` and returns a **new array**
```javascript
console.log(marvel.concat(dc))
```
- Output:
```node
[
  'BlackWidow', 'IronMan',       
  'Thor',       'CaptainAmerica',
  'Hulk',       'Batman',        
  'Superman',   'WonderWoman',   
  'Flash',      'GreenLantern',  
  'Cyborg',     'Shazam'
]
```
<br>

2. **`... spread operator`**: 
  - The spread (`...`) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. 
  - In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created. 
  - Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:
  - Modern day programmers use this because it is very easy to use and more powerful.
```javascript
const all_heroes = [...marvel, ...dc]
console.log(all_heroes) // ["BlackWidow","IronMan","Thor","CaptainAmerica","Hulk","Batman","Superman","WonderWoman","Flash","GreenLantern","Cyborg","Shazam"]
```
- We can also use the `...` operator to conditionally add elements to a array:
```javascript
let isSummer = false 
let fruits1 = ['🍎','🍌',...(isSummer?['🍉','🥭']:[])]
console.log(fruits1)    // [ '🍎', '🍌' ]

isSummer = true
let fruits2 = ['🍎','🍌',...(isSummer?['🍉','🥭']:[])]
console.log(fruits2)    // [ '🍎', '🍌', '🍉', '🥭' ]

isSummer = false
let fruits3 = ['🍎','🍌',...(isSummer?['🍉','🥭']:['🥝','🍓'])]
console.log(fruits3)    // [ '🍎', '🍌', '🥝', '🍓' ]
```
- Note this is more useful than just using a ternary operator directly cause 
- if the condition were to be false, nothing will get added into the array.
- a simple ternary operation would have returned an `undefined`  in case of a false condition resulting in the array changing.

<br>

- We can use the same logic of the spread `...` operator to combine 2 objects
```javascript
let obj1 = {
    name1 : "Soma",
    gender1: '👧',
    job1: '💻'
}

let obj2 = {
    name2: "Bunny",
    gender2: '👦',
    job2: '❌'
}

let obj3 = {...obj1,...obj2}
console.log(obj3) 
```
- Output 
```node
{
  name1: 'Soma',
  gender1: '👧',
  job1: '💻',
  name2: 'Bunny',
  gender2: '👦',
  job2: '❌'
}
```

- **Remember** that if the keys of the two objects are the same, the value of the second object will overwrite the value of the first object (Kinda like updating the values of those fields). 
```javascript
let obj1 = {
    name : "Soma",
    gender: '👧',
    job: '💻',
    location: 'Mumbai'
}

let obj2 = {
    name: "Bunny",
    gender: '👦',
    job: '❌'
}

let obj3 = {...obj1,...obj2}
console.log(obj3)             // { name: 'Bunny', gender: '👦', job: '❌', location: 'Mumbai' }
```
- Similar to the conditional adding of elements in array, we can do the same in objects also (without getting an additional undefined field if the condition is not met)
```javascript
let hasCrush = true
let somaObj = {
    name:"Soma",
    gender:"👩",
    job:'💻',
    ...(hasCrush? {crush:"Bunny"} : {})
}
console.log(somaObj)    // { name: 'Soma', gender: '👩', job: '💻', crush: 'Bunny' }
```

<br>

2. `.flat(n)`: used on a multi-dimensional array, it converts 'n' levels of the nested arrays into a single dimensional array.
```javascript
let crazyArr = [1,2,3,[4,5,6],7,[8,[9,10]]]
let usableCrazyArr = crazyArr.flat(Infinity)
console.log(usableCrazyArr)     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
<br>

3. `'Array.isArray()'`: returns boolean whether or not the passed element is an array or not.
4. `Array.from(itr, mapFn)`: 
    - converts the passed iterable (or array-like object) into an array.
    - `itr` is the iterable or array-like object
    - `mapFn` is the function that will be applied to each element of the array and the corresponding new value generated will be stored in the new array being created
```javascript
let str = "bunny"
console.log(Array.isArray(str))     // false
console.log(Array.from(str))        // [ 'b', 'u', 'n', 'n', 'y' ]
```
```javascript
let numbers = [1,2,3]
let numbersSquared = Array.from(numbers, x => x*x)
console.table([numbers,numbersSquared])
```
- Output
```node
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│ 0       │ 1 │ 2 │ 3 │
│ 1       │ 1 │ 4 │ 9 │
└─────────┴───┴───┴───┘
```
- an interesting case with `.from()` happens when we are trying to convert an object into an array: 
```javascript
let obj = {name:"bunny",bff:"Soma",likes:'Chk Shawarma'}
console.log(Array.isArray(obj))             // false
console.log(Array.from(obj))                // []

console.log(Array.from(Object.keys(obj)))   // [ 'name', 'bff', 'likes' ]
console.log(Array.from(Object.values(obj))) // [ 'bunny', 'Soma', 'Chk Shawarma' ]
```
- it returns an empty array because it is not being able to convert the object directly. 
- We would need to specify that we want to make a array of object keys or values. (more about this in Object notes)

<br>

5. `Array.of()`: 
    - method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments. 
  
```javascript
let e1 = 100
let e2 = true
let e3 = 'Soma'
console.log(Array.of(e1, e2, e3))   // [ 100, true, 'Soma' ]
```

---

## Shallow Copy and Deep Copy

- **Shallow Copy:** When we copy a DS (object, array) with a shallow copy, it creates a copy of all the values of that object. However if the DS contains **reference to another object (example a array as in nested arrays or objects as in objects within the array) then only the reference to those objects are copied.** Thus if we make any changes to the basic elements (normal values) those changes will not be reflected in the original DS. However if we make changes to the copy's referenced objects (like a nested array or object), then the changes will be reflected back onto the original DS.

- **Deep Copy:** created a copy of the original DS. All the **values and referenced objects values** are copied, thus creating a complete copy of the original DS (if the referenced object contains more referenced objects, it also makes a copy of those recursively). Thus any changes we make to a deep copy will not be reflected in the original DS. 

<br>

- A simple way to make deep copies of a DS is as follows: 
```javascript
let nestedArray = [[1,2,3],[4,5,6],7,8,9]
let shallowCopy = [...nestedArray]
let deepCopy = JSON.parse(JSON.stringify(nestedArray))
let deepCopy = JSON.parse(JSON.stringify(nestedArray))
```
- The 'deepCopy' is made by first converting the original 'nestedArray' into a JSON formatted string (using JSON.stringify()), and then again converting it back into a JS object/array (using JSON.parse()).
>- **JSON.parse(string)** converts the passed string into a array
>- **JSON.stringify(array)** converts the passed JS object/array into a JSON formatted string representation of the object.