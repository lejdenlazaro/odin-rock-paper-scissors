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
    let computerScore = 0;
    let humanScore = 0;

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
    }
  }

  //main function
  let rounds;
  do {
    rounds = parseInt(prompt("Enter a positive number: "));
  } while (isNaN(rounds) || rounds < 0);

  return playGame(rounds) ? console.log("You win!") : console.log("You lost!");
}
