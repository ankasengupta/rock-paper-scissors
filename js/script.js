// Caching the DOM
var scoreUser = 0;
var scoreComp = 0;
const scoreUserSpan = document.getElementById("score-user");
const scoreCompSpan = document.getElementById("score-comp");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorDiv = document.getElementById("scissor");

/**
 * To randomly decide the option that the computer chooses
 * @returns array element at randomly generated point between 0-3
 */
function getChoiceComp() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

/**
 * To update the scoreboard and message displayed when the user wins
 * @param {*} choiceUser the option the user chose
 * @param {*} choiceComp the option the computer chose
 */
function win(choiceUser, choiceComp) {
    scoreUser++;
    scoreUserSpan.innerHTML = scoreUser;
    resultDiv.innerHTML = `${choiceUser.charAt(0).toUpperCase()}${choiceUser.slice(1)} beats ${choiceComp}. You win!`;
}

/**
 * To update the scoreboard and message displayed when the user loses
 * @param {*} choiceUser the option the computer chose
 * @param {*} choiceComp the option the user chose
 */
function lose(choiceUser, choiceComp) {
    scoreComp++;
    scoreCompSpan.innerHTML = scoreComp;
    resultDiv.innerHTML = `${choiceComp.charAt(0).toUpperCase()}${choiceComp.slice(1)} beats ${choiceUser}. You lose.`;
}

/**
 * To update the message displayed when there is a draw
 * @param {*} choiceUser the option the user chose
 * @param {*} choiceComp the option the computer chose
 */
function draw(choiceUser, choiceComp) {
    resultDiv.innerHTML = `${choiceComp.charAt(0).toUpperCase()}${choiceComp.slice(1)} equals ${choiceUser}. It's a draw.`;
}

/**
 * To call functions depending on the case - win, lose or draw
 * @param {*} choiceUser the option the user chose
 */
function game(choiceUser) {
    const choiceComp = getChoiceComp();
    switch(choiceUser.charAt(0) +  choiceComp.charAt(0)) {
        case "rs":
        case "pr":
        case "sp":
            win(choiceUser, choiceComp);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(choiceUser, choiceComp);
            break;
        case "rp":
        case "ps":
        case "sr" :
            lose(choiceUser, choiceComp);
            break;
    }
}

function main() {

    // Adding Event Listeners
    rockDiv.addEventListener("click", function() {
        game("rock");
    });
    paperDiv.addEventListener("click", function() {
        game("paper");
    });
    scissorDiv.addEventListener("click", function() {
        game("scissor");
    });
}

main();