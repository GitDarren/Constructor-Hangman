

var wordBank = 
[
"patton",
"amadeus",
"jaws",
"up",
"lolita",
"platoon",
"spaceballs",
'meatballs',
'heat',
'spy',
'goldeneye',
'spectre',
'casablanca',
'twilight',
'tangled',
'enchanted',
'cars',
''
];

var Word = function()   {
//    this.wordBank = wordBank;
   this.randomWord = wordBank[Math.floor(wordBank.length * Math.random())] 
}

// var newWord = new Word;

// console.log(newWord);

module.exports = Word;