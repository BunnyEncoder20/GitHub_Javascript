# Nums and Math in JS 
---
## Numbers 
- Generally JS automatically (implicitly) determines the type of the variable (here number) : 
```javascript
let score1 = 69  // typeof score == number
```
- We can guarantee (implicitly) that the type assigned to our variable is number only by using the Class method:
```javascript
let score2 = new Number(69)   // typeof score == number always 
```
- We can even see the difference between the two variables by console logging them
```javascript
console.log(score1) // 69
console.log(score2) // [Number: 69]
```
- `numbers` come with various methods (though they are a lot less than string methods) mentioned below : 

1. `toString()` converts a number to a string
2. `toFixed(n)` rounds off a number to n decimal **places** (digits after the decimal point) and returns a string. Eg:
```javascript
let cost = 100
console.log(cost.toFixed(2))     // 100.00
```
1. `toPrecision(n)` rounds off the number to n **digits** and returns a string. Eg: 
```javascript
let cost = 120.76859
console.log(cost.toPrecision(5));   // 120.77
console.log(cost.toPrecision(3));   // 121
console.log(cost.toPrecision(2));   // 1.2e+2
```
1. `toLocaleString()` converts a number to readable (number system) formats (American or Indian). Eg: 
```javascript
let money = 1000000000
console.log(money.toLocaleString('en-US'))      // 1,000,000,000
console.log(money.toLocaleString('en-IN'))      // 1,00,00,00,000
```
> **NOTE:** The maximum number and minimum number that the JS number type can store can be accessed by using the **number.MAX_VALUE** and **number.MIN_VALUE** properties

---

## The Math library

- It is a built-in JavaScript library
- It comes with many properties some of which are number constants. Eg:
```javascript
console.log(Math.PI)    //3.141592653589793
```
- And with a lot of functions few mentioned below :

| Sno. 	|      Function     	| Output 	|
|:----:	|:-----------------:	|:------:	|
|   1  	|  Math.abs(10-100) 	|   90   	|
|   2  	|  Math.round(4.5)  	|    5   	|
|   3  	|   Math.ceil(4.2)  	|    5   	|
|   4  	|  Math.floor(4.8)  	|    4   	|
|   5  	|   Math.sqrt(25)   	|    5   	|
|   6  	|   Math.pow(2,3)   	|    8   	|
|   7  	| Math.min(2,3,4,5) 	|    2   	|
|   8  	| Math.max(2,3,4,5) 	|    5   	|

---
### Math.random()
- remember that Math.random() generates a random number between 0 and 1 always.
- Usually we want to generate a random number between a certain range.
    - by multiplying the Math.random() by 10, 100, etc, we can shift the decimal to get the number of digits we want.
    - by adding 1 at the end we can avoid the possibility of generating 0 (or the min number)
    - by flooring the generated number, we can get a proper integer value.
```javascript
console.log(Math.floor(Math.random()*10) +1);     // will generate a random number between 1 and 10
```
> **NOTE:** This quick formula to generate a random number in a given min-max range: 
> ```javascript
> const min = 10
> const max = 100
> const randNum = Math.floor(Math.random()*(max-min+1)) + min
>```