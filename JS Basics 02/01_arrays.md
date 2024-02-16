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
