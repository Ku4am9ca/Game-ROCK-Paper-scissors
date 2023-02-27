const computerChoseDisplay = document.getElementById('computer-choce');
const userChoseDisplay = document.getElementById('user-choce');
const resultDisplay = document.getElementById('result');


const possibleChoise = document.querySelectorAll('button')

let userChose
let computerChoice
let result




possibleChoise.forEach(possibleChoise => possibleChoise.addEventListener('click', (e) => {
    userChose = e.target.id
    userChoseDisplay.innerHTML = userChose
    generateComputerChose()
    getResult()
}))

function generateComputerChose() {
    const randomNumber = Math.floor(Math.random() * 3 + 1)// possibleChoise.length
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'//ножницы
    }
    if (randomNumber === 3) {
        computerChoice = 'rpaper'
    }
    computerChoseDisplay.innerHTML = computerChoice

}


function getResult() {
    if (computerChoice === userChose) {
        result = 'its a draw'
    }
    if (computerChoice === 'rock' && userChose === 'paper') {
        result = 'you win'
    }
    if (computerChoice === 'rock' && userChose === 'scissors') {
        result = 'you lost'
    }
    if (computerChoice === 'paper' && userChose === 'scissors') {
        result = 'you win'
    }
    if (computerChoice === 'paper' && userChose === 'rock') {
        result = 'you lose'
    }
    if (computerChoice === 'scissors' && userChose === 'rock') {
        result = 'you win'
    }
    if (computerChoice === 'scissors' && userChose === 'paper') {
        result = 'you lose'
    }
    resultDisplay.innerHTML = result
}



