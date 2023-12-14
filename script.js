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

// 9. Call the computer choice
getComputerChoice();
console.log(computer);

// 10. Ask user to choose rock, paper or scissors
let userInput = prompt("Please choose between 'Rock', 'Paper' or 'Scissors'")

//11. Uppercase the first letter of the input
userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

// 12. Create switch - case depending on computer input

switch (computer) {

    case rock :
        switch (userInput) {
            case rock :
                console.log("Draw!")
            break;

            case paper :
                console.log("Win!")
            break;

            case scissors :
                console.log("Lose!")
            break;}
    break;

    case paper :
        switch (userInput) {
            case paper :
                console.log("Draw!")
            break;

            case scissors :
                console.log("Win!")
            break;

            case rock :
                console.log("Lose!")
            break;}
    break;
            
    case scissors :
        switch (userInput) {
            case scissors :
                console.log("Draw!")
            break;

            case rock :
                console.log("Win!")
            break;

            case paper :
                console.log("Lose!")
            break;}
    break;
}

// 7. If computer chooses rock and user chooses paper, then the result is user win
// 8. If computer chooses rock and user chooses scissors, then the result is computer win

// 9. If computer chooses paper and user chooses paper, then the result is draw
// 10. If computer chooses paper and user chooses scissors, then the result is user win
// 11. If computer chooses paper and user chooses rock, then the result is computer win

// 12. If computer chooses scissors and user chooses scissors, then the result is draw
// 13. If computer chooses scissors and user chooses rock, then the result is user win
// 14. If computer chooses scissors and user chooses paper, then the result is computer win

// 15. Output the result

