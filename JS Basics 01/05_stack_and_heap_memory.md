# Stack and Heap Memory

- All the `primitive` types use **Stack memory** 
  - Hence whenever _stack memory_ is used, we get a **copy** of the original data and all changes are made in that
  - Original data will remain unchanged.
- All `non-primitive` types use **Heap memory**
  - We get the **reference** of the original data from Heap memory when we try to make a copy of the data. 
  - Hence all changes made are reflected in the original data also (because the original memory location data was changed)

This can be seen clearly in the example below:
```javascript
let user1 = "soma"
let user2 = user1
user2 = "bunny"         // changes made only in the copied data

console.log(user1)      // soma
console.log(user2)      // bunny


let obj1 = {
    name:"Soma",
    email:"soma@gmail.com"
}
let obj2 = obj1 
obj2.email = "bunny@gmail.com"      // changes made only in the copied object

console.log(obj1.email) // bunny@gmail.com
console.log(obj2.email) // bunny@gmail.com
```
