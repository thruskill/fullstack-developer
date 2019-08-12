let submitBtn = document.querySelector('.guessSubmit');
let input = document.querySelector('.guessField');
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let resultParas = document.querySelector('.resultParas')
let resetButton = document.createElement('button');
let randomNumber = Math.floor(Math.random() *100);
let counter = 1

function guessResult(e) {
    let usrInpt = Number(input.value);
    if(counter == 1) {
        guesses.innerText = 'Previous Guesses :';
    }
    guesses.innerText += ' '+usrInpt;
    if(randomNumber == usrInpt) {
        lastResult.innerText = 'Your guess is correct'
        lastResult.style.backgroundColor = 'green';
        lowOrHi.innerText = '';
        
        startGame()
    }else if(counter === 10) {
        lastResult.innerText = 'Game Over!';
        lowOrHi.innerText = '';
        submitBtn.disabled=true;

        startGame()
    }else{
        lastResult.innerText = 'Wrong'
        lastResult.style.backgroundColor = 'red';
        if(randomNumber > usrInpt) {
            lowOrHi.innerText = 'Last guess is too low!';
        }else {
            lowOrHi.innerText = 'Last guess is too high!';
        }
    }
    counter++;
    input.value= '';
    input.focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() *100);
    counter = 1;
    lowOrHi.innerText = '';
    guesses.innerText = '';
    lastResult.innerText = '';
    lastResult.style.backgroundColor = '';
    resetButton.parentNode.removeChild(resetButton);
}


function startGame(){
    resetButton.innerText = 'Start Again';
    resultParas.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

submitBtn.addEventListener('click', guessResult);