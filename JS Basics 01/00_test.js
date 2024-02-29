let course = {
    title: "Chai aur JS",
    price: 999,
    instructor: "Hitesh"
}
let {title:t, price:p, instructor:i} = course

console.table([t, p, i])