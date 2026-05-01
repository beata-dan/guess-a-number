
//Generate a random nunmber 

const getComputerChoice = (target) => {
    const randomNumber = Math.floor(Math.random() * 100)+1
}

const getUserChoice = (input) => {
    if(typeof input !== "number"){
        return "Invalid input, please type a whole number"
    }
}

function checkGuess(input, target){
    if (input === target){
        return "Correct!"
    } else if (input < target){
        return "Too low!"
    } else {
        return "Too high!"
    }
}
