let response1 = null
let response2 = undefined
let response3 = {data:"something"}

let data1 = response1 ?? "No data"
let data2 = response2 ?? "No data"
let data3 = response3 ?? "No data"

console.log(data1)      // No data
console.log(data2)      // No data
console.log(data3)      // {data: "something"}