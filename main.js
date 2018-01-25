var inquirer = require("inquirer");
var chalk = require("chalk");
var word = require("./word.js");
var wordbank = require("./wordbank.js");
var letter = require("./letter.js");
var randomWord = randomWord();


//Setting up the game score//
var totalWords = 1;
var win = 0;
var lose =0;


//////////Sample Recursive function/////////////////
// var count = 0;

// var re = function(num){
//     if(num<10){
//     console.log("something");
//     count++;
//     re(count);
//     }else{
//         return "done!";
//     }
// };

// re(count);

//////////Sample Recursive function/////////////////


function game() {
  //Create an inquirer function that prompts the user to confirm or agree to play the game.  If they agree, move to the prompt.

  //Pull in random word from wordbank.js and convert it to a series of underscore lines
  //Display in the terminal a random word represented by a series of underscores.  
  //Somehow structure the terminal display so that the user continues to see the hangman word with any new letters populating it.


inquirer.prompt([
    {
       type: "input",
       name: "choice",
       message: "Guess a letter please",
       validate: function(val)  {
            return /[a-z1-9]/gi.test(val);
       } 
    }
]).then(function(val) {
    // If the user's guess is in the current word, log that they chose correctly
    var didGuessCorrectly = this.currentWord.guessLetter(val.choice);
    if (didGuessCorrectly) {
      console.log(chalk.green("\nCORRECT!!!\n"));
      // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
    }
    else {
      this.guessesLeft--;
      console.log(chalk.red("\nINCORRECT!!!\n"));
      console.log(this.guessesLeft + " guesses remaining!!!\n");
    }
  });
};

//


game();