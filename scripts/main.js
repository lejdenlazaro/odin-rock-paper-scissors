function RockPaperScissors() {
  function playGame(rounds) {
    function getHumanChoice() {
      function isValidChoice(choice) {
        choice = choice.trim();
        const choices = { rock: true, paper: true, scissors: true };
        return choices[choice] ?? false;
      }
      let choice;
      do {
        choice = prompt("Enter your choice (rock, paper, scissors): ");
      } while (!isValidChoice(choice));
      return choice;
    }

    function getComputerChoice() {
      const choices = ["rock", "paper", "scissors"];
      const choice = choices[Math.floor(Math.random() * choices.length)];
      return choice;
    }

    function playRound(computerChoice, humanChoice) {
      if (computerChoice === "paper" && humanChoice === "rock")
        return "computer";
      else if (computerChoice === "rock" && humanChoice === "scissors")
        return "computer";
      else if (computerChoice === "scissors" && humanChoice === "paper")
        return "computer";
      else if (computerChoice === humanChoice) return "draw";
      else return "human";
    }

    let computerScore = 0;
    let humanScore = 0;
    for (let i = 0; i < rounds; i++) {
      const computerChoice = getComputerChoice();
      const humanChoice = getHumanChoice();
      const roundResult = playRound(computerChoice, humanChoice);

      if (roundResult === "computer") computerScore++;
      else if (roundResult === "human") humanScore++;

      console.log(`computer: ${computerChoice} score: ${computerScore}`);
      console.log(`human: ${humanChoice} score: ${humanScore}`);
      console.log("///////////////////////////////////////////////");
    }
    if (computerScore > humanScore) return "You lost!";
    else if (computerScore < humanScore) return "You win!";
    else return "It's a tie!";
  }

  //main function
  let rounds = 0;
  do {
    rounds = parseInt(prompt("Enter a positive number: "));
  } while (isNaN(rounds) || rounds < 0);
  if (rounds === 0) {
    console.log("Game exited.");
    return;
  }
  console.log(playGame(rounds));
}

//ui integration
function getHumanChoice() {
  const choices = document.getElementById("choices");
  choices.addEventListener("click", (e) => {
    return e.target.className;
  });
}
