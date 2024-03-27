// Generating Random number between 1 and 100
let randomNumber = parseInt(Math.random()*100) + 1 
console.log(randomNumber)

// fetching DOM elements
const submitBtn = document.querySelector('.submitBtn')
const userInput = document.querySelector('#guess')
const previousGuesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const resultParas = document.querySelector('.resultParas')
const lowOrHigh = document.querySelector('.lowOrHigh')
userInput.focus()
lowOrHigh.innerHTML = `<h3>Hints</h3>`


// Variables
let prevGuesses = []
let numGuesses = 1
let playGame = true     // once game over helps to stop the game


// Functions 
function validGuess(guess){
    // check if input in valid
    numGuesses++
    if(numGuesses<=10){
        if(isNaN(guess) || guess < 1 || guess > 100 || guess === ''){
            displayMessage('Please enter a number between 1 and 100')
            return false
        }
        else if(prevGuesses.includes(guess)){
            displayMessage('You have already guessed this Number, enter a new one')
            return false
        }
        prevGuesses.push(guess)
        return true
    }
    else {
        updateGuesses(guess)
        displayMessage(`Game Over. Random Number was ${randomNumber}`)
        endGame()
        return false
    }
}

function checkGuess(guess){
    // check if the guess is correct
    if(guess === randomNumber)
        return true
    else 
        return false
}


function updateGuesses(guess){
    // for displaying previous guesses
    userInput.value = '';
    let addition = document.createElement('span')
    addition.textContent = ` ${guess}`
    let colorStyle = (randomNumber < guess) ? 'color: #ff434c;' : 'color: #1e6dff;'
    addition.style = colorStyle
    previousGuesses.appendChild(addition)

    // for updating the guess count
    lastResult.innerHTML = `${11-numGuesses}`

    // for displaying highOrLow
    let msg = ''
    if (randomNumber < guess)
        msg = 'Too High'
    else 
        msg = 'Too Low'

    displayMessage(msg)
}

function displayMessage(msg){
    // for displaying messages
    switch(msg){
        case 'Too High':
            lowOrHigh.innerHTML = `<h3 style="color: #ff434c;">${msg}</h3>`
            break;
        case 'Too Low':
            lowOrHigh.innerHTML = `<h3 style="color: #1e6dff;">${msg}</h3>`
            break;
        case 'You Won!':
            lowOrHigh.innerHTML = `<h1 style="color: #9aff68;">${msg}</h1>`
            break;
        default:
            lowOrHigh.innerHTML = `<h3>${msg}</h3>`
    }   
}


function endGame(win){
    // for ending the game
    userInput.value = ''
    userInput.disabled = true
    submitBtn.disabled = true
    submitBtn.setAttribute('style', 'background-color: grey; color: #fff;')
    playGame = false

    // crating a new paragraph for Declaring end of game
    let endMsg = document.createElement('p')
    endMsg.id = 'endMsg'
    endMsg.innerHTML = 'Click "New Game" to play again'
    let newButton = document.createElement('button');
    newButton.id = 'newGameBtn';
    newButton.className = 'submitBtn';
    newButton.textContent = 'New Game';
    
    // Setup for ending Game
    resultParas.appendChild(endMsg);
    resultParas.appendChild(newButton);

    // function for creating new game
    newGame()
}

function newGame(){
    // for starting a new game by resetting variables
    let newGameBtn = document.querySelector('#newGameBtn')
    newGameBtn.addEventListener('click',function(){
        randomNumber = parseInt(Math.random()*100) + 1 
        console.log(randomNumber)
        prevGuesses = []
        numGuesses = 1
        userInput.disabled = false
        submitBtn.disabled = false
        submitBtn.setAttribute('style', 'background-color: #9aff68; color: black;')
        previousGuesses.innerHTML = '<span class="guesses"></span>'
        lastResult.innerHTML = `${11-numGuesses}`
        lowOrHigh.innerHTML = `<h3>Hints</h3>`
        resultParas.removeChild(document.querySelector('#endMsg'));
        resultParas.removeChild(document.querySelector('#newGameBtn'));
        playGame = true
    })
}




// Driver Code

if(playGame){
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()

        let guess = parseInt(userInput.value)

        if(validGuess(guess)){
            userInput.focus()

            // check if the guess is correct
            if(checkGuess(guess)){
                console.log('Correct Guess')
                displayMessage('You Won!')
                endGame()
            }
            else{
                console.log('Nope, Try Again')
                // Update the results para
                updateGuesses(guess)
            }
        }
        else{
            console.log('Invalid Guess')
        }
            
    })
}