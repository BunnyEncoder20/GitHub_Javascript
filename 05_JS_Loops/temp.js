const shoppingCart = [
    {
        course:'JS course',
        price: 299
    },
    {
        course:'Python course',
        price: 999
    },
    {
        course:'ReactNative course',
        price: 1999
    },
    {
        course:'Data Science course',
        price: 12999
    },
]

let total = shoppingCart.reduce((acc,val)=>{
    return acc + val.price
},0)

console.log(`Grand Total Cost: ${total}`)