var wordlist= ["princess", "belle", "ariel", "cinderella"];
var storeguesses = [];

var maxwrongguesses = 10;
//remaing guesses function of maxwrongguesses; dependent on value of maxwrongguesses
var remainingguesses = maxwrongguesses;
var userpoints=0;
var losses=0;
//correctoptions has no set value because it will change with each function
var correctoptions;
var displayletters;
var displaywrong= [];


wrongword = ["abcdefghijklmnopqrstuvwxyz", "test"];
//wordsplit= wrongword[0].split("");
correctoptions = wordlist[0].split("");

document.onkeyup = function(event) 
{
 	var userGuess = event.key.toLowerCase();
 	var winBoolean = false;
 	var loseBoolean = false;
	incorrectindex = [];
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
 		//nothing
 	}
 	else {
 		displaywrong.push(userGuess);
 		remainingguesses--;
 		if (remainingguesses <= -1)
 		{
 			loseBoolean = true;
 		}
 		document.getElementById("number-of-guesses").innerHTML=remainingguesses;
 		document.getElementById("letters-guessed").innerHTML = displaywrong.join(" ");
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
			foundLetter=correctoptions;
		}
		else{
			displayletters.push("_");
			// document.getElementById("letters-guessed").innerHTML = wrongguesses;

		}
	}
 	//update the display
 	if(displayletters.join(" ").indexOf('_') === -1){
 		userpoints = userpoints+1;
 		// userpoints++;
 		document.getElementById("points").innerHTML=userpoints;
 		//win
 		winBoolean = true;
 	}
 	document.getElementById("word").innerHTML = displayletters.join(" ");
var countCorrectness = 0;
displayletters = [];
for(var i = 0; i < correctoptions.length; i++)
	{
		var foundLetter = false;
		for(var j =0; j < storeguesses.length; j++)
		{
			if(storeguesses[j].toLowerCase() === correctoptions[i].toLowerCase() )
			{
				foundLetter = true;
			}
		}
		if(foundLetter)
		{
			countCorrectness++;
			displayletters.push(correctoptions[i]);
		}
		else
		{
			displayletters.push("_");
		}
	}
 document.getElementById("word").innerHTML = displayletters.join(" ");
 	if(winBoolean){
 		alert("you win");
 	}
 	else if(loseBoolean){
 		alert("you lose!!!!!!!!!!!!!");
 	}
	if (winBoolean || loseBoolean)
	{
		ResetGame();
	}


 function ResetGame()
 	{ 
 		var wordChosen = wordlist[Math.floor(Math.random() * wordlist.length)];
 		correctoptions = wordChosen.split("");
 		//pick a new word

 		remainingguesses = maxwrongguesses;
 		document.getElementById("number-of-guesses").innerHTML=remainingguesses;
 		//reset lives
 		storeguesses = [];
 		document.getElementById('letters-guessed').innerHTML=storeguesses.join(',');
 		//reset guesses or letter bank

 		//reset the display of the word
 	displayletters = [];
for(var i = 0; i < correctoptions.length; i++)
	{
		var foundLetter = false;
		for(var j =0; j < storeguesses.length; j++)
		{
			if(storeguesses[j].toLowerCase() === correctoptions[i].toLowerCase() )
			{
				foundLetter = true;
			}
		}
		if(foundLetter)
		{
			countCorrectness++;
			displayletters.push(correctoptions[i]);
		}
		else
		{
			displayletters.push("_");
		}
	}
 document.getElementById("word").innerHTML = displayletters.join(" ");
 	};
}


// var wordlist= ["princess", "belle", "ariel", "cinderella"];
// var storeguesses = [];
// var currentword;
// var correctDisplay=[];
// var foundCount;
// var maxwrongguesses = 7;
// var lives =10;
// var userpoints=0;
// var losses=0;

// function checkWordForLetter (letter)
// 	{
// 		var positionAt = [];
// 		var stArray = wordlist.split("")
// 		for (var i=0; i<stArray.length; i++)
// 		{
// 			if (stArray[i] === letter)
// 			{
// 				positionAt.push[i];
// 			}
// 		}
// 		return positionAt;
// 	}

// function AlreadyGuessed(letter)
// {
// 	for (i=0; i<storeguesses.length; i++)
// 	{
// 		return true;
// 	}
// 	return false;
// }


// document.onkeyup = function(event) 
//  	{
//  	var userGuess = event.key.toLowerCase();

//  	if (AlreadyGuessed(userGuess)===true){
//  		document.getElementById("letters-guessed").innerHTML = "Letter Already used:" + userGuess;
//  		return;
//  	}
 	

//  	document.getElementById("letters-guessed").innerHTML = "";
//  	document.getElementById("word").innerHTML=" "+ userGuess;

//  	storeguesses.push(userGuess);

//  	var positionFound = checkWordForLetter(currentword,userGuess);

//  	var totalCharacters = positionFound.length;
//  	if (totalCharacters===0)
//  	{
//  		lives--;
//  		document.getElementById("number-of-guesses").innerHTML = lives;
//  		if (lives===0){
//  			document.getElementById("losses").innerHTML="You lose";
//  			restart();
//  		}
//  	}

//  	else{
//  		foundCount += totalCharacters;
//  		for (i=0; i<totalCharacters.length; i++)
//  		{
//  			correctDisplay(positionFound[i])=userGuess;
//  		}

//  	}
//  	}

//  // function Reset()
//  // 	{
//  // 		maxwrongguesses=0;
//  // 		lives =10;
//  // 		storeguesses=[];
//  // 		var 

//  // 	}

