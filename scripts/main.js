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
const roundsDisplay = document.querySelector(".rounds p span");
const humanChoices = document.querySelector(".choices");
const newGame = document.querySelector(".new-game");

let computerScore = 0;
let humanScore = 0;
let rounds = 5;

roundsDisplay.textContent = rounds.toString();

humanChoices.addEventListener("click", (e) => {
  const humanChoice = e.target.className.toString();
  const computerChoice = getComputerChoice();
  if (rounds) {
    const roundResult = playRound(computerChoice, humanChoice);
    if (roundResult === "computer") computerScore++;
    else if (roundResult === "human") humanScore++;

    computerChoiceDisplay.textContent = computerChoice;
    humanChoiceDisplay.textContent = humanChoice;
    computerScoreDisplay.textContent = computerScore.toString();
    humanScoreDisplay.textContent = humanScore.toString();

    roundsDisplay.textContent = `${rounds}`;
    rounds -= 1;
  }
  roundsDisplay.textContent = `${rounds}`;
});

newGame.addEventListener("click", () => {
  computerScore = 0;
  humanScore = 0;
  rounds = 5;

  roundsDisplay.textContent = rounds.toString();
  computerChoiceDisplay.textContent = "?";
  humanChoiceDisplay.textContent = "?";
  computerScoreDisplay.textContent = computerScore.toString();
  humanScoreDisplay.textContent = humanScore.toString();
});
