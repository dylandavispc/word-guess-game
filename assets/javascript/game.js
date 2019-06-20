//Variables
//================================================================
const words = [
    "banjo", "kayak", "phlegm", "sphinx", "rogue", "rhythm", 
    "drunkard", "pixel", "decanter", "microwave", "basketball", 
    "plague", "excalibur", "haphazard", "exodus", "embezzle", 
    "ivory", "jawbreaker","beekeeper", "polka", "schnapps", "xylophone"
];

var currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

// This variable holds the number of guesses left
var guessesLeft = 6;
document.getElementById("guesses-left").innerHTML = guessesLeft;

// This variable will count the number of times we won
var wins = 0;
var losses = 0;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;

var resetLettersGuessed = ""

// This is an empty array that we will push our blanks to
var progressWord = [];

// This is an array that we will push the letters from the current word to
// for comparison of whether the player's guess is correct or not
var mysteryWord = [];
var i;

console.log("Current word is: " + currentWord);

// This is the code that will push out blank spaces for the letters of the current
// word so the player can see the word and begin to guess letters
for (i = 0; i < currentWord.length; i++) {
    progressWord.push("__");
}
document.getElementById("word-guess").innerHTML = progressWord.join(" ");

// function evaluating the positions of the given letter in the currentWord string
// return empty array in case of failure
function letterInWord(letter) {
    // the array that will contain the char positions in the currentWord that has the 
    var positions = new Array();
    for (i = 0 ; i < currentWord.length; i++) {
        if (currentWord[i] === letter)
            positions.push(i);
    }
    return positions;
}

// return number of letters that is still not guessed
function lettersToGuess() {
    var i ;
    var toGess = 0 ;
    for (i in progressWord) {
        if (progressWord[i] === "__")
            toGess++;
    }
    return toGess;
}

// These are the key events used to play and to document the letters already used and/or
// letters in the answers
document.onkeyup = function (event) {
    var letter = event.key;
    var lettersGuessed = letter.toLocaleUpperCase();
    var i;

    console.log("You have typed a letter: ".concat(letter));

    var positions = letterInWord(lettersGuessed);


    // This will alert correct and compare the letter guessed with the current word
    if (positions.length) {
        console.log("User has pressed a letter from word: " + letter);

        for (i = 0 ; i < positions.length; i++) {
            progressWord[positions[i]] = lettersGuessed;
        }

        // replace progress Word underscore with letter pressed
        document.getElementById("word-guess").innerHTML = progressWord.join(" ");
    } else {
        // alert("WRONG!");
        document.getElementById("letters-guessed").innerHTML += lettersGuessed + " ";

        // subtract a point from guesses left
        guessesLeft--;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
    }

    // This code will tell the user the game is over along with a message about
    // their win streak, then it will reset the game while quickly showing
    // what the word was
    if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        alert("Game Over! You finished with a streak of " + wins + " wins! The word was " + currentWord);
        
        location.reload();
    }

    // this is the code that alerts you when you've won the game, then it will reset
    // the current word to begin another round
    if (lettersToGuess() == 0) {
        var phrases = ['Yup! Onto the next one!', 'Leggo!', 'You like the Air Jordan of Hangman!', 'Dont hurt em!', 'Turn up!',
        'Go and brush ya shoulders off!', 'In the zone!']
        var nextRound = phrases[Math.floor(Math.random() * phrases.length)];
        alert(nextRound);


        // reset guesses left
        guessesLeft = 6;
        document.getElementById("guesses-left").innerHTML = guessesLeft;

        // reset letters guessed
        document.getElementById("letters-guessed").innerHTML = resetLettersGuessed;

        // This code generates a new word to guess and then pushes out the blanks again
        currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

        progressWord = [];
        for (i = 0; i < currentWord.length; i++) {
            progressWord.push("__");
        }
        document.getElementById("word-guess").innerHTML = progressWord.join(" ");

        // Add to the win total
        wins++;
        document.getElementById("wins").innerHTML = wins;
    }
}


