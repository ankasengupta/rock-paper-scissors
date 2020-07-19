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
 * @returns array element at randomly generated point between 0-3
 */
function getChoiceComp() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

function win(choiceUser, choiceComp) {
    scoreUser++;
    scoreUserSpan.innerHTML = scoreUser;
    resultDiv.innerHTML = `${choiceUser.charAt(0).toUpperCase()}${choiceUser.slice(1)} beats ${choiceComp}. You win!`;
}

function lose(choiceUser, choiceComp) {
    scoreComp++;
    scoreCompSpan.innerHTML = scoreComp;
    resultDiv.innerHTML = `${choiceComp.charAt(0).toUpperCase()}${choiceComp.slice(1)} beats ${choiceUser}. You lose.`;
}

function draw(choiceUser, choiceComp) {
    resultDiv.innerHTML = `${choiceComp.charAt(0).toUpperCase()}${choiceComp.slice(1)} equals ${choiceUser}. It's a draw.`;
}

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