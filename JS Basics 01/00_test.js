let date = new Date()
newDate = date.toLocaleString('default',{
    weekday:'long',
    month:"long"
})
console.log(newDate)