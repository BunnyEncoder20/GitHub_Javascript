console.log(addOne(1))      // 1
console.log(addTwo(2))      // Error : undefined function addTwo()

function addOne(num){
    return num+1
}

const  addTwo = function(num){
    return num+2
}