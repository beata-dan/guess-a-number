// Grabbing proposed element IDs from html
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const hintMessage = document.getElementById('hint-message');
const attemptsCount = document.getElementById('attempts-count');
const resetBtn = document.getElementById('reset-btn')

// Set generation of the Secret Number
let computerChoice = Math.floor(Math.random() * 100) + 1; 
let attempts = 0;

function checkGuess() {
    const userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        hintMessage.textContent = 'Please enter a number between 1 and 100';
        return;
    }

    attempts++
    attemptsCount.textContent = attempts;

    if (userGuess === computerChoice) {
        hintMessage.textContent = `YOU GUESSED THE NUMBER IN ${attempts} attempts CONGRATS!`;
    } else if (userGuess > computerChoice) {
        hintMessage.textContent = 'Too High!'
    } else {
        hintMessage.textContent = 'Too Low!'
    }

    guessInput.value = '';
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsCount.textContent = '0';
    hintMessage.textContent = '';
    guessInput.value = '';
}

submitBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);