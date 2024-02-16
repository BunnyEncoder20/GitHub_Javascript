# Dates in JS
---
- JS `Date` object represents a single moment (the number of milliseconds from the the midnight of 1st January 1970, UTC).
- It can be declared as : 
```javascript
let myDate = new Date()
console.log(myDate);            // 2024-02-16T11:04:55.798Z
console.log(myDate.toString()); // Fri Feb 16 2024 16:34:55 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());     // Fri Feb 16 2024
console.log(myDate.toLocaleString());   // 16/2/2024, 4:36:01 pm
```
- Here `myDate` if of type `Object`
- We can create a specific Date also : 
```javascript
let date = new Date(2023, 0, 23)
console.log(date.toDateString());   // Mon Jan 23 20

let date_and_time = new Date(2023, 1, 10, 15, 30, 45)
console.log(date_and_time.toLocaleString());    // 10/2/2023, 3:30:45 pm

let date2 = new Date("2024-02-14")
console.log(date2.toDateString());      // Wed Feb 14 2024

let date3 = new Date("02-14-2024")
console.log(date3.toDateString());      // Wed Feb 14 2024
```
---

## Timestamps

- Timestamp helps in marking the exact time something occurred. Useful when comparing who was first, booking stuff (hotel, flights, etc).
- We can create a timestamp by : 
```javascript
let myTimestamp = new Date.now()
console.log(myTimestamp);           // 1708094128225

// can also get the same kinda data from created dates : 
let date3 = new Date("02-14-2024")
let myCreatedTimestamp = date3.getTime()
console.log(myCreatedTimestamp);    // 1707849000000
```
- By using the `.getTime()` method, we can now compare the 2 dates easily (by getting the exact milliseconds for both date objects)
- we can get the number of seconds by dividing by 1000 (cause 1sec = 1000 ms duh)
```javascript
console.log(Math.floor(Date.now()/1000))    //floor for avoiding the decimals
```
---
## Date methods to extract specific information

- Some self explanatory functions include :  
```javascript
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
```
- Another interesting to know function is the `.toLocaleString()`. It is a object and comes with a lot more functionality and customization for the format in which it prints the dates : 
```javascript
let date = new Date()
newDate = date.toLocaleString('default',{
    weekday:'long',
    month:"long"
})
console.log(newDate)        // February Friday
```

