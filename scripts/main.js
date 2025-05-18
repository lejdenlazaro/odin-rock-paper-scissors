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

let computerScore = 0;
let humanScore = 0;

humanChoices.addEventListener("click", (e) => {
  const humanChoice = e.target.className.toString();
  const computerChoice = getComputerChoice();

  const roundResult = playRound(computerChoice, humanChoice);
  if (roundResult === "computer") computerScore++;
  else if (roundResult === "human") humanScore++;

  computerChoiceDisplay.textContent = computerChoice;
  humanChoiceDisplay.textContent = humanChoice;
  computerScoreDisplay.textContent = computerScore.toString();
  humanScoreDisplay.textContent = humanScore.toString();
});

newGame.addEventListener("click", () => {
  computerScore = 0;
  humanScore = 0;

  computerChoiceDisplay.textContent = "?";
  humanChoiceDisplay.textContent = "?";
  computerScoreDisplay.textContent = computerScore.toString();
  humanScoreDisplay.textContent = humanScore.toString();
});
