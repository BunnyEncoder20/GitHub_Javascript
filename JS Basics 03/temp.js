let a = 100;
var c = 300;

if (true){
    let a = 1
    var c = 3
    console.log(`Inside block a:${a}`)
    console.log(`Inside block c:${c}`)
}

console.log(`Outside block a:${a}`)
console.log(`Outside block c:${c}`)
