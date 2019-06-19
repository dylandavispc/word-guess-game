//Variables
//================================================================
const words = [
    "banjo", "kayak", "phlegm", "sphinx", "rogue", "rhythm", 
    "drunkard", "pixel", "decanter", "microwave", "basketball", 
    "plague", "excalibur", "haphazard", "exodus", "embezzle", 
    "ivory", "jawbreaker","beekeeper", "polka", "schnapps", "xylophone"
];

let word = words[Math.floor(Math.random() * words.length)];
console.log(word);//TESTING------
let wins = 0;
let losses = 0;
let questionIndex = 0;
let answerArray= [];


//Functions
//================================================================

function startUp() {
    for (let i =0; i < word.length; i++) {
        answerArray[i] = "_";
    }

}
console.log(answerArray);









