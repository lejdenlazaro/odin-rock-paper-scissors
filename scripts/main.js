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
  //function definitions
  function playGame(rounds) {
    let computerScore = 0;
    let humanScore = 0;
  }
  //main function
  let rounds;
  do {
    rounds = parseInt(prompt("Enter a positive number: "));
  } while (isNaN(rounds) || rounds < 0);

  return playGame(rounds) ? console.log("You win!") : console.log("You lost!");
}
