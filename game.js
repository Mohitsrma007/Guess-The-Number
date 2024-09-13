let randomNumber = (parseInt(Math.random() * 100+1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number');
  }else if(guess < 1){
    alert('Enter no. greater than 1');
  }else if(guess > 100){
    alert('Enter no. smaller than 100');
  }else{
    prevGuess.push(guess);
    if(numGuess === 10){
      // displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
   if(guess === randomNumber){
     displayMessage(`You guessed it Right`);
     endGame();
   }else if(guess < randomNumber){
     displayMessage(`Number is too low`);
   }else if(guess > randomNumber){
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
  
}

function displayMessage(message){
  lowHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Star New Game</h2>`;
  playGame = false;
  startOver.appendChild(p);
  newGame();

}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(){
    randomNumber = (parseInt(Math.random() * 100+1));
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    
    playGame = true;
  });
}