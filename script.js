let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  let num1 = Math.floor(Math.random() * 10);
  return num1;
}
const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
}

const compareGuesses = (userGuess, computerGuess, secretNum) => {
  if (userGuess >= 0 && userGuess <= 9) {
  let userTarget = getAbsoluteDistance(userGuess, secretNum);
  let computerTarget = getAbsoluteDistance(computerGuess, secretNum);
  if (userTarget <= computerTarget) {
    return true;
  } else {
    return false;
  } }
  else {
    alert('Your number is out of range. Type a num between 0 and 9');
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}
