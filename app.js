const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winner = [0, 0];

const checkWinner = (playerSelection, computerSelection) => {
  if(playerSelection === computerSelection) {
    return 'Draw';
  } else if(playerSelection === 'Rock') {
      if(computerSelection === 'Paper') {
        return 'Computer';
      } else {
        return 'Player';
      }
  } else if(playerSelection === 'Paper') {
      if(computerSelection === 'Scissors') {
        return 'Computer';
      } else {
        return 'Player';
      }
  } else if(playerSelection === 'Scissors') {
      if(computerSelection === 'Rock') {
        return 'Computer';
      } else {
        return 'Player';
      }
  }
};

const updateScore = result => {
  if(result === 'Player') {
    winner[0]++;
  } else if(result === 'Computer') {
    winner[1]++;
  } 
};

const messageOutput = (result, playerSelection, computerSelection, messageParam) => {
  if(result === 'Draw') {
    message.innerHTML = `Player chose: ${playerSelection}. Computer chose: ${computerSelection}.<br> It's a draw`;
  } else {
    message.innerHTML = messageParam;
  }
};

const playGame = e => {
  let playerSelection = e.target.innerText;
  let computerSelection = Math.random();

  if(computerSelection < 1/3) {
    computerSelection = 'Rock';
  } else if(computerSelection <= 2/3) {
    computerSelection = 'Paper';
  } else {
    computerSelection = 'Scissors';
  }

  console.log('player: ' + playerSelection + ' computer: ' + computerSelection);
  let result = checkWinner(playerSelection, computerSelection);
  console.log(result);

  updateScore(result);

  score.innerHTML = `Player Score: ${winner[0]} Computer Score: ${winner[1]}`;

  messageOutput(result, playerSelection, computerSelection, `Player chose: ${playerSelection}. Computer chose: ${computerSelection}.<br> ${result} wins!`);
};


for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playGame);
};