//Initialization
//================================================================
const words = [
    "banjo", "kayak", "phlegm", "sphinx", "rogue", "rhythm", 
    "drunkard", "pixel", "decanter", "microwave", "basketball", 
    "plague", "excalibur", "haphazard", "exodus", "embezzle", 
    "ivory", "jawbreaker","beekeeper", "polka", "schnapps", "xylophone"
];

var currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
var guessesLeft = 6;
let gifCount = 1;
document.getElementById("guesses-left").innerHTML = guessesLeft;

//Sets initail img & hides game status pop-ups
document.getElementById("gifs").src = 'assets/images/alive.png'
document.getElementById("success").style.visibility='hidden' ;
document.getElementById("failure").style.visibility='hidden' ;

// var loops = {pics: [img1, img2, img3],
//         sounds: [4, 3] 
// }

// Win / Loss Variables & Displays
var wins = 0;
var losses = 0;

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;

var audio;
            var audio1;


//Word to be guessed==================================================================
var resetLettersGuessed = ""
var progressWord = [];
var mysteryWord = [];
var i;



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



//Onkeyup Functions====================================================================

document.onkeyup  = function (event) {
    if (guessesLeft > 0 && lettersToGuess() > 0) {
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

        //Changes gifCount to next gif every two chances used.

        if (guessesLeft > 5) {gifCount = 1}
        else if (guessesLeft > 3) {gifCount = 2}
        else if (guessesLeft >1) {gifCount = 3}
        else {gifCount = 4}
        
        // document.getElementById("gifs").innerHTML = gifCount; //TESTING---------

        if (gifCount === 1) {document.getElementById("gifs").src = 'assets/images/alive.png'}
        else if (gifCount === 2) {document.getElementById("gifs").src = 'assets/images/sexymodeling.jpg'}
        else if (gifCount === 3) {document.getElementById("gifs").src = 'assets/images/webdesigns.jpg'}
        else {document.getElementById("gifs").src = 'assets/images/videogames.jpg'}

        // subtract a point from guesses left
        guessesLeft--;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
    } 
    



//Win and Failure Functions=========================================================
//FAIL
    if (guessesLeft == 0) {
        document.getElementById("failure").style.visibility='visible' ;
        var phrases = ['Yup! Onto the next one!', 'Leggo!', 'You like the Air Jordan of Hangman!', 'Dont hurt em!', 'Turn up!',
        'Go and brush ya shoulders off!', 'In the zone!']
        var nextRound = phrases[Math.floor(Math.random() * phrases.length)];

        // Add to the losses total
        
        document.getElementById("gifs").src = 'assets/images/sexymodeling.jpg'
        losses++;
        document.getElementById("losses").innerHTML = losses;
    }

//WIN
    if (lettersToGuess() == 0) {
        var phrases = ['Yup! Onto the next one!', 'Leggo!', 'You like the Air Jordan of Hangman!', 'Dont hurt em!', 'Turn up!',
        'Go and brush ya shoulders off!', 'In the zone!']
        var nextRound = phrases[Math.floor(Math.random() * phrases.length)];

        // Add to the win total
        document.getElementById("success").style.visibility='visible' ;
        document.getElementById("gifs").src = 'assets/images/sexymodeling.jpg'
        wins++;
        document.getElementById("wins").innerHTML = wins;
    }

}
}

document.onkeyup  = function (event) {
    if (guessesLeft > 0 && lettersToGuess() > 0) {
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

        //Changes gifCount to next gif every two chances used.

        if (guessesLeft > 5) {gifCount = 1}
        else if (guessesLeft > 4) {gifCount = 2}
        else if (guessesLeft >2) {gifCount = 3}
        else if (guessesLeft >1) {gifCount = 5}
        else {gifCount = 4}
        
        // document.getElementById("gifs").innerHTML = gifCount; //TESTING---------

        if (gifCount === 1) {document.getElementById("gifs").src = 'assets/images/alive.png';
            var audio = new Audio('assets/audio/lalala.m4a');
            audio.play();
            var audio1 = new Audio('assets/audio/fish.mp3');
            audio1.play();}
        else if (gifCount === 2) {document.getElementById("gifs").src = 'assets/images/bread.png'
            var audio = new Audio('assets/audio/toast.m4a');
            audio.play();}
        else if (gifCount === 3) {document.getElementById("gifs").src = 'assets/images/toast.png'
            var audio = new Audio('assets/audio/mmm.m4a');
            audio.play();}
        else if (gifCount === 5) {document.getElementById("gifs").src = 'assets/images/ohno.jpeg'
            var audio = new Audio('assets/audio/ohno.m4a');
            audio.play();
            var audio1 = new Audio('assets/audio/water.mp3');
            audio1.play();
            var audio3 = new Audio('assets/audio/bomb.mp3');
            audio3.play();}
        else {document.getElementById("gifs").src = 'assets/images/dead1.png'}

        // subtract a point from guesses left
        guessesLeft--;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
    } 
    



//Win and Failure Functions=========================================================
//FAIL
    if (guessesLeft == 0) {
        document.getElementById("failure").style.visibility='visible' ;
        var phrases = ['Yup! Onto the next one!', 'Leggo!', 'You like the Air Jordan of Hangman!', 'Dont hurt em!', 'Turn up!',
        'Go and brush ya shoulders off!', 'In the zone!']
        var nextRound = phrases[Math.floor(Math.random() * phrases.length)];

        // Add to the losses total
        
        document.getElementById("gifs").src = 'assets/images/dead1.jpeg'
        losses++;
        document.getElementById("losses").innerHTML = losses;
        var audio = new Audio('assets/audio/shock.mp3');
            audio.play();
        var audio1 = new Audio('assets/audio/being shocked.m4a');
            audio1.play();
            var audio = new Audio('assets/audio/catmeow.mp3');
            audio.play();
    }

//WIN
    if (lettersToGuess() == 0) {
        var phrases = ['Yup! Onto the next one!', 'Leggo!', 'You like the Air Jordan of Hangman!', 'Dont hurt em!', 'Turn up!',
        'Go and brush ya shoulders off!', 'In the zone!']
        var nextRound = phrases[Math.floor(Math.random() * phrases.length)];

        // Add to the win total
        document.getElementById("success").style.visibility='visible' ;
        document.getElementById("gifs").src = 'assets/images/winn.jpeg'
        wins++;
        document.getElementById("wins").innerHTML = wins;
        
        var audio = new Audio('assets/audio/win.m4a');
            audio.play();
            var audio = new Audio('assets/audio/tada.mp3');
            audio.play();
    }

}
}


//BUTTONS=============================================================================
//BUTTON TO RESET IF SUCCESS
document.getElementById("next-round").onclick = function(){
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
     document.getElementById("gifs").src = 'assets/images/alive.png'
     document.getElementById("success").style.visibility='hidden' ;
     audio.pause();
     audio.currentTime = 0;
     audio1.pause();
     audio1.currentTime = 0;
};

//BUTTON TO RESET IF FAILURE
document.getElementById("next-round1").onclick = function(){
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
    document.getElementById("gifs").src = 'assets/images/alive.png'
    document.getElementById("failure").style.visibility='hidden' ;
    audio.pause();
     audio.currentTime = 0;
     audio1.pause();
     audio1.currentTime = 0;
};

