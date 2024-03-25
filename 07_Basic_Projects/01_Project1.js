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