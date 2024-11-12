let userScore = 0;
computerScore = 0;
roundCount = 0;
const MaxRounds = 5;
function getComputerChoice() {
       const choices = ["rock","paper","scissors"];
       return
       choices[Math.floor(Math.random() * 3)];
}

function playGame() {
       document.getElementById("game");
       const getComputerChoice = getComputerChoice();
}

const resultDisplay = document.getElementById("roundResult");
const userScoreDisplay = document.getElementById("userScore");
const computerScoreDisplay = document.getElementById("computerScore");
const winnerDisplay = document.getElementById("winner");

function determineWinner(userChoice,computerChoice){
       if (userChoice ===computerChoice)
               return "it's a draw!"

       if (
       (userChoice === "scissors" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors")
       ){
          return "computer"    
       }  else{
              return "user"
       }
}

const winner =
determineWinner(userChoice,computerChoice); {
   roundCount++;

   if (winner === "computer") {
       computerScore++;
       resultDisplay.textContent = "computer wins this round! you picked${userChoice}, computer picked${computerChoice}." ;

   } else if (winner === "user") {
       user++;
       resultDisplay.textContent = "you won this round! you picked${userchoice},  computer picked${computerChoice.}"
   }   else {
       resultDisplay.textContent = "it's a draw! both picked${userChoice}"
   }

     userScoreDisplay.textContent = userScore;
     computerScoreDisplay.textContent = computerScore;

     if (roundCount === MaxRounds) {
       if (computerScore > userScore) {
              winnerDisplay.textContent = "Oops! you lost this round, better luck next time";
 }      else if (userscore > computerScore){
           winnerDisplay.textcontext = "Congratulations! You won this round.";
 } else{
       winnerDisplay.textContent = "No winner! it's a draw."
 }
}
document.getElementById("playButton").disabled = true;

document.getElementById("playButton").addEventListener("enter", playGame)