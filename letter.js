



//Letter Constructor Function

//Variables for bringing in npm packages//
var chalk = require("chalk");

////Creating variable Letter which is a constructor and creates three empty arrays////////
var Letter = function(gameWord) {
    this.gameLetters = [];
    this.gameDashes = [];
    this.badGuess = [];
    ///////Uses the gameLetters array and maps over to create a dashed array version/////
    this.letterArray = function() {
        this.gameLetters = gameWord.split('');
        this.gameDashes = this.gameLetters.map( function(index)   {
            return "_ ";
        });
    }
}; 

///////Takes in the user guess and will let the user know if the letter is or is not in the word/////
Letter.prototype.isInWord = function(guess) {
    if(this.gameLetters.indexOf(guess) !== -1)  {
        console.log(chalk.blue.bold(`${guess}`) + " is in the word");
    }else {
        console.log(chalk.red.bold(`${guess}`) + " is not in the word");
        this.badGuess.push(guess);
    }
}
//////////If the letter is correct, then replace the correct dash(index) with the letter.  
Letter.prototype.populatesLetter = function(guess)  {
    this.gameLetters.forEach((letter, index, array) => {
        if(guess === letter)    {
            this.gameDashes[index] = guess;
        }
    });
    console.log(this.gameDashes.join(' '));
}

// Test consoling if this shit prints to the terminal
// let monkey = new Letter("monkey");
// monkey.letterArray();
// console.log(monkey.gameLetters);
// console.log(monkey.gameDashes);
// monkey.isInWord("d");
// monkey.populatesLetter("o");

module.exports = Letter;