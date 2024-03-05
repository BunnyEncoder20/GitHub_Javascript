# Loops or Iterators in `JS`

---

## 1. For loop

- Basic syntax

```javascript
for (let i=0; i<=10; i++){
    console.log(i)
}
```
- Example:

```javascript
let arr = ["batman","sukuna","madara","sasuke"]

for (let i=0; i<arr.length; i++){
    console.log(arr[i])
}
```

---

## 2. Break & Continue

- The `break` statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement.
- Example:

```javascript
let friends = ['bunnu','hoods','harsh','soma','Tarun']

for (let i=0; i<friends.length; i++){
    console.log(friends[i])

    if (friends[i] == 'soma') {
        console.log('Best Friend Found 🥳')   
        break;
    }
}
```

<br>

- The `continue` statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
- Example

```javascript
let fruits = ['🍍','🥝','🍎','🍏','🍌','🍉','🍈','🍓','🥭']

for (let i=0; i<fruits.length; i++){
    if (fruits[i] == '🥝' || fruits[i]=='🍈') 
        continue;

    console.log('I can have some ' + fruits[i])
}
```