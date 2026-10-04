let randnum = parseInt(Math.random() * 100 +1);

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guess')

const guessslot = document.querySelector('#prevguess')
const remaining = document.querySelector('#guesses')
const lowOrhigh = document.querySelector('.lowerhigher')
const startOver = document.querySelector('.result')



const p = document.createElement('p')

let prevGuess = [];
let numGuess =1;

let playgame = true;

// finding whether the player is playinig the game or not
if (playgame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    });
    
}

// writing functions

// validating the input 
function validateGuess(guess){
    if (isNaN(guess)) {
        alert("Please enter a Valid Number")
    } else if(guess <1 ){
        alert('please enter number more than 0')
    } else if (guess > 100){
        alert("please enter number less than or equal to 100")
    } else{
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number is ${randnum}`)
            endGame();
            
        } else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
    userInput.value = ''

}

//check whether the guess is correct or not
function checkGuess(guess) {
    if (guess === randnum){
        displayMessage('You Guessed it right.')
    } else if(guess > randnum){
        displayMessage('Lower ')
    } else if(guess < randnum){
        displayMessage("Higher")
    }
}

//  kinda clean up shit. removes the input field and shows the inputs that  have been given 
function displayGuess(guess) {
    userInput.value = ''
    guessslot.innerHTML += `${guess}  `
    numGuess ++;
    remaining.innerHTML= `${11- numGuess}`

}


// display whether the guess is higher or lower
function displayMessage(message) {
    lowOrhigh.innerHTML=`<h2>${message} </h2>`
    
    
}

function endGame() {
   userInput.value='';
   userInput.setAttribute('disabled', '')
   p.classList.add('button')
   startOver.appendChild(p);
   playgame = false;
   p.innerHTML=`<h2 id="newGame"> new game </h2>`;
   NewGame();
}

function NewGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){

        randnum = parseInt(Math.random() * 100 + 1)
        prevGuess = []
       
        numGuess = 1
        guessslot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess }`;
        userInput.removeAttribute('disabled')

        lowOrhigh.innerHTML=''
        startOver.removeChild(p)

         playgame = true;
    })
}
 

