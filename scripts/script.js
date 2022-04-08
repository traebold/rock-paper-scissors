const CHOICES = ["rock", "paper", "scissors"];

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);
  return CHOICES[randomNum];
}

const playerSelection = 'rock';
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  let playerSelectionLower = playerSelection.toLowerCase();
  if (playerSelectionLower === 'rock' && computerSelection === 'scissors') {
    return "You win! rock beats scissors"
  } else if (playerSelectionLower === 'rock' && computerSelection === "paper") {
    return "You lose! paper beats rock!"
  } else if (playerSelectionLower === 'paper' && computerSelection === 'scissors') {
    return "You lose! scissors beats paper!" 
  } else if (playerSelectionLower === 'paper' && computerSelection === 'rock') {
    return "You win!, paper wins rock"
  } else if (playerSelectionLower === 'scissors' && computerSelection === 'rock') {
    return "You lose!, rock wins scissors!" 
  } else if (playerSelectionLower ==='scissors' && computerSelection === 'paper') {
    return "You win!, scissors beat paper!"
  } else {
    return `Draw!, you both choose ${playerSelection}`
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
   return playRound(playerSelection, computerSelection);
  }
}

console.log(game());
