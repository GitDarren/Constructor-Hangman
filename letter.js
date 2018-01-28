



//Letter Constructor Function

//I think this will have an array that holds all the letter guesses from the user//  

//Will need to export out to word.js 

var Letter = function(gameWord) {
    this.gameLetters = [];
    this.gameDashes = [];
    this.badGuess = [];

    this.letterArray = function() {
        this.gameLetters = gameWord.split('');
        this.gameDashes = this.gameLetters.map( function(index)   {
            return "_ ";
        });
    }
}; 


Letter.prototype.isInWord = function(guess) {
    if(this.gameLetters.indexOf(guess) !== -1)  {
        console.log(`${guess} is in the word`);
    }else {
        console.log(`Is not in the word`);
        this.badGuess.push(guess);
    }
}

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