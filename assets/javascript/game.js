// var userinput = [];
// var remainingguesses;
// var wordlist= ["princess", "belle", "ariel", "cinderella"];
// var letteramount;
// //var display.word = [];

// function connecttoletterposition(word, letter)
// {
// var letterposition = [];
// var starray = word.split('');
// for (i=0; i< starray.length; i++){
// 	if (starray[i] === letter){
// 	console.log("MATCH at: " +i)
// 	letterposition.push(i);
// 	}
// }
// 	return letterposition;
// 	};

// function letterstatus(letter){
// 	for (i=0; i<userinput.length; i++)
// 		{ if (letter === userinput[i])
// 			{
// 			return true;
// 		}
// 	}
// 	return false;
// };

// document.onkeyup=function(event){
// 	var userguess = event.key;
// 	console.log ("User pressed: "+ userguess);
// 	if (letterstatus(userguess)===true){
// 		console.log("Letter already used: "+ userguess);
// 		return;
// 	}
// 	userinput.push(userguess); 
// };



// //---------------------------------------------------------------------------

// var userinput = [];
// var remainingguesses;
// //var this.letter;
// //var display.letter = [];

// function connecttoletterposition(letter)
// {
// var princessletters= ["p","r","i","n","c","e","s","s"];
// var wrongletterposition = [];
// var rightletterposition = [];
// document.onkeyup=function(event){
// 	var userguess = event.key;
// 	for (i=0; i< princessletters.length; i++){
// 	if (princessletters[i] === userguess)
// 	{
// 	rightletterposition.push(i);
// 	}
// 	else{
// 	wrongletterposition.push(i);
// 	}
// }
// }


// function letterstatus(letter){
// 	for (i=0; i<userinput.length; i++)
// 		{ if (letter === userinput[i])
// 			{
// 			return true;
// 		}
// 	}
// 	return false;
// }

// document.onkeyup=function(event){
// 	var userguess = event.key;
// 	console.log ("User pressed: "+ userguess);
// 	if (letterstatus(userguess)===true){
// 		console.log("Letter already used: "+ userguess);
// 		return;
// 	}

// function fillWordDiv (wordToUse) {
// 	this.word = "";
// 	for(var i=0; i<princessword.list[wordToUse].length; i++)
// 	{
// 	this.word += "_ ";
// 		}
// 	//we want to write to the word div here
// 	document.getElementById('princessword').innerHTML = userguess;
// 	}
// }
// };

// how to switch from round to round...
//1) reset chosen word
//2) reset any counters for wrong guesses
//3) reset correct options
//4) reset display of word and reset display of the image
var wordlist= ["princess", "belle", "ariel", "cinderella"];
var storeguesses = [];
var maxwrongguesses = 5;
var remainingguesses = maxwrongguesses;
var userpoints=0;
var lives=5;
var correctoptions;
var displayletters;


correctoptions = wordlist[0].split("");

document.onkeyup = function(event) 
 	{
	var userGuess = event.key.toLowerCase();
	displayletters = [];
	var foundGuess = false;
	storeguesses.push(userGuess);
 	for (var i = 0; i < correctoptions.length; i++)
 	{
 		//check for a match in the chosenword
 		if (userGuess.toLowerCase() === correctoptions[i].toLowerCase())
	 	{
	 		foundGuess = true;
	 	}
	 	else{
	 		
	 		
	 	}
 	}
 	if(foundGuess){
 		
 	}
 	else{
 		remainingguesses--;
 	}
 	var countCorrectness = 0;

	for(var i = 0; i < correctoptions.length; i++){
		var foundLetter = false;
		for(var j =0; j < storeguesses.length; j++){
			if(storeguesses[j].toLowerCase() === correctoptions[i].toLowerCase()){
				foundLetter = true;
			}
		}
		if(foundLetter){
			countCorrectness++;
			displayletters.push(correctoptions[i]);
		}
		else
		{
			displayletters.push("_");
		}
	}
 	//update the display
 	document.getElementById("word").innerHTML = displayletters.join(" ");
}

var countCorrectness = 0;
displayletters = [];
for(var i = 0; i < correctoptions.length; i++){
	var foundLetter = false;
	for(var j =0; j < storeguesses.length; j++){
		if(storeguesses[j].toLowerCase() === correctoptions[i].toLowerCase()){
			foundLetter = true;
		}
	}
	if(foundLetter){
		countCorrectness++;
		displayletters.push(correctoptions[i]);
	}
	else
	{
		displayletters.push("_");
	}
}
 document.getElementById("word").innerHTML = displayletters.join(" ");

 function startUp()
 {	
 	var userpoints=0;
	var lives=5;
 	var randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
 	var letter = document.getElementById("word").value;
 	//for var i
 	
}
//  	else 
//  	{letters-guessed.push(i);
//  		document.getElementById("letters-guessed").innerHTML =s;
//  	}
// }

 function Letter()
 {
 	var letter = document.getElementById("word").value;
 	if (letter.length>0)
 	{
 		for (var i = 0; i < randomWord.length; i++)
 			if (randomWord[i] === letter)
 			{
 				answerArray[i] = letter;
 			}
 	}
 }
 // count++;
 // document.getElementById("princesspoints").innerHTML = "Points:" + count;
 // document.getElementById()


// var princess = ["belle"];
// var correctoptions= princess[0].split("");

// document.onkeyup = function(event) {

//     var userGuess = event.key;

//     if (correctoptions.search(userGuess) >= 0){
//     	userpoints++; 
//     	document.getElementById("princessword").innerHTML = userGuess;
//     }  
//     else (
//     	lives=--; 
//     	document.getElementById("letters-guessed").innerHTML = lives;
//     	)
// }
