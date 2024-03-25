# DOM JS Basic Projects 

## Project 1 

### Project1.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Changer</title>
    <style>
        .bg-dark{
            background-color: #212121;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            height:100vh;
            margin: 0;
        }
        
        .canvas {
            text-align: center;
        }
        .button {
        display: inline-block;
        width: 100px;
        height: 100px;
        line-height: 100px; /* Centers text vertically */
        margin: 10px;
        border-radius: 5%;
        cursor: pointer;
        font-size: 16px;
        }

        #grey {
            background-color: grey;
        }

        #white {
            background-color: white;
            color: #212121; /* Changing text color for visibility */
        }

        #blue {
            background-color: blue;
            color: #000
        }

        #yellow {
            background-color: yellow;
            color: #212121; /* Changing text color for visibility */
        }

        #dark {
            background-color: #212121;
            color:#fff
            /* border: 1px solid white; */
        }
    </style>
</head>
<body class="bg-dark">
    <div class="canvas">
        <h1>Background Color Changer</h1>
        <span class="button" id="grey"><b>Grey</b></span>
        <span class="button" id="white"><b>White</b></span>
        <span class="button" id="blue"><b>Blue</b></span>
        <span class="button" id="yellow"><b>Yellow</b></span>
        <span class="button" id="dark"><b>Dark</b></span>
        <h2>Try clicking one of the colors above <br/> <span>to change the background color of this page.</span></h2>
    </div>

    <script src="01_Project1.js"></script>
</body>
</html>
```
### Project1.js

```js
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// console.log(buttons)
// console.log(body)

buttons.forEach(button => {
    console.log(button)

    // adding an event listener on each button 
    button.addEventListener('click', function(e){
        console.log('Clicked : ',e.target)
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = e.target.id
                body.style.color = 'black'
                
                break;
            
            case 'white':
                body.style.backgroundColor = e.target.id
                body.style.color = 'black'
                
                break;

            case 'blue':
                body.style.backgroundColor = e.target.id
                
                break;
            
            case 'yellow':
                body.style.backgroundColor = e.target.id
                body.style.color = 'black'
                
                break;
            
            case 'dark':
                body.style.backgroundColor = '#212121'
                body.style.color = 'white'
                
                break;
        }
    })
})
```
---
<br>

## Project 2

### Project2.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <style>
        .bg-dark{
            background-color: #212121;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            height:100vh;
            margin: 0;
        }

        h1,h3{
            text-align: center;
        }
        form{
            text-align: center;
        }
        button{
            font-size: 20px;
            background-color: #9aff68;
            border-radius: 5px;
            cursor: pointer;
        }

        #buttonContainer{
            padding: 10px;
        }
    </style>
</head>
<body class="bg-dark">
    <div class="container">
        <h1>BMI Calculator</h1>
        <form>
            <p>
                <label for="height">Height in cms</label>
                <input type="text" id="height" />
            </p>
            <p>
                <label for="weight">Weight in kgs</label>
                <input type="text" id="weight" />
            </p>
            <div id="buttonContainer">
                <button>
                    <b>Calculate</b>
                </button>
            </div>

            <div id="results">
                Enter Height & Weight and Click Calculate
            </div>
        </form>

        <br>
        <br>
        <br>

        <div id="guide">
            <h3>BMI Weight Guide</h3>
            <p>Less than 18.6 : Under Weight</p>
            <p>Between 18.6 and 24.9 : Normal</p>
            <p>Between 24.9 and 29.9 : Over Weight</p>
            <p>More than 30 : Obese</p>
        </div>
    </div>
    <script src="02_Project2.js"></script>
</body>
</html>
```

### Project2.js
```js
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
```
<br>

---

## Project 3

### Project3.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digit Clock</title>
    <style>
        .bg-dark{
            background-color: #212121;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            height:100vh;
            margin: 0;
        }

        #banner{
            color: #fff;
            font-size: 20px;
            text-align: center;
        }

        #clock{
            background: #fd9c00;
            color: #000;
            border-radius: 20px;
            text-align: center;
            font-size: 100px;
        }
    </style>
</head>
<body class="bg-dark">
    <div class="center">
        <div id="banner">Your Local Time</div>
        <br/>
        <div id="clock">00:00:00</div>
    </div>
    <script src="03_Project3.js"></script>
</body>
</html>
```

### Project3.js
```js
const clock = document.querySelector('#clock')

let date = new Date()
// console.log(date.toLocaleTimeString())

// setInterval function runs at a set interval of time defined as the second param of the function
// setInterval(function(){},1000ms)
setInterval(function(){
    date = new Date()
    clock.innerHTML = date.toLocaleTimeString([],{hour12:false})
},1000)
```

<br>

---

## Project 4



