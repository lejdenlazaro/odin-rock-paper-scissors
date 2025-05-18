function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === "paper" && humanChoice === "rock") return "computer";
  else if (computerChoice === "rock" && humanChoice === "scissors")
    return "computer";
  else if (computerChoice === "scissors" && humanChoice === "paper")
    return "computer";
  else if (computerChoice === humanChoice) return "draw";
  else return "human";
}

const humanChoiceDisplay = document.querySelector(".human-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const humanChoices = document.querySelector(".choices");
const newGame = document.querySelector(".new-game");
