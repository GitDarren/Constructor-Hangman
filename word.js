

var wordBank = 
[
"patton",
"amadeus",
"jaws"
];

var Word = function()   {
//    this.wordBank = wordBank;
   this.randomWord = wordBank[Math.floor(wordBank.length * Math.random())] 
}

// var newWord = new Word;

// console.log(newWord);

module.exports = Word;