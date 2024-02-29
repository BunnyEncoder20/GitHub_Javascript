# Objects in JS 

> They say that if you want to master JS then master 2 things : Objects and Events.
---

## Objects Basics (Part 1)

### 1. Object Declaration

- There are 2 ways to declare objects
  1. **Object Literal** (does not create a singleton object)
  2. **Object Constructor** (creates a singleton object)

- Objects have `fields` and `value` pairs.
- **Note** that `fields` are processed as strings always internally. `values` can be of any type
- Eg: Defining object using Literals 
```javascript
let obj1 = {
    name:"Soma",
    age:22,
    location:"Thane",
    email:"soma.senpai@email.com",
    isLoggedIn:true,
    friendList:['Bunny','Bunnu','Hooda','Priya'],
    address:{
        street:"Wagle Industrial Estate",
        city:"West Thane",
        state:"Maharashtra",
        country: "India"
    }
    greetings: function(){
        console.log("Hello\n Namastai\nKonichiWass good homie")
    }
}
```
- Notice that we can give any data in the values (even arrays, objects, functions etc)

--- 
### 2. Object Accessing

- There are again 2 ways to access the field:value pairs of an object :
    1. using the `.` operator
    2. using the `[]`
- Knowing both is important because, under normal circumstances, fields are processed as strings. So even when we give name like :
```javascript
let obj = {name:"soma"}
console.log(obj.name)       // 'soma'
```
- internally it is stored as 'name'
- When the fields are given in the above format, we can access them using both the methods (though we would need to pass them as strings when using the `[]`)
```javascript
let obj = {name:"soma"}
console.log(obj.name)       // 'soma'
console.log(obj['name'])    // 'soma'
```
- **BUT** if we give the fields in the following format (Field name has a space in better or multiple words long) : 
```
let obj = {"Full name":"soma", age:22}
console.log(obj['Full name'])           // 'soma'
console.log(obj['age'])                 // 22
console.log(obj."Full name")            // Error
```
- **then** we will get an Error cause there is no other way of accessing these fields other than using the `['field name']` way.

<br>

- Many times you will use Symbol as object ids, because they are always unique and hence used as they will never have a clash with another object.
- We must know how to add unique Symbols as object field for it's unique Symbol key.
- but again you can access these symbols ONLY by using the `[]` method:
```javascript
const objSym = Symbol('objSym')    // text within the Symbol() are used only to identity the Symbol, serves no other purpose
let obj_key = Symbol()
let obj = {[obj_key]:12345, name:"soma", age:22}
console.log(obj[obj_key])                       // 12345
console.log(obj.obj_key)                        // undefined
```

---

### 3. Updating / Changing Objects 

- Simply access the object field:value pairs and change them using the `=` operator.
- We can even add new fields:value pairs to the object is way (if the key doesn't exist, Js will make a new one in the object)
```javascript
let obj = {name:"Soma",likes:['🍎','🍌','🥝']}
console.log(obj)        // { name: 'Soma', likes: [ '🍎', '🍌', '🥝' ] }

obj.likes = "🐰"
console.log(obj)        // { name: 'Soma', likes: '🐰' }

obj.job = '💻'
console.log(obj)        // { name: 'Soma', likes: '🐰', job: '💻' }
```
- `Object.freeze(objName)`: 
  - The Object.freeze() static method freezes an object. 
  - Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
  - returns the same object we passed to it 
  - It doesn't throw an error when we try to add new properties to it

```javascript
let obj = {name:"Soma",likes:['🍎','🍌','🥝']}
console.log(obj)

obj.likes = "🐰"
console.log(obj)                // updated existing field 

obj.job = '💻'
console.log(obj)                // created new field

Object.freeze(obj)              // froze the object here

obj.favActivity = 'Making out'  // 😏
console.log(obj)                // the changes are not applied 
```
<br>

- We can also add functions as fields in objects : 

```javascript
let obj = {
    name:"Soma",
    age:22,
    greeting: function(){
        console.log("Hello World")
    }
}

console.log(obj.greeting)       // [Function: greeting]
obj.greeting()                  // Hello World
```
- The first log returns ref to the obj function 
- The line after that actually executes the function `greeting()`.
- We can also add functions to a pre-declared object like such: 
  
```javascript

obj.greeting2 = function(){
    console.log(`Hello Obj ${this.name}`)
}
obj.greeting2()             // Hello Obj Soma
```
- **NOTE** how we use the keyword `this` to reference the the properties of that object instance.

--- 

## Objects Advanced (Objects Part 2)