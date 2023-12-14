// Algorithm

// 1. Initialize rock
let rock = "Rock";

// 2. Initialize paper
let paper = "Paper";

// 3. Initialize scissors
let scissors = "Scissors";

// 4. Initialize computer
let computer;

// 5. Initialize an array which contains rock, paper and scissors
let toolsArr = [rock, paper, scissors];

// 6. Function which calls the computer choice

function getComputerChoice() {
    // 7. Initialize a variable which randomly chooses a tool
    let randomTool = Math.floor(Math.random() * toolsArr.length);

    // 8. Asign random tool to computer
    return computer = toolsArr[randomTool];
}
// 10. Ask user to choose rock, paper or scissors
function getUserChoice() {
    let userInput = prompt("Please choose between 'Rock', 'Paper' or 'Scissors'")

    //11. Uppercase the first letter of the input
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

    return userInput;
}

// xx. Account for the score
let computerScore = 0;
let userScore = 0;

function oneRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice ();
    playerSelection = getUserChoice();
    // 12. Create switch - case depending on computer input

    switch (computerSelection) {
    // 13. If computer inputs rock, and user inputs rock then it's a draw etc.
        case rock :
            switch (playerSelection) {
                case rock :
                    console.log("You both chose Rock! Play again!")
                    oneRound();
                break;

                case paper :
                    console.log("Paper beats Rock! User Wins!")
                    ++userScore
                break;

                case scissors :
                    console.log("Rock beats Scissors! Computer Wins!")
                    ++computerScore
                break;}
    // 14. Break so the script will stop at this case
        break;

        case paper :
            switch (playerSelection) {
                case paper :
                    console.log("You both choose Paper! Play again!")
                    oneRound();
                break;

                case scissors :
                    console.log("Scissors beats paper! User Wins!")
                    ++userScore
                break;

                case rock :
                    console.log("Paper beats rock! Computer Wins!")
                    ++computerScore
                break;}
        break;
                
        case scissors :
            switch (playerSelection) {
                case scissors :
                    console.log("You both choose Scissors! Play again!")
                    oneRound();
                break;

                case rock :
                    console.log("Rock beats Scissors! User Wins!")
                    ++userScore
                break;

                case paper :
                    console.log("Scissors beats Paper! Computer Wins!")
                    ++computerScore
                break;}
        break;
    }

}

// 15. Create function to play 5 rounds

function game() {
    for (let i = 1; i <= 5; ++i) {
        oneRound(i);
        console.log("Your Score: ", userScore);
        console.log("Computer Score: ", computerScore);
    }

    if (userScore > computerScore){
        return console.log("You Won!");
    } else {
        return console.log("Computer Won!");
    }; 
}

game();