# DataType Conversion Confusion
---

### Converting to `numbers` 

```javascript
let score = 33
console.log(typeof score)   // number
console.log(typeof(score))  // number

score = "33"
console.log(typeof(score))  // string
```
**NOTE:** the types of the variables are given in small letters and when we call the function to convert the types, the function names start with Caps
```javascript
let valueInNumber = Number(score)   
console.log(typeof(valueInNumber)) // number
```

**NOTE:** be careful when converting non-pure number strings into numbers. The conversion will place, but the value will become a something else. 
***Examples:*** 
```javascript
let score = "33abc"
console.log(typeof(score))          // string

let valueInNumber = Number(score)
console.log(typeof(valueInNumber)) // number
console.log(valueInNumber)         // NaN
```
```javascript
let score = null
console.log(typeof(score))          // object

scoreInNumber = Number(score)
console.log(typeof(scoreInNumber))  // number
console.log(scoreInNumber)          // 0
```
```javascript
let score = undefined
console.log(typeof(score))          // undefined

scoreInNumber = Number(score)
console.log(typeof(scoreInNumber))  // number
console.log(scoreInNumber)          // NaN
```
***ThereFore in Summary:***
| Sir No. |   Input   | Before Converting Type | After Converting Type | After Converting Value |
|:-------:|:---------:|:----------------------:|:---------------------:|:----------------------:|
|    1    |    "33"   |         string         |         number        |           33           |
|    2    |  "33abc"  |         string         |         number        |           NaN          |
|    3    |   "Soma"  |         string         |         number        |           NaN          |
|    4    |    null   |         object         |         number        |            0           |
|    5    | undefined |        undefined       |         number        |           NaN          |

_Similarly_ we can convert an type into any other type just by simply (remember first letter of converting type function is always caps) : 
```javascript
let convertedVariable = Type2convert2(variableName)
```
---
### Converting Shiz to `boolean`
***Examples:***
```javascript
let bool = 1
console.log(typeof(bool))          // number

let convertedBool = Boolean(bool)
console.log(typeof(convertedBool)) // boolean
console.log(convertedBool)         // true
```
_The conversions are summarized in the below table :_
| Sir No. |   Input   | Before Converting Type | After Converting Type | After Converting Value |
|:-------:|:---------:|:----------------------:|:---------------------:|:----------------------:|
|    1    |     1     |         number         |        boolean        |          true          |
|    2    |     0     |         number         |        boolean        |          false         |
|    3    |   "Soma"  |         string         |        boolean        |          true          |
|    4    | undefined |        undefined       |        boolean        |          false         |
|    5    |    null   |         object         |        boolean        |          false         |

---
### Converting Shiz to `string`

```javascript
let position = 69
console.log(typeof(position))       // number

let position2string = String(position)
console.log(typeof(position2string)) // string
console.log(position2string)         // 69
```
---

These conversions are helpful in JS cause many times the API responses come in string format (arrays, objects, many more) and we have to convert them to other types all the time.