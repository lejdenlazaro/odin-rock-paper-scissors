// paper>rock rock>scissors scissors>paper

// project type: console

// input: n - number of rounds
// output: Computer Wins, Human Wins

// class Rock-Paper-Scissors{
// attributes:
//     let computerScore = 0;
//     let humanScore = 0;
// methods:
//     getComputerChoice();
//     getHumanChoice(string);
//     playRound(humanChoice, computerChoice);
//     playGame(rounds);
// }

function RockPaperScissors() {
  function playGame(rounds) {
    function getHumanChoice() {
      function isValidChoice(choice) {
        choice = choice.toLowerCase();
        choice = choice.trim();
        switch (choice) {
          case "rock":
            return true;
          case "paper":
            return true;
          case "scissors":
            return true;
          default:
            return false;
        }
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

    let computerScore = 0;
    let humanScore = 0;
    for (let i = 0; i < rounds; i++) {
      function playRound(computerChoice, humanChoice) {
        if (computerChoice === "paper" && humanChoice === "rock") return 1;
        else if (computerChoice === "rock" && humanChoice == "scissors")
          return 1;
        else if (computerChoice === "scissors" && humanChoice === "paper")
          return 1;
        else if (computerChoice === humanChoice) return 0;
        else return -1;
      }
      const computerChoice = getComputerChoice();
      const humanChoice = getHumanChoice();
      const roundResult = playRound(computerChoice, humanChoice);
      switch (roundResult) {
        case 1: {
          computerScore++;
          break;
        }
        case -1: {
          humanScore++;
          break;
        }
        default: {
          break;
        }
      }
      console.log(`computer: ${computerChoice} score: ${computerScore}`);
      console.log(`human: ${humanChoice} score: ${humanScore}`);
      console.log("///////////////////////////////////////////////");
    }
    if (computerScore > humanScore) return 1;
    else if (computerScore < humanScore) return -1;
    else return 0;
  }

  //main function
  let rounds;
  do {
    rounds = parseInt(prompt("Enter a positive number: "));
  } while (isNaN(rounds) || rounds < 0);

  const gameResult = playGame(rounds);

  switch (gameResult) {
    case 1: {
      console.log("You lost!");
      break;
    }
    case -1: {
      console.log("You win!");
      break;
    }
    case 0: {
      console.log("It's a tie!");
      break;
    }
    default: {
      break;
    }
  }
}
