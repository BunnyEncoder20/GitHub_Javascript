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

### 1. Object Declaration using Constructor

- We can declare singleton object using constructor method as follows:
```node
let obj = new Object()  // returns {} 
```
- This obj is not different from our `Literal` declaration of obj. The only Difference is that this is a **singleton object** while the one made with `literals` is not.
- We can add new field:value pairs just like before:
```javascript
let user = new Object()
let objKey =  Symbol()

user[objKey] = "🔑"
user.name = "Soma"
user.isLoggedIn = true

console.log(user)       // { name: 'Soma', isLoggedIn: true, [Symbol()]: '🔑' }
```
- We can created nested objects.
```javascript
let user = new Object()
let objKey =  Symbol()

user = {
    [objKey]:'🗝️',
    name:{
        username:{
            username:"soma_senpai0106",
            email:"soma.senpai@email.com",
            fullname:{
                firstname:"soma",
                lastname:"senpai"
            }
        }
    },
    age:22
}
```
- And we can access the same objects using `.` operator chaining : 
```javascript
console.log(user.name)
console.log(user.name.username)
console.log(user.name.username.uname)               // soma_senpai0106
console.log(user.name.username.fullname)            // { firstname: 'soma', lastname: 'senpai' }
console.log(user.name.username.fullname.firstname)  // soma
console.log(user.name.username.fullname.lastname)   // senpai
```
- Output
```node
{
  username: {
    uname: 'soma_senpai0106',
    email: 'soma.senpai@email.com',
    fullname: { firstname: 'soma', lastname: 'senpai' }
  }
}

{
  uname: 'soma_senpai0106',
  email: 'soma.senpai@email.com',
  fullname: { firstname: 'soma', lastname: 'senpai' }
}

soma_senpai0106

{ firstname: 'soma', lastname: 'senpai' }

soma

senpai
```

<br>

- **Optional Chaining** can also be applied to the object chaining to apply a layer of protection to the accession (just in case one of the values was not there)
```javascript
console.log(user.name.username.fullname?.firstname) // checks to see if fullname is present or not before accessing further 
console.log(user.name.username.fullname?.lastname)  // same as above
```

---

### 2. Assigning Values to Objects

- **`Object.assign()`** 
  -  method copies all enumerable own properties from one or more source objects to a target object. 
  -  It returns the modified target object.  
-  **Syntax:**
```node 
Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, /* …, */ sourceN)
```

-  **Examples**


```javascript 
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
```

<br>

- But in production, these are rarely used now days. Now we use the spread because it can combine objects also (as seen earlier)
  
```javascript
const source1 = { a: 1, b: 2 };
const source2 = { c: 4, d: 5 };
const targetObject = {...source1, ...source2}
console.log(targetObject)                       // { a: 1, b: 4, c: 5 }
```
- **Remember** that spread will update any fields which have the same name in both objects.

---

### 2. Receiving Objects from database

- Generally when receiving data from database, or APIs, we get the data in the form of Array of objects : 
```node 
let users = new Object()
users = [
    {
        userID:1,
        uname:"Soma",
    },
    {
        userID:2,
        uname:"Senpai",
    },
    {
        userID:3,
        uname:"Bunny",
    }
]
```
- You can access these values using the basic accessing syntaxes of arrays and objects 
  
```javascript
users[0].userID     // 1
users[0].uname      // 'Soma'
```

---

### 3. Object Methods 

1. **`Object.keys(obj)`**
    - method returns an array of a given object's own enumerable string-keyed **property names**.
    - returns an array of all the keys of the `obj` object
- **Example :**
```node
> let obj = {name:'soma',age:22,isLoggedIn:true}
> Object.keys(obj)
[ 'name', 'age', 'isLoggedIn' ]
```

2. **`Object.values(obj)`**
    - method returns an array of a given object's own enumerable string-keyed **property values**.
    - returns an array of `obj` objects values
- **Examples:**
```node 
> Object.values(obj)
[ 'soma', 22, true ]
```

3. **`Object.entries(obj)`**
    - method returns an array of a given object's own enumerable string-keyed property key-value pairs.
    - returns the array which has nested arrays of each key:value pair of the `obj` object
    - Kinda works like the `.items` from python used on Lists
- **Examples**
```node
> Object.entries(obj)
[ [ 'name', 'soma' ], [ 'age', 22 ], [ 'isLoggedIn', true ] ]
```

4. **`Object.hasOwn(obj, prop)`**
    - method returns true if the specified `obj` has the indicated property `prop` as **its own property**. 
    - If the property is inherited, or does not exist, the method returns false. 
    - Returns an boolean indicating whether the `prop` property exists in the `obj` object or not
- **Exmaples:**
```node
> let obj = {name:'soma',age:22,isLoggedIn:true}
> Object.hasOwn(obj, 'name')
true
```
- This can also be done using the object instance property `hasOwnProperty()`
- **`obj.hasOwnProperty('name')`**: 
  - same as above but is a method of the object instance 
  - method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it). 

- **Example**
  
```node
> obj.hasOwnProperty('name')
true
```


