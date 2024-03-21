# `.filter()` , `.map()` and `.reduce()` Methods

---

## Filter Method

- similar to the `.forEach()` method, this also takes a callback function
- the callback function will be invoked for each element in the array
- if the callback function returns `true`, the element will be added to the new array

```javascript
const numbers = [1,2,3,4,5,6,7,8,9,10];

let returnValues = numbers.filter( number => number>5 )

console.log(returnValues);   // [ 6, 7, 8, 9, 10 ]
```
- **NOTE** that when we are using arrow function without the `{}` we don't need to use the `return` keyword **because** of the implicit return.
- If we are using the `{}` keyword, we need to use the `return` keyword **because** of the explicit return.

```javascript
let returnValues = numbers.filter((number) => {
    return number>5
})
console.log(returnValues);   // [ 6, 7, 8, 9, 10 ]
```
Otherwise the return array (value) will be empty, even though it looks syntactically similar to the arrow function.

```javascript
let returnValues = numbers.filter((number) => {
    number > 5
})
```
- The same can also be accomplished using a `.forEach()` loop but with a little work around and extra steps.

```javascript
const numbers = [1,2,3,4,5,6,7,8,9,10];
let newNumbers = []

numbers.forEach( (num) => {
    if(num > 5)
        newNumbers.push(num)
})

console.log(newNumbers);    // [ 6, 7, 8, 9, 10 ]
```
- Consider the following data:

```javascript
const books = [
    {
        title:'Book 1',
        genre:'Fiction',
        published: 2010,
        edition: 2004
    },
    {
        title:'Book 2',
        genre:'Non-Fiction',
        published: 1992,
        edition:2008
    },
    {
        title:'Book 3',
        genre:'History',
        published: 1999,
        edition: 2007
    },
    {
        title:'Book 4',
        genre:'Non-Fiction',
        published: 1989,
        edition: 2010
    },
    {
        title:'Book 5',
        genre:'Science',
        published: 2009,
        edition: 2014
    },
    {
        title:'Book 6',
        genre:'Fiction',
        published: 1987,
        edition: 2010
    },
    {
        title:'Book 7',
        genre:'History',
        published: 1986,
        edition: 1996
    },
    {
        title:'Book 8',
        genre:'Science',
        published: 2011,
        edition: 2016
    },
    {
        title:'Book 9',
        genre:'Non-Fiction',
        published: 1981,
        edition: 1989
    },
]
```
- Database responses are often in the same structure. We can use the `.filter()` method to filter the data and show it to users. (String comparison) 

```javascript
// to show only those books which belong to genre History
let userBooks = books.filter((bk) => bk.genre === 'History')
console.log(userBooks)
```
- Output
```
[
  { title: 'Book 3', genre: 'History', published: 1999, edition: 2007 },
  { title: 'Book 7', genre: 'History', published: 1986, edition: 1996 } 
]
```

<br>

- Similarly we can filter by the publication years (numeric comparison)

```javascript
let userBooks = books.filter(book => { return book.published>2000 })
```
- Output 
```
[
  { title: 'Book 1', genre: 'Fiction', published: 2010, edition: 2004 },
  { title: 'Book 5', genre: 'Science', published: 2009, edition: 2014 },
  { title: 'Book 8', genre: 'Science', published: 2011, edition: 2016 }
]
```
- **NOTICE** the use of the return keyword in the latest example as we used the `{}`
- We can also put multiple conditions using the logical operators. 

```javascript
let userBooks = books.filter(book => {
    return book.published >= 1990 && book.genre === 'Science'
} )

console.log(userBooks)
```
- Output 

```
[
  { title: 'Book 5', genre: 'Science', published: 2009, edition: 2014 },
  { title: 'Book 8', genre: 'Science', published: 2011, edition: 2016 }
]
```

<br>

---

## Map Method

- similar to the `.forEach()` method, this also takes a callback function
- the callback function will be invoked for each element in the array

```javascript
const numbers = [1,2,3,4,5,6,7,8,9,10];

let newNumbers = numbers.map( number => number*2 )
console.log(newNumbers);   // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
```

<br>

- We can chain multiple methods (like forEach, filter, map) together. This is called **`Chaining`**
- In chaining, the each element goes to the first function, the result of that function passed onto the next method, and so on.

```javascript
const numbers = [1,2,3,4,5,6,7,8,9,10];

const newNumbers = numbers
                        .map(num => num*10)
                        .map(numx10 => numx10+5)
                        .filter(numPlus5 => numPlus5>50)

console.log(newNumbers)  // [ 55, 65, 75, 85, 95 ]
```
- In the above example, we first multiply each element by 10, then add 5 to that, and then filter out the elements that are greater than 50.

<br>

---

## Reduce Method

- Syntax:

```javascript
const initialValue = 0;

const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
```
- The reduce method takes a callback also but it has a extra argument called the accumulator. Think of it as a variable which is updated the result of the current iteration. Useful for operations which result in a single value (Summation, Product of all elements, etc).
- The accumulator is initialized with the value for initial value for the first iteration. After that it is always updated with the resultant return value of the iteration. 

```javascript
const numbers = [1,2,3,4,5];

const myTotal = numbers.reduce(function (accumulator, currentValue){
    console.log(`Accumulator:${accumulator} Current Value:${currentValue}`)
    return accumulator + currentValue
}, 0)

console.log(`Grand Total ${myTotal}`)
```
- In the above exmaple, we use a normal function to calculate the sum of all the elements in the array.
- The initial value is 0, set by the `,0` in  `numbers.reduce(function(){} ,0)`.
- Output

```
Accumulator:0 Current Value:1
Accumulator:1 Current Value:2
Accumulator:3 Current Value:3
Accumulator:6 Current Value:4
Accumulator:10 Current Value:5
Grand Total 15
```
- We can also use the arrow function as shown below.

```javascript
const numbers = [1,2,3,4,5];

const myTotal = numbers.reduce( (accu, currVal) => accu+currVal, 0)

console.log(myTotal)  // 15
```
- Similarly, the reduce method is useful when we are dealing with items in like a shopping cart : 

```javascript
const shoppingCart = [
    {
        course:'JS course',
        price: 299
    },
    {
        course:'Python course',
        price: 999
    },
    {
        course:'ReactNative course',
        price: 1999
    },
    {
        course:'Data Science course',
        price: 12999
    },
]

let total = shoppingCart.reduce((acc,val)=>{
    return acc + val.price
},0)

console.log(`Grand Total Cost: ${total}`)
```