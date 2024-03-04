const add1 = (a, b) => a+b
const add2 = (a, b) => (a+b)
const add3 = (a, b) => {
    return a + b
}

console.log(add1(2,3))      // 5
console.log(add2(2,3))      // 5
console.log(add3(2,3))      // 5