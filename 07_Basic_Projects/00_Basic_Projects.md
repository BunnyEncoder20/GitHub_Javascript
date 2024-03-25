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

### Project2.js
