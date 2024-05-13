let originalArray = [1,2,3]

// Shallow copies 
let copy1 = originalArray.slice(0)
let copy2 = [...originalArray]

copy1.push(4)
copy2.push(5)

console.table([originalArray, copy1, copy2])

// Deep copies
let deepArray = [["Deep Array"]]
let shallowCopy = [...deepArray]

shallowCopy[0].push('newElement')
console.table([deepArray, shallowCopy])