# Comparisons in JS

- Generic comparison is JS return a boolean value : 
```javascript
console.log(2>1)
console.log(2<1)
console.log(2<=1)
console.log(2>=1)
console.log(2==1)
console.log(2!=1)
```
- Similar for strings also.
- But when we compare 2 different types m that's when confusion happens: 

```javascript
console.log("2">1)       // true
console.log("02"<1)      // false

console.log(null>0)      // false
console.log(null==0)     // false
console.log(null>=0)     // true
```
- These comparisons results can be inconsistent is JS 
- Hence TypeScript has become so popular because it doesn't allow cross datatype operations. 
- The reason for the weird behavior of null comparison is that JS tries to convert null into number (0) and tries to compare (though that doesn't still explain the behavior of null==0 being false)
- **NOTE:** the working of equality (== or ===) is different from the working of comparison operators (<,>,<=,>=). This also the reason for the weird behavior seen above. 
- Strict equality comparison will check the datatype of the values also along with the value. 

```javascript
console.log("2" == 2)   // true
console.log("2" === 2)  // false
```