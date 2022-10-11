let getComputerChoice = () => {
    let rand = Math.floor(Math.random() * 3);
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[rand];
}

let computerScore = 0;
let playerScore = 0;

let playRound = (playerSelection, computerSelection = getComputerChoice()) => {
    if (playerSelection === computerSelection) {
        console.log('Draw');
    }
    else if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') 
    ){
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

let cpu = 0;
let you = 0;

let game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock Paper or Scissors?');
        playRound(playerSelection);
        console.log(playerScore + ' - ' + computerScore);
    }

    if (playerScore > computerScore)
        console.log('You Win!');
    else if (computerScore > playerScore)
        console.log('You Lose!');
    else
        console.log('Draw!');
}

game();