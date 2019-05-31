var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text")
var triesText = document.getElementById("tries-left")

computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var triesLeft = 10;
var losses = 0;

directionsText.textContent = "Press any key to guess what the computer is thinking!"
document.onkeyup = function(event){
    var userGuess = event.key;

    var computerGuess =computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if(userGuess === computerGuess){
        wins++;
    } 
    else{
        triesLeft--;
        
        if(triesLeft === 0){
            losses++;
            triesLeft = 10;
        }
    }
    
    userChoiceText.textContent = "You chose: " + userGuess;
    winsText.textContent = "Wins: " + wins;
    triesText.textContent = "Tries Left: " + triesLeft;
    lossesText.textContent = "Losses: " + losses;
   
};
