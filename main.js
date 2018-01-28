var inquirer = require("inquirer");
var chalk = require("chalk");
var Word = require("./word.js");
var Letter = require("./letter.js");
// var randomWord = randomWord();


//Setting up the game score//
var totalWords = 1;
var win = 0;
var lose =0;
var lives = 6;
var word = {};
var gameLetters = {};

var CheckWinLoss = function() {
  if(gameLetters.badGuess.length === lives) {
    console.log(`You are a big fat loser, but you should keep playing`);
    getWord();
    return;
  }else if(gameLetters.gameDashes.indexOf('_ ') === -1) {
    console.log(`You are in fact not a big fat loser, but keep playing as you might truly be a big fat loser`);
    getWord();
    return;
  } else {
    getLetter();
  }
}



//Do once per game//
var getWord = function()  {
  word = new Word();
  wordToGuess = word.randomWord;
  // console.log(`Word to guess is ${wordToGuess}`);
  
  gameLetters = new Letter(wordToGuess);
  gameLetters.letterArray();
  console.log(gameLetters.gameDashes.join(' ')); 
  CheckWinLoss();
};



function getLetter() {
  //Create an inquirer function that prompts the user to confirm or agree to play the game.  If they agree, move to the prompt.

  //Pull in random word from wordbank.js and convert it to a series of underscore lines
  //Display in the terminal a random word represented by a series of underscores.  
  //Somehow structure the terminal display so that the user continues to see the hangman word with any new letters populating it.
    

inquirer.prompt([
    {
       type: "input",
       name: "choice",
       message: "Guess a letter please",
       filter: function(val)  {
         return val.toLowerCase();
       },
       validate: function(val)  {
            return /[a-z1-9]/gi.test(val);
       } 
    }
]).then(function(answer) {
    gameLetters.isInWord(answer.choice);
    gameLetters.populatesLetter(answer.choice);
    CheckWinLoss();
  });
};


getWord();
