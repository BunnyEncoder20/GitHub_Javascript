# Arrays in JS
---

- Arrays in JS unlike other programming languages is not necessarily Homogeneous in nature. It can contain heterogenous elements. Eg: 
```javascript
let arr1 = [0,1,2,3,4]
let arr2 = ['a','b','c','d','e']
let arr3 = [🍍,🍎,🥝,🍌,🍑]
let mixedArr = [0,1,'a','b',🍌,🍑]
```
- Arrays enables storing multiple elements within a single variable name. Important properties of JS arrays are: 
  - **Arrays in JS arrays are resizable**
  - **JS Arrays are zero-based indexed**
  - **JS array copy operations always makes shallow copies**

> **NOTE:** 
> **Shallow copies** share the same reference point to the original data (thus they are in heap memory). Any changes made to the copied data will be reflected on the original data.
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

1. `push(n)`: pushes 'n' into the array (at the back)
```javascript
arr.push(6)
arr.push(9)
console.log(arr)
```
2. `.pop()`: removes the last element from the array
```javascript
arr.pop()
arr.pop()
console.log(arr)
```
3. `.unshift(n)`: adds an element at the beginning of the array
4. `.shift()`: removes the first element from the array
```javascript
arr.unshift(6)
console.log(arr)
arr.shift()
console.log(arr)
```
5. `.includes`: returns boolean value if the element is there in the array or not 
6. `.indexOf(n)`: returns the index of 'n' if it exists in the array else returns -1
7. `.join(char)`: converts the arrays elements into a string separated by `char` specified.
```javascript
let arr1 = new Array(1,2,3,4,5)
let newArr = arr1.join("-")
console.log(newArr)             // 1-2-3-4-5
console.log(typeof(newArr))     // string
```
8. `.slice(start,end)`: it doesn't change the original array at all (uses a Deep copy). A sub-array from [start,end) are returned.
9. `.splice(start,end)`: it removes the indexes [start,end] from the original array (shallow copy). The sub-array of removed elements are returned.
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
---

## Advance Methods in JS Arrays 

- JS arrays can take any values as elements, even another array. So using .push(arr) is not a good way to merge 2 arrays
```javascript
let marvel = ["BlackWidow","IronMan","Thor","CaptainAmerica","Hulk"]
let dc = ["Batman","Superman","WonderWoman","Flash","GreenLantern","Cyborg","Shazam"]

console.log(marvel.push(dc))    //['blackWidow','IronMan','Thor','CaptainAmerica','Hulk',['Batman','Superman','WonderWoman','Flash','GreenLantern','Cyborg','Shazam'] ]
```
- it makes the entire array into the new index 
- better way is to use `arr1.concat(arr2)`

1. `arr1.concat(arr2)`: concats arr2 with arr1 and returns a new array
```javascript
console.log(marvel.concat(dc))
```
2. **`...spread operator`**: the `...` operator (spread operator) is used to spread the elements of the array or objects and can either add elements if not already present or can also update the properties of keys value pairs (in case of an object) if they already exist. Modern day programmers use this because it is very easy to use and more powerful.
```javascript
const all_heroes = [...marvel, ...dc]
console.log(all_heroes) // ["BlackWidow","IronMan","Thor","CaptainAmerica","Hulk","Batman","Superman","WonderWoman","Flash","GreenLantern","Cyborg","Shazam"]
```
3. `.flat(n)`: used on a multi-dimensional array, it converts 'n' levels of the nested arrays into a single dimensional array.
```javascript
let crazyArr = [1,2,3,[4,5,6],7,[8,[9,10]]]
let usableCrazyArr = crazyArr.flat(Infinity)
console.log(usableCrazyArr)     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
4. `'Array.isArray()'`: returns boolean whether or not the passed element is an array or not.
5. `Array.from()`: converts the passed element into an array object.
```javascript
let str = "bunny"
console.log(Array.isArray(str))     // false
console.log(Array.from(str))        // [ 'b', 'u', 'n', 'n', 'y' ]
```
- an interesting case with `.from()` happens when we are trying to convert an object into an array: 
```javascript
let obj = {name:"bunny"}
console.log(Array.isArray(obj)) // false
console.log(Array.from(obj))    // []
```
- it returns an empty array because it is not being able to convert the object directly. 
- We would need to specify that we want to make a array of object keys or values. (more about this in Object notes)

6. `Array.of()`: returns an new array from passed elements.
```javascript
let e1 = 100
let e2 = 200
let e3 = 300
console.log(Array.of(e1, e2, e3))   // [ 100, 200, 300 ]
```