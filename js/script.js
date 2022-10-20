/*
    Written by: Dagem Woldeyohannes
    Date: October 18, 2022
    Rock Paper Scissors game against cpu with live score update.
*/

const rock = document.querySelector('.rock-btn');
const paper = document.querySelector('.paper-btn');
const scissors = document.querySelector('.scissors-btn');
const liveResult = document.querySelector('.display-result');
const result = document.createElement('p');
result.classList.add('result');
const score = document.createElement('h3');
score.classList.add('score');
const options = document.querySelector('.main-sec');
const btnR = document.querySelector('.rock-btn');
const btnP = document.querySelector('.paper-btn');
const btnS = document.querySelector('.scissors-btn');

let computerScore = 0;
let playerScore = 0;

let getComputerChoice = () => {
    let rand = Math.floor(Math.random() * 3);
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[rand];
}

let announceWinner = () => {
    const finalWinner = document.createElement('h2');
    finalWinner.classList.add('finalWinner');

    
    btnR.disabled = true;
    btnP.disabled = true;
    btnS.disabled = true;

    if (playerScore === 5) {
        finalWinner.textContent = 'Congratulations... You won!';
        liveResult.appendChild(finalWinner);
    }
    else if (computerScore === 5) {
        finalWinner.textContent = 'You lose... Try again?';
        liveResult.appendChild(finalWinner);
    }

    const playAgain = document.createElement('button');
    playAgain.classList.add('btn');
    playAgain.classList.add('playAgain');
    playAgain.textContent = 'Play again';
    liveResult.appendChild(playAgain);

    playAgain.addEventListener('click', function () {
        playerScore = 0;
        computerScore = 0;
        liveResult.removeChild(result);
        liveResult.removeChild(score);
        liveResult.removeChild(finalWinner);
        liveResult.removeChild(playAgain);
        btnR.disabled = false;
        btnP.disabled = false;
        btnS.disabled = false;
    });
}

let playRound = (playerSelection, computerSelection = getComputerChoice()) => {
    if (playerSelection === computerSelection) {
        result.textContent = `Draw!`;
    }
    else if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') 
    ){
        playerScore++;
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        score.textContent = `${playerScore} - ${computerScore}`;
    }
    else {
        computerScore++;
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        score.textContent = `${playerScore} - ${computerScore}`;
    }   
    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}


    rock.addEventListener('click', function() {
        playRound('Rock');
        liveResult.appendChild(result);
        liveResult.appendChild(score);
    });
    paper.addEventListener('click', function() {
        playRound('Paper');
        liveResult.appendChild(result);
        liveResult.appendChild(score);
    });
    scissors.addEventListener('click', function () {
        playRound('Scissors');
        liveResult.appendChild(result);
        liveResult.appendChild(score);
    });
