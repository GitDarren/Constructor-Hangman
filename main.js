/////////////CLI Constructor Hangman Game////////////////

//Variables for bringing in npm packages//
var inquirer = require("inquirer");
var chalk = require("chalk");
//Variables for bringing in constructors//
var Word = require("./word.js");
var Letter = require("./letter.js");


//Setting up the game//
var win = 0;
var lose =0;
var lives = 6;
var word = {};
var gameLetters = {};


//////Creating console prompt to users/////////
console.log(chalk.red(
  " ----------------------------------------\n" +
  " Welcome to the Constructor Hangman Game. \n" + 
  "        Single word Movie Titles          \n" +
  " ----------------------------------------\n") +
  " How to Play?\n" +
  " 1. The Game will ask if you wish to start\n" +
  " 2. The game will run and provide a randomly generate word\n" +
  " 5. If the letter is correct, then the game will fill in that letter into the word\n" +
  " 6. If the letter is incorrect, then you will be prompted with how many lives you have remaing\n" +
  " 7. You win the game by completing the word and lose the game when you run out of lives\n" +
  " 10. Have fun, it's just a damn game");

////////Setting up the start of the game, asking users to decide if they wish to play the game//////
////////Users an inquirer prompt to give the user the ability to say yes or no to playing////////
var startGame = function()  {
  inquirer.prompt([
    {
       type: "text",
       name: "choice",
       message: chalk.blue( "Would you like to start a Game (y/N)?"),
       validate: function(str){
				/* regular expression to accept only characters and that to of length 1 */
				var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
				return regEx.test(str);
       },  
    }
]).then(function(answer) {////////Basically checks to see if the user types y/Y and starts the game, otherwise asks again///
    var choice = answer.choice;
    if(choice === "y" || choice === "Y")  {
      getWord();
    }else {
      startGame();
    }
  });
};

///////function to the check if the user wins or loses the game.  If they win or lose, it restarts the game/////
var CheckWinLoss = function() {
  if(gameLetters.badGuess.length === 6) {
    console.log("------------------------\n");
    console.log(chalk.red("You didn't win, but please try again."));
    console.log("------------------------\n");
    startGame();
    return;
  }else if(gameLetters.gameDashes.indexOf('_ ') === -1) {
    console.log("------------------------\n");
    console.log(chalk.green.underline.bold(`You won!!  NOW PLAY AGAIN!!\n`));
    console.log("------------------------\n");
    startGame();
    return;
  } else {//////////If they have not finished the game, the game continues////////
    console.log("------------------------\n");
    console.log(chalk.inverse(`Lives reamining: ${lives - gameLetters.badGuess.length}\n`));
    console.log("------------------------\n");
    getLetter();
  }
}


////////Pulls a random word from word.js to///////////
var getWord = function()  {
  word = new Word();
  wordToGuess = word.randomWord;
  
  gameLetters = new Letter(wordToGuess);
  gameLetters.letterArray();
  console.log(gameLetters.gameDashes.join(' ')); 

  CheckWinLoss();
};


///////A function that asks the user to input a letter////////
function getLetter() { 
inquirer.prompt([
    {
       type: "input",
       name: "choice",
       message: "Guess a letter please!",
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

/////////Starts the game//////////
startGame();
