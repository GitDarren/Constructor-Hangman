var inquirer = require("inquirer");
var chalk = require("chalk");



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



// this.askForLetter = function() {
//     return inquirer
//       .prompt([
//         {
        
//           type: ,
//           name: ,
//           message: ,
//           validate: function(val) {
           
//           }
//         }
//       ])
//       .then(function(val) {
//         // If the user's guess is in the current word, log that they chose correctly
//         var didGuessCorrectly = 
//         if (didGuessCorrectly) {
          
//           // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
//         }
//         else {
          
//           console.log(yes);
//           console.log(no);
//         }
//       });
//   };



// }

game();