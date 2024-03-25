const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)/100;
    const weight = parseInt(document.querySelector('#weight').value);
    const resultDisplay = document.querySelector('#results');

    console.log(height)
    console.log(weight)

    // isNaN() returns True if the value is not a number or empty
    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        
        if(bmi < 18.5) {
            category = 'Skinny.<br/>Eat More 🍗';
        } else if(bmi < 25) {
            category = 'Normal. 👍';
        } else if(bmi < 30) {
            category = 'Overweight.<br/>Maybe lay off the snacks 🍫';
        } else {
            category = 'Obese.<br/>Daaamn boi, he THICC 🙀';
        }
        
        resultDisplay.innerHTML = `Your BMI is ${bmi} <br/> You are ${category}`
    } else {
        resultDisplay.innerHTML = 'Please enter valid values';
    }
})



