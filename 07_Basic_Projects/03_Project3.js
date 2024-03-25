const clock = document.querySelector('#clock')

let date = new Date()
// console.log(date.toLocaleTimeString())

// setInterval function runs at a set interval of time defined as the second param of the function
// setInterval(function(){},1000ms)
setInterval(function(){
    date = new Date()
    clock.innerHTML = date.toLocaleTimeString([],{hour12:false})
},1000)