var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var triesText = document.getElementById("tries-left");
var prevText = document.getElementById("prev-text");

computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var gameState = {
//     wins : 0,
//     triesLeft : 10,
//     losses : 0
// };

var wins = 0;
var triesLeft = 10;
var losses = 0;

var prevChoices = [];

directionsText.textContent = "Press any key to guess what the computer is thinking!"

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function getNewLetter(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
document.onkeyup = function(event){
    
    var userGuess = event.key;
    
    
    if(!computerChoices.includes(userGuess)){
        return;
    }
    
    prevChoices.push(userGuess);

    var userWins = userGuess === computerGuess;

    // User has won!
    if(userWins){
        wins++;
        triesLeft = 10;
        computerGuess = getNewLetter();
        
    } 
    // User lost the round!
    else{
        triesLeft--;
        //User lost the game!
        if(triesLeft === 0){
            losses++;
            triesLeft = 10;
            computerGuess = getNewLetter();
            prevChoices = [];
        }
    }
    
    userChoiceText.textContent = "You chose: " + userGuess;
    winsText.textContent = "Wins: " + wins;
    triesText.textContent = "Attempts: " + triesLeft;
    lossesText.textContent = "Losses: " + losses;
    prevText.textContent = "Previous Guesses: " + prevChoices.toString();

    if(userWins){
        prevChoices = [];
    }
};


