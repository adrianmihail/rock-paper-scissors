// get computer choice
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let computer;
let toolsArr = [rock, paper, scissors];

// xx. Account for the score
let computerScore = 0;
let userScore = 0;

function getComputerChoice() { 
    let randomTool = Math.floor(Math.random() * toolsArr.length);

    return computer = toolsArr[randomTool];
};

// Play the game using buttons

let playerButtonPress;

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playerButtonPress = rock;
    oneRound();
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playerButtonPress = paper;
    oneRound();
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playerButtonPress = scissors;
    oneRound();
});

// Play one round

function oneRound () {
    let playerSelection = playerButtonPress;
    let computerSelection = getComputerChoice();
    // 12. Create switch - case depending on computer input

    switch (computerSelection) {
    // 13. If computer inputs rock, and user inputs rock then it's a draw etc.
        case rock :
            switch (playerSelection) {
                case rock :
                    console.log("You both chose Rock! Play again!")
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

    const userScoreboard = document.querySelector('#userScoreboard');
    userScoreboard.textContent = `Your score: ${userScore}`;

    const computerScoreboard = document.querySelector('#computerScoreboard');
    computerScoreboard.textContent = `Computer score: ${computerScore}`;

    let countScore = userScore + computerScore;
    console.log(countScore);

    if (countScore == 5){
        if(userScore > computerScore){
            alert("You won!");
        } else{
            alert('Computer won!');
        };
    };
}

