let obj = {
    name:"Soma",
    age:22,
    greeting: function(){
        console.log("Hello World")
    }
}

console.log(obj.greeting)       // [Function: greeting]
obj.greeting()                  // Hello World

obj.greeting2 = function(){
    console.log(`Hello Obj ${this.name}`)
}
obj.greeting2()