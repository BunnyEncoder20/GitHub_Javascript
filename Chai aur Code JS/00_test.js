let user1 = "soma"
let user2 = user1
user2 = "bunny"

console.log(user1)      // soma
console.log(user2)      // bunny


let obj1 = {
    name:"Soma",
    email:"soma@gmail.com"
}
let obj2 = obj1 
obj2.email = "bunny@gmail.com"

console.log(obj1.email) // bunny@gmail.com
console.log(obj2.email) // bunny@gmail.com