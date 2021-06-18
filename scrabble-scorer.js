// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word1=input.question("Let's play some scrabble! Enter a word:");
   //console.log(oldScrabbleScorer(word1));
   return word1;
};

let simpleScore=function(word){
  return word.length;
}
let vowelBonusScore=function(word){
  let letterPoints=0;
  let str='aeiou';
  for(i=0;i<word.length;i++)
  {
    if (str.includes(word[i].toLowerCase())){
      letterPoints=letterPoints+3;
    } else{
          letterPoints=letterPoints+1;
    }
  }
  return letterPoints;
}

//console.log(vowelBonusScore("sindhu"));

let scrabbleScore=function(word){
  word = word.toUpperCase();
	let letterPoints =0;
 
	for (let i = 0; i < word.length; i++) {
			letterPoints +=newPointStructure[word[i]];
	}
	return letterPoints;
 }

const scoringAlgorithms = [
  {
    name:'Simple Score',
    description:'Each letter is one Point',
    scoringFunction:simpleScore

  },
  {
    name:'Bonus Vowels',
    description:'for vowels 3 points,for consonents 1 point',
    scoringFunction:vowelBonusScore
  },
  {
    name:'scrabble',
    description:'for vowels 3 points,for consonents 1 point',
    scoringFunction:scrabbleScore
  }
];


function scorerPrompt() {
  console.log("Which Scoring Algorithm do u need?");
  for(let i=0;i<scoringAlgorithms.length;i++){
    let option=scoringAlgorithms[i];
   // console.log("*******");
    console.log(i+"-"+option.name+option.description);
  }
  let que=input.question("Enter 0,1 or 2?");
  return scoringAlgorithms[que];
}
function transform(oldstructure) {
  const swapVal={};
  for(let score in oldstructure){
    let val=oldstructure[score];
    for(let i=0;i<val.length;i++){
      swapVal[val[i]]=Number(score);
    }
  }
  return swapVal;
};
console.log(transform(oldPointStructure));

let newPointStructure;
newPointStructure=transform(oldPointStructure);
//console.log(scrabbleScore('Sindhu'));

function runProgram() {
   let word=initialPrompt();
   let selectedScore=scorerPrompt();
   let scoreFinal=selectedScore.scoringFunction(word);
   //typeof(selectedScore.scorerFunction(word));
   //console.log(selectedScore.scoringFunction(word));
   console.log(`score for ${word} is ${scoreFinal}`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

