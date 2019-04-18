
/*
 * Hangman
 */

var answer = "kayak";
var answerArry = answer.split('');

var playing = true;

function playHangman() {
    console.log("\n\t Playing Hangman!");
    while(playing){
        hangman();
    }
}

function hangman() {
    var guess = prompt('Guess a letter');
    console.log('you guessed: ' + guess);
    playing = false;
}

playHangman();